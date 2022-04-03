import * as React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import ExpandCircleDownRoundedIcon from '@mui/icons-material/ExpandCircleDownRounded';
import { Link as ScrollLink} from 'react-scroll'
import Logo from "../images/logo2.png";
import { ParticipateContext } from '../Context/Participate';
import { shortenAddress } from '../Utils/shortenAddress';

const Welcome= (props) => {
  const {checkIfConnectedInPast, connectWallet, currentAccount, isLoading, getReadOnlyData} = React.useContext(ParticipateContext);

  React.useEffect(() => {
    async function fn() {
      const r = await checkIfConnectedInPast();
      getReadOnlyData(r);
    }
    fn();
  },[]); // eslint-disable-line react-hooks/exhaustive-deps
  
  return (
    <React.Fragment>
        <Box sx={{ position: "relative" ,backgroundImage: "linear-gradient(134deg, #3266c6 0%, #00b1e2 100%)"}}>
            <Box sx={{ height: "88vh", background: "url(https://modicoin-6lron.ondigitalocean.app/assets/images/dark-top-right-bg.png) top right no-repeat", }}>
                    <AppBar sx={{backgroundColor: "transparent", position: "relative"}} elevation={0}>
                        <Toolbar>
                            <img alt="logo" src={Logo} style={{marginLeft: "1vw", height: "5rem", marginTop: "1.6vh"}}></img>
                            { currentAccount ? 
                              <Typography component="h6" variant="h6" style={{fontSize: "1.1rem", marginLeft: "70vw"}}>
                                {shortenAddress(currentAccount)}
                              </Typography> :
                              <LoadingButton disabled={isLoading} loading={isLoading} sx={{color: "white", fontSize: "1.1rem", marginLeft: "70vw"}} variant="text" onClick={connectWallet}>CONNECT WALLET</LoadingButton>
                            }
                        </Toolbar>
                    </AppBar>
            </Box>
          <Box sx={{position: "absolute", maxWidth: "100%",  width: "100vw", color: "white", top: "40vh", textAlign: "center"}}>
              <Typography variant="h6" component="h6" sx={{fontWeight: "bold"}}>
                  WELCOME TO THE WORLD OF <br/><br/>
              </Typography>
              <Typography variant="h4" component="h6" sx={{fontWeight: "bold"}}>
                  BLOCKCHAIN LOTTERY GAMES
              </Typography>
          </Box>
        </Box>
        <Box sx={{ position: "relative", width: "100%",  zIndex: "10"}}>
            <Box sx={{ position: "absolute", top: "-40px", ml: "47vw", width: "80px", height: "80px", background: "#3266c6", opacity: "0.40", zIndex: "-1", borderRadius: "100px", boxShadow: "0 1px 15px 1px rgba(69, 65, 78, 0.7)"}}></Box>
            <ScrollLink to="steps" smooth={true} spy={false}>
              <Box sx={{ml: "47.3vw",}}><ExpandCircleDownRoundedIcon sx={{ position: "absolute", color: "white", top: "-35px", fontSize: "70px", cursor: "pointer"}}/></Box>
            </ScrollLink>       
        </Box>
        <Box id="steps"></Box>
    </React.Fragment>
  );
}

export default Welcome;
