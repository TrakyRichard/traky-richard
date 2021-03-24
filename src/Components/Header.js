import React from 'react';
import {Typography, Avatar, Grid, Box, Container} from '@material-ui/core';
import Typed from 'react-typed';
import avatar from '../assets/moi.jpg';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1)
  },
  title: {
    color: 'tomato',
  },
  subTitle: {
    color: "tan",
    marginBottom : "3rem" 
  },
  typeContainer: {
    marginTop: "10%"
  //   position: 'absolute',
  //   top: '50%',
  //   left: "50%",
  //   transform: 'translate(-50%, -50%)',
  //   width: '100vw',
  //   textAlign: "center",
  //   zIndex: 1
  }
}));

const Header = () => {

  const classes = useStyles();
  return (
    <Container className={classes.typeContainer} maxWidth="sm" alignItems="center">
      <Grid container justify='center'>
        <Avatar className={classes.avatar} src={avatar} alt="Traky Richard"/>
      </Grid>
      <Grid container justify="center">
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Traky Richard"]} typeSpeed={40}></Typed>
      </Typography>
      </Grid>
      <br />
      <Grid container justify="center">
      <Typography className={classes.subTitle} variant="h4">
        <Typed strings={["FullStack web developper", "FullStack mobile developper"]} typeSpeed={40} backSpeed={60} loop></Typed>
      </Typography>
      </Grid>
      <Grid container justify="center">
      <Typography className={classes.subTitle} variant="h5">
        <Typed strings={["I'm from Niger, I'm FullStack Web and Mobile developer. I have 2 years of experience. I am Open-minded and I love to face new challenges.. ."]} typeSpeed={50} backSpeed={30}>
        </Typed>
      </Typography>
      </Grid>
    </Container>
  )
}

export default Header
