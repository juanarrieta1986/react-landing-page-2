import React from "react";
import ReactDOM from "react-dom";

const cardstyle = {
	width: "200px"
};

//create your function here
export const Card = () => {
	return (
		<div style={cardstyle} className="card">
			<img className="card-img-top" src="..." alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">Yeah hello!</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};
