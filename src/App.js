import React from 'react';
import {BrowserRouter, Switch,Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Dashboard from './Components/About';
import About from './Components/About';
import Display from './Components/Display';
import ContactUs from './Components/ContactUs';

const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Navbar />
          <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/display' exact component={Display} />
              <Route path='/contactus' exact component={ContactUs} />
              <Route path='/dashboard' exact component={Dashboard} />
              <Route path='/about' exact component = {About} />
          </Switch>
        
        </BrowserRouter>
      
    </div>
  )
}

export default App;

