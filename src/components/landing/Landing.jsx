import React from "react";
import logo from './logo.png';
import images from './images.png';

function Landing() {
  return <div>
    {/* <link rel="stylesheet" href="Landing.css" type="text/css"></link> */}
    <div class="header">
       
      
    <nav class="nav-links">
       <img src={logo} alt="image" class="logo"/>  
       <ul>
           <li><a href="#">Acceuil</a></li>git
           <li><a href="#">contact us</a></li>
           <li class="btn"><a href="#">Get started</a></li>
       </ul>
    </nav>
    <div class="content">
       <h4>look for the places of future, current and past defenses in polytechnique</h4>
       <img src={images} alt="image" class="image"/>  
       <h3>PO Defenses, innovative and flexible application that gives you all the details of the defenses</h3>
       <a class="btn1" href="#">Get started</a>

    </div>
   </div>

  </div>;
}

export default Landing;
