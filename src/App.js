import React from 'react';
import './App.css';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Navbar from './Components/Navbar.js';
import Home from './Components/Home.js';
import Dashboard from './Components/Dashboard.js';
import About from './Components/About.js';
import ContactUs from './Components/ContactUs.js';
import Display from './Components/Display.js';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
       <Switch>
         <Route path='/' exact component={Home} />
         <Route path='/Dashboard' exact component={Dashboard} />
         <Route path='/About' exact component={About} />
         <Route path='/Contactus' exact component={ContactUs} />
         <Route path='/Display' exact component={Display} />
       </Switch>
      </BrowserRouter>
      
    </div>
  )
}

export default App;
