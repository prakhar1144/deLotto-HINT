import * as React from 'react'
import { Skeleton, Container, Box, Typography, Grid } from "@mui/material";
import Countdown from 'react-countdown';
import { ParticipateContext } from '../Context/Participate';
import LoadingButton from '@mui/lab/LoadingButton';

const Action = () => {
    const {pickWinner, participate, participated, isLoading, isReadLoading, playersCount, totalAmount, timeLeft} = React.useContext(ParticipateContext);
    const TL = Date.now() + timeLeft;
    return (
    <Container>
        <Typography variant='h6' align='center' my="20vh" sx={{opacity: "0.50"}}>
            THE PLAY ZONE
        </Typography>
        <Grid container spacing={2} sx={{textAlign: "center", fontSize: "4rem", color: "#50575e"}}>
            <Grid item xs={12} sm={4} >
                { isReadLoading ?
                    <Skeleton variant="rectangular" animation="wave" height={"24vh"} /> :
                    <>
                        <Typography sx={{fontSize: "4rem" , paddingTop: "4vh", backgroundColor: "#EBEBF2"}}>
                            {totalAmount} ETH
                        </Typography>
                        <Typography sx={{paddingBottom: "4vh", backgroundColor: "#EBEBF2"}}>
                            JOIN AND WIN
                        </Typography>
                    </>
                }
            </Grid>
            <Grid item xs={12} sm={4} >
                { isReadLoading ?
                    <Skeleton variant="rectangular" animation="wave" height={"24vh"} /> :
                <>
                    <Box sx={{fontSize: "4rem" , paddingTop: "4vh", backgroundColor: "#EBEBF2"}}>
                        <Countdown date={TL}/>
                    </Box>
                    <Typography sx={{paddingBottom: "4vh", backgroundColor: "#EBEBF2"}}>
                        { (() => {
                            if(timeLeft === -1) {return ("WILL START")} 
                            else {return ("TIME LEFT")}})()
                        }
                    </Typography>                    
                </>
                }          
            </Grid>
            <Grid item xs={12} sm={4}>
                { isReadLoading ?
                    <Skeleton variant="rectangular" animation="wave" height={"24vh"} /> :
                <>
                    <Typography sx={{fontSize: "4rem" , paddingTop: "4vh", backgroundColor: "#EBEBF2"}}>
                        {playersCount}
                    </Typography>
                    <Typography sx={{paddingBottom: "4vh", backgroundColor: "#EBEBF2"}}>
                        PLAYERS JOINED
                    </Typography>
                </>
                }             
            </Grid>
        </Grid>
            { isReadLoading ?
                <></> :
                <Box sx={{textAlign: "center", paddingY: "10vh"}}>
                    {(() => {
                        if (!participated && timeLeft === 0)
                        {
                            return (                                
                            <>
                                <LoadingButton disabled={true} size="large" variant="outlined" color="info" >BUY TICKET</LoadingButton>
                                <Typography  mt={1} sx={{opacity: "60%" }} variant="caption" paragraph={true}>WAIT FOR THE NEXT GAME</Typography>
                            </>)
                        }
                        else if (participated && timeLeft > 0)
                        {
                            return (
                                <>
                                    <LoadingButton disabled={true} size="large" variant="outlined" color="info" >BUY TICKET</LoadingButton>
                                    <Typography  mt={1} sx={{opacity: "60%" }} variant="caption" paragraph={true}>WAIT FOR RESULT</Typography>
                                </>
                            )}
                        else if (participated && timeLeft === 0)
                        {
                            return (
                                <>
                                <LoadingButton disabled={isLoading} loading={isLoading} onClick={pickWinner} size="large" variant="outlined" color="info" >PICK WINNER</LoadingButton>
                                <Typography  mt={1} sx={{opacity: "60%" }} variant="caption" paragraph={true}>THIS WILL COST SOME GAS FEE</Typography>
                                </>
                            );
                        }
                        else
                        {   
                            return (
                                <>
                                <LoadingButton disabled={isLoading ||  participated} loading={isLoading} onClick={participate} size="large" variant="outlined" color="info" >BUY TICKET</LoadingButton>
                                <Typography  mt={1} sx={{opacity: "60%" }} variant="caption" paragraph={true}>TICKET PRICE : 0.01 ETH</Typography>
                                </>
                            )}
                    })()}
                </Box>
            }
    </Container>
    )
}

export default Action;