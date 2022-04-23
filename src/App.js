import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Categories from './components/pages/Categories';
import Cart from './components/pages/Cart';
import AboutUs from './components/pages/AboutUs';
import SignUp from './components/pages/SignUp';
import Men from './components/pages/Men';
import Women from './components/pages/Women';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/categories' component={Categories} />
        <Route path='/cart' component={Cart} />
        <Route path='/aboutus' component={AboutUs} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/men' component={Men} />
        <Route path='/women' component={Women} />
      </Switch>
    </Router>
  );
}

export default App;
