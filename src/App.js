import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Destinations from './components/destinations/Destinations'
import Promotion from './components/promotion/Promotion';
import Footer from './components/footer/Footer';
import Register from './components/register/Register';

function App() {
  return (
    <>
      <Router>
        <Header />
        
        <Route exact path='/'>
          <Home />
          <Destinations />
          <Promotion />
        </Route>

        <Route exact path ='/Register'>
          <Register />
        </Route>

        <Footer />
      </Router>
    </>
  );
}

export default App;
