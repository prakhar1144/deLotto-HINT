import {Grid, Container} from '@mui/material';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import BlockchainFeature from '../images/blockchain-feature.webp';
import ProtectionFeature from '../images/protection-feature.png';
import DistributedFeature from '../images/distributed-ledgerdata-feature.webp';
import AnoymousFeature from '../images/anonymous-feature.webp';

const Features = () => {
  return (
    <>
    <Container>
      <Typography variant='h6' align='center' mt="13vh" sx={{opacity: "0.50"}}>
        WHY TO USE DE-LOTTO
      </Typography>
      <Grid container my={15} rowSpacing={8}>
        <Grid item xs={12} sm={6}>
            <img alt="svg" style={{width: "3.7rem", verticalAlign: "middle"}} src={DistributedFeature}></img>
            <Box component="span" ml={2} mt={2} sx={{fontWeight: "bold", fontSize: "1rem",  opacity: "0.50"}}>
                COMPLETELY DECENTRALIZED
            </Box>
        </Grid>
        <Grid item xs={12} sm={6} container justifyContent="flex-end" >
            <img alt="svg" style={{width: "3.7rem", verticalAlign: "middle"}} src={ProtectionFeature}></img>
            <Box component="span" ml={2} mt={2} sx={{fontWeight: "bold", fontSize: "1rem", opacity: "0.50"}}>
                SECURE AND TRUSTLESS &nbsp;&nbsp;&nbsp;
            </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
            <img alt="svg" style={{width: "3.7rem", verticalAlign: "middle"}} src={AnoymousFeature}></img>
            <Box component="span" ml={2} mt={2} sx={{fontWeight: "bold", fontSize: "1rem", opacity: "0.50"}}>
                PARTICIPATE ANONYMOUSLY
            </Box>
        </Grid>
        <Grid item xs={12} sm={6} container justifyContent="flex-end">
            <img alt="svg" style={{width: "3.4rem", verticalAlign: "middle"}} src={BlockchainFeature}></img>
            <Box component="span" ml={2} mt={2} sx={{fontWeight: "bold", fontSize: "1rem",  opacity: "0.50"}}>
                BLOCKCHAIN TECHNOLOGY
            </Box>
        </Grid>
        </Grid>
    </Container>
    </>
  )
}

export default Features;