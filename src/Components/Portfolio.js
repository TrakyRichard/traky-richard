import { Box, Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import portofolioData from '../data/portfolioData';
import PortfolioComp from './PortfolioComp';

const useStyles = makeStyles({
  root: {
    marginTop: 20,
    // background: "#233",
    height: "100%"
  }
})

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root} maxWidth="md">
      <Grid container spacing={4}>
        {portofolioData.map((portData) => {
          return (
            <PortfolioComp key={portData.portImg} props={portData} />
          )
        })}  
      </Grid>
    </Container>
  )
}

export default Portfolio
