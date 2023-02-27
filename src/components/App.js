import React, { useState } from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import HogContainer from "./hog container";

function App() {

const [onFilter , setOnFilter] = useState(false)
const toggleFilter = () => setOnFilter( onFilter => !onFilter )

const [onSort, setOnSort] = useState("")
const toggleSort = searchVal => setOnSort(searchVal)

const onlyGreased = hogObj => hogObj.greased 
const filteredHogs = onFilter ? hogs.filter( onlyGreased ) : hogs

const byNameOrWeight = (hogA, hogB) => {
	switch (onSort) {
		case "name":
			if ( hogA.name < hogB.name ) {
				return -1
			} else {
				return 1
			}
		case "weight":
			return hogA.weight - hogB.weight
		default: 
		return 0
	}
}

const sortedHogs = [...filteredHogs].sort( byNameOrWeight )

return (
	<div className="App ui">
		<Nav toggleFilter={toggleFilter} toggleSort={toggleSort}/>
		<HogContainer hogs={ sortedHogs }/>
	</div>
);
}

export default App;
