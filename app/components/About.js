import React, { Component } from 'react';
import ForestImg from "../assets/img/forest.png"
import HeaderParallax from "./HeaderParallax"
import AboutPhoto from '../assets/img/oliviaImg.jpg'
import ContactNavBar from './ContactNavBar'
import Portfolio from './Portfolio'
import { Button } from 'react-bootstrap';

export default class About extends Component {
	constructor(props){
		super(props)
	}

	render() {
		return (
			<div className="container">
			 	<HeaderParallax
			 		title="About"
			 		imgSrc={ForestImg}
			 		bgStyle={{marginTop: "-350px"}}
			 	/>
			 	<div className="row" style={styles.AboutTitle}>
			 		<div className="col-xs-8 col-xs-offset-1 col-sm-4 col-md-4 col-lg-4 col-lg-offset-2">
			 			<h1 style={styles.font}>Olivia Stalcup</h1>
			 		</div>
			 		<div className="col-xs-11 col-xs-offset-1 col-sm-6 col-sm-offset-1 col-md-5 col-md-offset-2 col-lg-4 col-lg-offset-1">
			 			<h2 style={styles.font}>Full Stack Web Developer</h2>
			 		</div>
			 	</div>
			 	<div className="row">
			 		<div className="col-lg-6 col-lg-offset-3" style={styles.photo}>
			 			<img src={AboutPhoto} height={400}/>
			 		</div>
			 	</div>
			 	<div className="row">
			 		<div className="col-xs-10 col-xs-offset-1 col-lg-8 col-lg-offset-2" style={styles.AboutBlurb}>
			 			<h4 style={styles.AboutContent}>I specialize in building fully functional websites, applications and RESTful API's, while integrating modern design.</h4>
			 			<h4 style={styles.AboutContent}>I began teaching myself to code with Ruby, and expanded to both front-end and back-end development. I currenlty enjoy coding with React.js and Webpack. I graduated from the Coding Dojo in San Jose and currently freelance in the Bay Area.</h4>
						<Button href="/#/portfolio" bsStyle={"success"} bsSize={"large"} style={{marginTop:"2%", marginBottom:"2%"}}>View Project Samples</Button>
					</div>
			 	</div>
			 	<ContactNavBar />
			</div>
		)
	}
}
const styles = {
	photo: {
		textAlign:"center",
		padding: '3% 0% 3% 0%',
		borderTop: "1px solid #8BBF9F",
		borderBottom: "1px solid #8BBF9F",
	},
	AboutBlurb: {
		textAlign:"center",
		marginBottom: "4%",
		fontFamily: 'Canvas',
		color:"#272838"
	},
	AboutContent: {
		marginTop:"2%",
		fontSize:"22px"
	},
	font: {
		fontFamily: 'Canvas',
		color:"#27283"
	},
	AboutTitle: {
		marginTop: '5%',
		marginBottom: '2%'
	}
}
