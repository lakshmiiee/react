import React from 'react';
import { Link } from "react-router-dom";
import Navbar from './Navbar';


function Contactus() {
    return (
<div>
    <Navbar/>
     <h1>Contact Us</h1>
     <p>
            This is the contact us page
     </p>

      <Link to="/" > Go Home </Link>
 </div>
);
}

export default Contactus;