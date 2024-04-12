import React from "react";
import SecondsCounter from "./secondsCounter.jsx";

//create your first component
const Home = (props) => {
	const counter = props.counter;

	return (
		<div>
			<SecondsCounter count={counter}/>
		</div>
	);
};

export default Home;
