# DeLotto : Decentralized Lottery
![Screenshot from 2022-02-25 00-11-55](https://user-images.githubusercontent.com/56781761/155587195-afc9c8df-712b-434f-be91-b803847e1c0b.png)

<hr>

## Description
- A **decentralized, trustless, and automated** web app to play Lottery Games deployed on Polygon. 
> Note : It is **not** the normal Lottery dapp that is available all over youtube, we have made some important changes.
- **Solidity** smart contracts
- Used **chainlink** oracle for fetching random number
- Used **Alchemy's** node to fetch read only data (Visiting user mayn't have metamask pre installed)
- User will perform transaction using **Metamask**
- Frontend : **React, Material UI, ethers.js**
- Deployed on **Polygon’s Mumbai testnet**

<hr>

## Steps To Follow
![Screenshot from 2022-02-25 00-44-30](https://user-images.githubusercontent.com/56781761/155591791-19123b8d-4599-44cf-be14-ac7c7eb9e380.png)

<hr>

## How It Works
![Screenshot from 2022-02-25 00-51-33](https://user-images.githubusercontent.com/56781761/155592773-84c009a8-1afa-4af6-af99-48447a42a1ac.png)


- A user visits the site
- Connects his/her Metamask Wallet (Network Selected as Polygon Mumbai Testnet)
- Buys Ticket (0.01 ETH)
- When at least 2 users have bought the ticket, the game starts (A 120 second Timer starts) itself
- New user can still join join the game before timer reaches 0
- Suppose 4 users have joined the game
  - Players Joined : 4
  - Amount to Win : 0.04 ETH
- After timer finishes, a PICK WINNER button appears
- Any user can click on the button (Decentralization) and the smart contract will select a random winner and transfer those ETH to the winner.
- Game will reset and new batch of users can join the Game 

<hr>

## Benefits over Traditional (web 2.0) Lottery Platforms
![Screenshot from 2022-02-25 00-50-22](https://user-images.githubusercontent.com/56781761/155592527-3e409f6d-707f-4a94-b90d-747462e952e7.png)


- **Trustless**: You don't need to trust the company for fairness in selecting a winner. (Web 2 companies have centralized servers, they can maybe select a friend of theirs as the winner and take some commission from the prize money)
- **Reliable**: The prizes and the means by which they are delivered to winners will be guaranteed by smart contracts. (Eliminating the cases where the Lottery Organizing Body sold their tickets and just ran away)
- **Transparent**: The immutable nature of the blockchain ledger means that all data on ticket sales, who picked the winner, and who won will be safely stored and all the data is available to the public. (In Web 2 these data are available only to the only some people with special powers)
- **Infallible**: Due to its autonomous nature, blockchain tech eliminates the need for human intervention.


<hr>
