import React from "react";

//create your first component
const SecondsCounter = (props) => {

	const count = props.count;
	let number = count.toString();

	return (
		<div className="text-center">

			<div className="row">
				<div className="col"><i class="far fa-clock"></i></div>
				<div className="col">{Math.floor(number%1000000/100000)}</div>
				<div className="col">{Math.floor(number%100000/10000)}</div>
				<div className="col">{Math.floor(number%10000/1000)}</div>
				<div className="col">{Math.floor(number%1000/100)}</div>
				<div className="col">{Math.floor(number%100/10)}</div>
				<div className="col">{number%10}</div>
			</div>
		</div>
	);
};

export default SecondsCounter;
