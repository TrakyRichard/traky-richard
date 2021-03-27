// import React from 'react';
// import { Route, Switch } from 'react-router-dom';
// import './App.css';
// import Home from './Components';
// import Resume from './Components/Resume';
// import Portfolio from './Components/Portfolio';
// import Navbar from './Components/Navbar';
// import { CssBaseline } from '@material-ui/core';


// function App() {
//   return (
//     <>
//     <Navbar />
//     <Switch>
//       <Route path="/" exact component={Home} />
//       <Route path="/resume" exact component={Resume} />
//       <Route path="/portfolio" exact component={Portfolio} />
//      </Switch>
//      <CssBaseline />
//     </>
//   );
// }

// export default App;

import './App.scss';
import NavBar from './Components/NavBar copy';
import HomePage from './Pages/HomePage';
import {Switch, Route} from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import PortfliosPage from './Pages/PortfoliosPage';
import BlogsPage from './Pages/BlogsPage';
import ContactPage from './Pages/ContactPage';
import { useState } from 'react';

function App() {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () =>{
    setNavToggle(!navToggle)
  }

  return (
    <div className="App">
      <div className={`sidebar ${navToggle ? 'nav-toggle': ''}`}>
        <NavBar />
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div>
      <div className="main-content">
          <div className="content">
            <Switch>
              <Route path="/" exact>
                <HomePage />
              </Route>
              <Route path="/about" exact>
                <AboutPage />
              </Route>
              <Route path="/portfolios" exact>
                <PortfliosPage />
              </Route>
              <Route path="/blogs" exact>
                <BlogsPage />
              </Route>
              <Route path="/contact" exact>
                <ContactPage />
              </Route>
            </Switch>
          </div>
      </div>
    </div>
  );
}

export default App;
