import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  listItem,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  Drawer,
  Container
} from '@material-ui/core';

import { ArrowBack, AssignmentInd, Home, Apps, ContactMail, Menu} from '@material-ui/icons';
import moi from '../assets/moi.jpg';
import { makeStyles } from '@material-ui/styles';
import MobileRightMenuSlider from "@material-ui/core/Drawer";
import { Link } from "react-router-dom"



const useStyles = makeStyles(theme => ({
  menuSliderComponent: {
    width: 250,
    background: "#511",
    height: "100%"
  },
  appBar: {
    width: "100% !important"
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: '150px !important',
    height: '150px !important'
  },
  listItem: {
    color: "tan"
  }
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/"
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
    listPath: "/resume"
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
    listPath: "/portfolio"
  },
]

const Navbar = () => {

  const classes = useStyles();
  const toggleSlider = (slider, open)  => {
    setState({...state, [slider]: open})
  }
  const [state, setState] = useState({
    right: false,
  });


const sideList = slider => {
  return (
    <Container className={classes.menuSliderComponent} >
      <Avatar className={classes.avatar} src={moi} alt="My Image" />
      <Divider />
      <List>
        {
          menuItems.map((menuItem, key) => {
            return (
              <ListItem button key={key} component={Link} to={menuItem.listPath} onClick={() => toggleSlider(slider, false)}>
              <ListItemIcon className={classes.listItem}>
                {menuItem.listIcon}
              </ListItemIcon>
              <ListItemText className={classes.listItem} primary={menuItem.listText} />
            </ListItem>
            )
          })
        }
      </List>
    </Container>
  )
}

  return (
      <AppBar position="sticky" style={{background: "#222"}} className={classes.appBar} >
        <Toolbar>
          <IconButton onClick={() => 
              toggleSlider("right", true)
              }>
            <Menu style={{color: "tomato"}} />
          </IconButton>
          <Typography variant="h5" style={{color: "tan"}}>
            Traky Richard
          </Typography>
        </Toolbar>

        <MobileRightMenuSlider open={state.right} anchor="left" onClose={() => toggleSlider("right", false)} >
          {sideList("right")}
        </MobileRightMenuSlider>
      </AppBar>
  )
}

export default Navbar
