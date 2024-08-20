import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<button className="btn btn-primary">Home</button>
			</Link>
			<div className="ml-auto">
				<Link to="/NewContact">
					<button className="btn btn-success">Add new Contact</button>
				</Link>
			</div>
		</nav>
	);
};
