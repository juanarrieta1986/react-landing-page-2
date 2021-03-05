import React from "react";
import ReactDOM from "react-dom";

const footerstyle = {
	marginBottom: "0",
	maxHeight: "300px",
	minHeight: "50%"
};

//create your function here
export const Footer = () => {
	return (
		<footer style={footerstyle} className="footer mt-auto py-5 bg-light">
			<div className="container">
				<span className="text-muted">
					Place sticky footer content here.
				</span>
			</div>
		</footer>
	);
};
