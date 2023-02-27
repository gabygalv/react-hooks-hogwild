import React, { useState } from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import HogContainer from "./hog container";

function App() {

const [onFilter , setOnFilter] = useState(false)

const toggleFilter = () => {
	setOnFilter( onFilter => !onFilter )
}

const onlyGreased = hogObj => hogObj.greased 

const filteredHogs = onFilter ? hogs.filter( onlyGreased ) : hogs

return (
	<div className="App ui">
		<Nav toggleFilter={toggleFilter} />
		<HogContainer hogs={ filteredHogs }/>
	</div>
);
}

export default App;
