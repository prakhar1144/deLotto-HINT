import { Container, Typography, Grid } from '@mui/material';
import StepItem from '../Components/StepItem';

const Steps = () => {
    return (
        <Container>
            <Typography variant='h6' align='center' mt="10rem" sx={{opacity: "0.50"}}>
                STEPS TO FOLLOW
            </Typography>
            <Grid container my={25} sx={{textAlign: "center"}}>
                <StepItem icon="Wallet" text="CONNECT WALLET" />
                <StepItem icon="Lock" text="BUY THE TICKET" />
                <StepItem icon="Server" text="WAIT FOR RESULT" />
            </Grid>
        </Container>
    )
}

export default Steps;