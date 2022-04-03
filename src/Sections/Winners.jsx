import { Container, Typography, Grid, Skeleton } from '@mui/material';
import * as React from 'react';
import WinnerCard from '../Components/WinnerCard';
import { ParticipateContext } from '../Context/Participate';

export default function Winners() {
    const {isReadLoading, winners} = React.useContext(ParticipateContext);
  return (
      <>
    <Container>
        <Typography variant='h6' align='center' mt="30vh" sx={{opacity: "0.50"}}>
            ALL TIME WINNERS
        </Typography>
        <Grid container my={15} rowSpacing={8}>
        { isReadLoading ?
            <>
                <Grid item xs={12} sm={4} p={3}>
                    <Skeleton variant="rectangular" animation="wave" height={"24vh"} /> 
                </Grid>
                <Grid item xs={12} sm={4} p={3}>
                    <Skeleton variant="rectangular" animation="wave" height={"24vh"} /> 
                </Grid>
                <Grid item xs={12} sm={4} p={3}>
                    <Skeleton variant="rectangular" animation="wave" height={"24vh"} /> 
                </Grid>
            </>
            :
            winners.map((winner, i) => (
                <Grid key={i} item xs={12} sm={4}>
                    <WinnerCard {...winner}/>
                </Grid>
            ))
        }
        </Grid>
    </Container>
      </>
  );
}
