import { Paper, Typography } from "@mui/material";
import { FaHeart } from "react-icons/fa";
import { shortenAddress } from "../Utils/shortenAddress";
const Footer = () => {
    return (
        <Paper variant="outlined" square sx={{paddingY: "2vh"}}>
            <Typography align="center" variant="overline" component="div" sx={{fontWeight: "bold"}}>
                MADE WITH &nbsp; <FaHeart color="red"/> &nbsp; BY {shortenAddress("0x5F2BDe86D4364A215707518f4c28907302d41E2A")}
            </Typography>
        </Paper>
    )
}

export default Footer;