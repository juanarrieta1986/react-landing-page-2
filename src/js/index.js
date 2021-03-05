//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";
import { Navbar } from "./component/navbar.js";
import { Jumbotron } from "./component/jumbotron.js";
import { Card } from "./component/card.js";
import { Footer } from "./component/footer.js";

/*Home.propTypes = {
	HomeNav: PropType.function
};*/

//render your react application
ReactDOM.render(
	<div>
		<Navbar />
		<Jumbotron />
		<div className="card-deck">
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
		<Footer />
	</div>,
	document.querySelector("#app")
);
