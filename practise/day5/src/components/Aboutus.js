import React from 'react';
import { Link } from "react-router-dom";
import Navbar from './Navbar';


function Aboutus() {
    return (
<div>
    <Navbar/>
     <h1>About Us</h1>
     <p>
        This is the about page
     </p>

      <Link to="/" > Go Home </Link>
 </div>
);
}

export default Aboutus;