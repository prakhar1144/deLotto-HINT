import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { shortenAddress } from '../Utils/shortenAddress';
import useFetch from '../Hooks/useFetch';

export default function WinnerCard({winnerAddress, keyword, amount}) {
  const gifUrl = useFetch({keyword});
  return (
    <Card sx={{ maxWidth: "25vw" }}>
        <CardMedia
          component="img"
          height= "150vh"
          image={gifUrl}
          alt="Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Amount : {amount} ETH
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Won By : {shortenAddress(winnerAddress)}
          </Typography>
        </CardContent>
    </Card>
  );
}
