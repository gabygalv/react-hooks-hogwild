import React from "react";
import piggy from "../assets/porco.png";

const Nav = ({ toggleFilter, toggleSort }) => {
	const handleSort = e => toggleSort(e.target.value)
	

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
				<select onChange={handleSort}>
					<option value=''>Sort by:</option>
					<option value='name'>Name</option>
					<option value='weight'>Weight</option>
				</select>
			</div>
		</div>
	);
};

export default Nav;
