import React from "react";
import logo from "../images/logo.png";
import images from "../images/images.png";
import { NavLink } from "react-router-dom";

function Landing() {
	return (
		<div>
			{/* <link rel="stylesheet" href="Landing.css" type="text/css"></link> */}
			<div class="header">
				<nav class="nav-links">
					<img src={logo} alt="image" class="logo" />
					<ul>
						<li>
							<a href="#">Acceuil</a>
						</li>
						git
						<li>
							<a href="#">contact us</a>
						</li>
						<li class="btn">
							<NavLink to="/interface">Get started</NavLink>
						</li>
					</ul>
				</nav>
				<div class="content">
					<h4>look for the places of future, current and past defenses in polytechnique</h4>
					<img src={images} alt="image" class="image" />
					<h3>PO Defenses, innovative and flexible application that gives you all the details of the defenses</h3>
					<NavLink class="btn1" to="/interface">
						Get started
					</NavLink>
				</div>
			</div>
		</div>
	);
}

export default Landing;
