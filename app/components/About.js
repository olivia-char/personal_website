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
			 	<div className="row" style={AboutTitle}>
			 		<div className="col-lg-4 col-lg-offset-2">
			 			<h1 style={font}>Olivia Stalcup</h1>
			 		</div>
			 		<div className="col-lg-4 col-lg-offset-1">
			 			<h2 style={font}>Full Stack Web Developer</h2>
			 		</div>
			 	</div>
			 	<div className="row">
			 		<div className="col-lg-6 col-lg-offset-3" style={photo}>
			 			<img src={AboutPhoto} height={400}/>
			 		</div>
			 	</div>
			 	<div className="row">
			 		<div className="col-lg-8 col-lg-offset-2" style={AboutBlurb}>
			 			<h3 style={{marginTop:"2%"}}>Born and raised in California, I am a Californian Coder through and through.</h3>
			 			<h4 style={{marginTop:"2%"}}>I specialize in building fully functional websites, applications and RESTful API's, while integrating modern design.</h4>
			 			<h4 style={{marginTop:"2%"}}>For the last 3 years I taught myself to code. I began coding with Ruby, and expanded to both front-end and back-end development. What I quickly learned, beyond the foundation of programming, was I enjoyed coding. I graduated from the Coding Dojo in San Jose and currently freelance in the Bay Area.</h4>
						<Button href="/#/portfolio" bsStyle={"success"} bsSize={"large"} style={{marginTop:"2%", marginBottom:"2%"}}>View Project Samples</Button>
					</div>
			 	</div>
			 	<ContactNavBar />
			</div>
		)
	}
}
const photo ={
	textAlign:"center",
	padding: '3% 0% 3% 0%',
	borderTop: "1px solid #8BBF9F",
	borderBottom: "1px solid #8BBF9F",
}
const AboutBlurb ={
	textAlign:"center",
	marginBottom: "4%",
	fontFamily: 'Canvas',
	color:"#272838"
}
const font = {
	fontFamily: 'Canvas',
	color:"#27283"
}
const AboutTitle = {
	marginTop: '5%',
	marginBottom: '2%'

}
