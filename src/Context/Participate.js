import { createContext, useState } from "react";
import { ethers } from 'ethers';
import { ContractABI, ContractAddress } from "../Utils/constant";

export const ParticipateContext = createContext();

export const getAlchemyProvider = () => {
    const provider = new ethers.providers.JsonRpcProvider("https://polygon-mumbai.g.alchemy.com/v2/xKv2aklTs2Uf4DyCKzxvanihhrNKnjc0") // api_key
    // const signer = provider.getSigner()
    return provider;
}

const getMetamaskProvider = () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    return provider;
}

const keywordArray = ['Hurray', 'Won', 'Money', 'Wealth']

const ParticipateProvider = ({children}) => {
    const [currentAccount, setCurrentAccount] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [playersCount, setPlayersCount] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [timeLeft, setTimeLeft] = useState(-2);
    const [participated, setParticipated] = useState(false);
    const [isReadLoading, setIsReadLoading] = useState(true);
    const [winners, setWinners] = useState([])
    
    // const LotteryContract = getContract();
    // On each refresh/render, check if user had connected his wallet to this site anytime in past.
    /*
        eth_accounts returns an array that is either empty or contains a single account address. 
        The returned address, if any, is the address of the most recently used account that the caller(website) is permitted to access.
        Callers are identified by their URL origin, which means that all sites with the same origin share the same permissions.
    */
    const checkIfConnectedInPast = async () => {
        try 
        {
            if (typeof window.ethereum === 'undefined') {
                console.log("No Wallet Installed") // no need to alert
            }
            else if(!window.ethereum.isMetaMask){
                console.log("Metamask not installed") // no need to alert
            }
            else {
                const accounts = await window.ethereum.request({ method: 'eth_accounts' });
                if(accounts.length)
                {
                    setIsLoading(true);
                    setCurrentAccount(accounts[0]);
                    // disable connect button, connected
                    setIsLoading(false);
                    return accounts[0];
                }
            }
        } catch(error) {
            console.log(error);
        }
        return '';
    }

    const connectWallet = async () => {
        try 
        {
            if(typeof window.ethereum === 'undefined')
            {
                alert("Please Install MetaMask")
            }
            else if (!window.ethereum.isMetaMask)
            {
                alert("Currently we have support only for MetaMask");
            }
            else
            {
                setIsLoading(true);
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' }); // metamask prompt opens and awaits approval
                setCurrentAccount(accounts[0]);
                // disable connect button, connected
                setIsLoading(false);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const Listener = async (contract) => {
        contract.on("Entered", () => {
            setIsReadLoading(true);
            getReadOnlyData(currentAccount);
            setIsLoading(false);
        })
    }

    const WinnerListener = async (contract) => {
        contract.on("ResultDeclared", () => {
            setIsReadLoading(true);
            getReadOnlyData(currentAccount);
            setIsLoading(false);
        })
    }

    const participate = async () => {
    try {
    // use metamask provider for connect wallet and participate option
        if(!currentAccount)
        {
            alert("Connect Your Wallet")
        }
        else {
            setIsLoading(true);
            const MetamaskProvider = getMetamaskProvider();
            const signer = MetamaskProvider.getSigner();
            const contract = new ethers.Contract(ContractAddress, ContractABI, signer);
            Listener(contract);
            await contract.enter({value: ethers.BigNumber.from("10000000000000000")});
        } 
        }catch(error) {
            console.log(error);
            setIsLoading(false);
        }
    }

    const pickWinner = async () => {
        try {
            if(!participated)
            {
                alert("This button should not appear for user who hasn't participated")
            }
            else {
                setIsLoading(true);
                const MetamaskProvider = getMetamaskProvider();
                const signer = MetamaskProvider.getSigner();
                const contract = new ethers.Contract(ContractAddress, ContractABI, signer);
                WinnerListener(contract);
                await contract.pickWinner();
            }            
        }
        catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }

    const getReadOnlyData = async (r) => {
    try {
    // use alchemy providers for retrieving data which is needed on page load
        const AlchemyProvider = getAlchemyProvider();
        const contract = new ethers.Contract(ContractAddress, ContractABI, AlchemyProvider);
        
        const players_count = await contract.getPlayersCount();
        const total_amount = await contract.totalAmount();
        const time_left = await contract.getTimeLeft();
        const winners_data = await contract.getWinners();

        setPlayersCount(players_count.toNumber());
        setTotalAmount(ethers.utils.formatEther(total_amount));

        const structuredWinners = winners_data.map((winner)=> ({
            winnerAddress: winner.winner,
            amount: ethers.utils.formatEther(winner.amount),
            keyword: keywordArray[~~(Math.random() * keywordArray.length)],
        }))
        setWinners(structuredWinners);

        let rst;
        if(r){
            rst = await contract.hasPlayer(r);
            setParticipated(rst);
        }

        if(time_left.toNumber()===256)
        {
            setTimeLeft(-1);
        }
        else
        {
            setTimeLeft(time_left.mul(1000).toNumber());
        }
    } catch(error){
        console.log(error);
    }
    setIsReadLoading(false);
}    
    return (
        <ParticipateContext.Provider value={{winners, getMetamaskProvider, pickWinner, participate, participated, isReadLoading, playersCount, totalAmount, timeLeft, checkIfConnectedInPast, connectWallet, currentAccount, isLoading, getReadOnlyData}}>
            {children}
        </ParticipateContext.Provider>
    )
}

export default ParticipateProvider;