import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";

const Navbar = () => {
  return (
    <div>
        <Link to = "/"> <li>Home</li> </Link>
        <Link to = "/About"><li>About</li></Link>
        <Link to = "/Dashboard"><li>Dashboard</li></Link>
        <Link to = "/Contactus"><li>ContactUs</li></Link>
      
    </div>
  )
}

export default Navbar;
