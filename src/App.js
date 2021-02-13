import React from 'react';
import { Grid, ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Tours from './Components/Tours';
import Features from './Components/Features';
import Reviews from './Components/Reviews';
import theme from './Theme';
import Footer from './Components/Footer';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Header />
            <Tours />
            <Features />
            <Reviews />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
