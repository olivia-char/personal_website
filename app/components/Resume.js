import React, { Component } from 'react';
import ResumeImg from "../assets/img/tiles.png";
import HeaderParallax from "./HeaderParallax";

export default class Resume extends Component {
	constructor(props){
		super(props);
		this.state = {
			plain: true,
		}
	}
	renderPlain() {
		if(this.state.plain) {
			return (
				<h4 style={styles.downloadButton}>***View Detailed Resume PDF</h4>
			)
		}
	}
	renderColor() {
		if(!this.state.plain) {
			return (
				<h4 style={styles.downloadColor}>***View Detailed Resume PDF</h4>
			)
		console.log("herro?")
		}
	}
	colorMouseOver() {
		this.setState({
			plain: false
		})
	}
	colorMouseOut() {
		this.setState({
			plain: true
		})
	}

	render() {
		return (
			<div className="container" style={styles.font}>
				<HeaderParallax
			 		title="Resume"
			 		imgSrc={ResumeImg}
			 		bgStyle={{marginTop: "-150px"}}
			 	/>

			 	<div className="row" style={styles.resumeTitle}>
			 		<div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3" style={styles.resumeBox}>
			 			<h1>Resume</h1>
			 		</div>
			 	</div>
			 	<div className="row" style={styles.download}>
			 		<div className="col-sm-6 col-sm-offset-6 col-md-4 col-md-offset-8 col-lg-4 col-lg-offset-8">
						<a href={"#/littleerror"} style={styles.downloadButton} onMouseEnter={this.colorMouseOver.bind(this)} onMouseOut={this.colorMouseOut.bind(this)}>
							{this.renderPlain()}
							{this.renderColor()}
						</a>
			 		</div>
			 	</div>
			 	<div className="row">
			 		<div className="col-sm-8 col-sm-offset-2 col-md-6 col-lg-offset-2 col-lg-6 col-lg-offset-2">
			 			<h3 style={styles.titleFont}>Technical Skills</h3>
			 		</div>
			 	</div>
			 	<div className="row" style={styles.contentBox}>
			 		<div className="col-sm-9 col-sm-offset-3 col-md-8 col-md-offset-3 col-lg-8 col-lg-offset-3">
			 			<h4><strong>Front End -</strong> HTML5, CSS3, JQuery, Bootstrap, Materialize</h4>
			 		</div>
			 		<div className="col-sm-9 col-sm-offset-3 col-md-8 col-md-offset-3 col-lg-8 col-lg-offset-3">
			 			<h4><strong>Languages -</strong> JavaScript, Ruby, Python</h4>
			 		</div>
			 		<div className="col-sm-9 col-sm-offset-3 col-md-8 col-md-offset-3 col-lg-8 col-lg-offset-3">
			 			<h4><strong>Databases -</strong> MySQL, SQLite, PostgreSQL, MongoDB</h4>
			 		</div>
			 		<div className="col-sm-9 col-sm-offset-3 col-md-8 col-md-offset-3 col-lg-8 col-lg-offset-3">
			 			<h4><strong>Libraries -</strong> React.js, Node.js, Mongoose</h4>
			 		</div>
			 		<div className="col-sm-9 col-sm-offset-3 col-md-8 col-md-offset-3 col-lg-8 col-lg-offset-3">
			 			<h4><strong>Frameworks -</strong> Ruby on Rails, Angular.js, Express, Django, Flask</h4>
			 		</div>
			 		<div className="col-sm-9 col-sm-offset-3 col-md-8 col-md-offset-3 col-lg-8 col-lg-offset-3">
			 			<h4><strong>Methodology -</strong> RESTful Application, CRUD Operations, OOP, MVC, TDD, HTTP Res/Req</h4>
			 		</div>
			 		<div className="col-sm-9 col-sm-offset-3 col-md-8 col-md-offset-3 col-lg-8 col-lg-offset-3">
			 			<h4><strong>Miscelaneous -</strong> Git/Github, Amazon Web Services (AWS)</h4>
			 		</div>
			 	</div>
			 	<div className="row">
			 		<div className="col-sm-8 col-sm-offset-2 col-md-6 col-lg-offset-3 col-lg-6 col-lg-offset-2">
			 			<h3 style={styles.titleFont}>Expierence</h3>
			 		</div>
			 	</div>
			 	<div className="row" style={styles.contentBox}>
			 		<div className="col-sm-9 col-sm-offset-3 col-md-8 col-md-offset-3 col-lg-7 col-lg-offset-3">
			 			<h4><strong>Freelance</strong></h4>
						<ul>
      				<li style={styles.bulletPoint}><h4>I currently develop fully funcitional and seamless user interaction websites with React.js for small businesses and start-ups.</h4></li>
      			</ul>
			 		</div>
			 		<div className="col-sm-9 col-sm-offset-3 col-md-8 col-md-offset-3 col-lg-7 col-lg-offset-3">
			 			<h4><strong>LaLa's Creamery</strong></h4>
						<ul>
      				<li style={styles.bulletPoint}><h4>Managed and delegated workflow of employees to maximize efficiency and customer service.</h4></li>
							<li style={styles.bulletPoint}><h4>Executed opening and closing procedures, maintained front of house register, managed stock, as well as, oversaw and mediated any customer complaints.</h4></li>
						</ul>
			 		</div>
			 		<div className="col-sm-9 col-sm-offset-3 col-md-8 col-md-offset-3 col-lg-7 col-lg-offset-3">
			 			<h4><strong>BioPrint Devices, Inc</strong></h4>
						<ul>
							<li style={styles.bulletPoint}><h4>Oversaw and created social network (Facebook/Twitter/LinkedIn) profiles to further online presence, as well as, organized and instituted processes for filing confidential documents.</h4></li>
						</ul>
			 		</div>
			 		<div className="col-sm-9 col-sm-offset-3 col-md-8 col-md-offset-3 col-lg-7 col-lg-offset-3">
			 			<h4><strong>Osseon Therapuetics, Inc,</strong></h4>
						<ul>
							<li style={styles.bulletPoint}><h4>Supervised and implemented informational booths at domestic and international biomedical device conferences, which informed doctors, vendors and distributors about Osseon’s devices.</h4></li>
							<li style={styles.bulletPoint}><h4>Collected, organized and inputted sales data and leads from business conferences to mitigate the Marketing Manager’s workload.</h4></li>
							<li style={styles.bulletPoint}><h4>Filed and documented confidential paperwork for the Human Resource Manager</h4></li>
						</ul>
			 		</div>
			 	</div>
			 	<div className="row">
			 		<div className="col-sm-8 col-sm-offset-2 col-md-6 col-lg-offset-2 col-lg-6 col-lg-offset-2">
			 			<h3 style={styles.titleFont}>Education</h3>
			 		</div>
			 	</div>
			 		<div className="row" style={styles.contentBox}>
				 		<div className="col-sm-9 col-sm-offset-3 col-md-8 col-md-offset-3 col-lg-8 col-lg-offset-3">
				 			<h4><strong>Coding Dojo</strong>, <i>Graduated with Certificate of Completion</i></h4>
				 		</div>
						<div className="col-sm-9 col-sm-offset-3 col-md-8 col-md-offset-3 col-lg-8 col-lg-offset-3">
							<h4 style={styles.bulletPoint}><strong>Santa Rosa Junior College</strong>, <i>Political Science and Gov.</i></h4>
						</div>
						<div className="col-sm-9 col-sm-offset-3 col-md-8 col-md-offset-3 col-lg-8 col-lg-offset-3">
							<h4 style={styles.bulletPoint}><strong>Notre Dame de Namur</strong>, <i>Business Administration</i></h4>
						</div>
				 	</div>
			</div>
		)
	}
}
const styles = {
	resumeBox: {
		textAlign:"center",
		borderBottom: "1px solid #C89FA3",
		paddingBottom: "2%",
		color:"#27283"
	},
	font: {
		fontFamily: 'Canvas'
	},
	resumeTitle: {
		marginTop: '5%',
		marginBottom: '2%',
	},
	download: {
		 margin:"2% 0% 2% 0%"
	},
	downloadButton: {
	 color: "black",
	 textDecoration: "none"
 },
 contentBox: {
	 margin: "1% 0% 3% 0%",
	 color:"#27283"
 },
 contentRow: {
	margin: "1% 0% 1% 0%"
 },
 bulletPoint: {
	 marginTop:"3%"
 },
 downloadColor: {
	 color:"#89043D"
 },
 titleFont: {
	 color:"#C89FA3"
 }
}
