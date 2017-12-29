import React, { Component } from 'react';
import LetterBoxImg from "../assets/img/goldenGate.png"
import HeaderParallax from "./HeaderParallax"
import ContactNavBar from "./ContactNavBar"

export default class Contact extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
			<div className="container">
				<HeaderParallax
			 		title="Contact"
			 		imgSrc={LetterBoxImg}
			 		bgStyle={{marginTop: "-375px"}}
			 	/>
			 	<div className="row" style={styles.contactBox}>
			 		<div className="col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3" style={styles.contactIntro}>
			 			<h3>I'm actively searching for more freelancing or job opportunities. If you have something in mind, please feel free to reach out. Or, if you just want to ask a question or say hi, feel free! </h3>
			 			<h3>OCSTALCUP@GMAIL.COM</h3>
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
		borderTop: "1px solid #9CAFB7",
		borderBottom: "1px solid #9CAFB7"
	}
}

