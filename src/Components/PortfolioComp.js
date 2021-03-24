import React from 'react';
import { Card, CardActionArea, Box, CardMedia, Grid, CardContent, Typography, CardActions, Button, Link } from '@material-ui/core';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  cardContainer: {
    // maxWidth: "fit-content",
    // margin: "1rem",
    // padding: "3rem auto"
  }
})

const PortfolioComp = ({props}) => {
  const {portImg, portName, portDesc, portShare, portLive} = props;
  const classes = useStyles();
  const history = useHistory();

  return (
    <Grid item xs={12} md={4} lg={4}>
      <Card className={classes.cardContainer} style={{borderRadius: 15}}>
      <CardActionArea>
        <CardMedia component="img" alt={portName} image={portImg} >
        </CardMedia>
      
      <CardContent style={{height: 130}}>
        <Typography variant="h5" gutterBottom>
          {portName}
        </Typography>
        
        <Typography variant="body2" color="inherit" component="p">
          {portDesc}
        </Typography>
      </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <Link target="_blank" href={portShare}>See Repository</Link>
        </Button>

        <Button size="small" color="primary">
          <Link target="_blank" href={portLive}>Live Demo</Link>
        </Button>
      </CardActions>
      </Card>
    </Grid>

  )
}

export default PortfolioComp
