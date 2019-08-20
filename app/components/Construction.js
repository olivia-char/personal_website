import React, { Component } from 'react';
import LetterBoxImg from "../assets/img/goldenGate.png"
import NavBar from "./NavBar"
import ContactNavBar from "./ContactNavBar"
import Gear from "../assets/img/gears.svg"

export default class Construction extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
			<div className="container">
				<NavBar />
			 	<div className="row" style={styles.contactBox}>
			 		<div className="col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3" style={styles.contactIntro}>
			 			<img src={Gear} height={175}/>
			 			<h3>Oops.. Under Construction - Come Back Soon!</h3>
			 		</div>
			 	</div>
			 	<ContactNavBar />
			</div>
		)
	}
}
const styles = {
	contactBox: {
		marginTop: "8%",
		marginBottom:"4%"
	},
	contactIntro: {
		fontFamily: "Canvas",
		textAlign:"center",
		padding:"3% 0% 3% 0%",
		borderTop: "1px solid #B98B82",
		borderBottom: "1px solid #B98B82"
	}
}

