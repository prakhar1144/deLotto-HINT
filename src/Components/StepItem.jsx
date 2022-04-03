import {Grid} from '@mui/material';
import { Box } from '@mui/material';
import TicketIcon from '../SVG/ticket'
import Timer from '../SVG/timer';
import Wallet from '../SVG/wallet';

const StepItem = (props) => {
  function getIcon() {
    if(props.icon === "Wallet")
    {
      return <Wallet/>
    }
    else if(props.icon === "Lock")
    {
      return <TicketIcon/>;
    }
    else if(props.icon === "Server")
    {
      return <Timer/>;
    }
  }
  return (
    <Grid item xs={12} sm={4} sx={{position: "relative", top: "0",transition: 'top ease 0.5s', '&:hover': {top: "-30px"}}}>
      <Box>
        {getIcon()}
      </Box>
      <Box component="h6" sx={{fontSize: "1rem",  opacity: "0.50"}}>
          {props.text}
      </Box>
    </Grid>
)};
export default StepItem;