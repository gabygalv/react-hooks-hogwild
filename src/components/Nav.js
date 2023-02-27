import React from "react";
import piggy from "../assets/porco.png";

const Nav = ({ toggleFilter }) => {
	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
			<div className="filterWrapper">
				<button onClick={toggleFilter}>Show greased hogs!</button>
			</div>
		</div>
	);
};

export default Nav;
