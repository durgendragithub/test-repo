import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  return (
    <div>
        <div className="nav">
           <ul>
              <Link to='/contactus'><li>ContactUs</li></Link>
              <Link to='/display'><li>Display</li></Link>
              <Link to='/about'><li>About</li></Link>
              <Link to='/dashboard'><li>Dashboard</li></Link>
              <Link to='/'><li>Home</li></Link>
           </ul>
      </div>

        
    </div>
  )
}

export default Navbar;
