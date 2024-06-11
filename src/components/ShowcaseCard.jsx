import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 1195,paddingTop:20,background:"#181815" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="/fintechhreo.svg"
          alt="green iguana"
        //   object='contain' 
        sx={{ objectFit: 'contain' }}
        />
        
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
