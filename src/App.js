import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
import Navbar from './Components/Navbar';


function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/resume" exact component={Resume} />
      <Route path="/portfolio" exact component={Portfolio} />
     </Switch>
     <CssBaseline />
    </>
  );
}

export default App;
