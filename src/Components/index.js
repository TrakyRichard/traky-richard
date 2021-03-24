import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Particles from 'react-particles-js';
import { makeStyles } from '@material-ui/styles';
import { Container } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  particlesCanvas: {
    position: 'absolute',
    opacity: "0.3"
  }
}))

const Home = () => {

  const classes = useStyles();
  return (
    <>
      <Header />
      <Particles canvasClassName={classes.particlesCanvas}
       params={{
        particles: {
          Number: {
            value: 100,
            density: {
              enable: true,
              value_area:  900
            },
          },
          shape: {
            type: 'star',
            stroke: {
              width:1,
              color: 'tomato'
            }
          },
          size: {
            value: 3,
            random: true,
            animation: {
              enable: true,
              speed: 0.6,
              size_min: 0.1,
              sync:true
            }
          },
          opacity: {
            value: 1,
            random: true,
            animation: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: true
            }
          }
          
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab"
            }
          }
        }
       }
      }
      />
    </>
  )
}

export default Home
