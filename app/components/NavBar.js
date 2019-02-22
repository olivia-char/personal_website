import React, { Component } from 'react'

export default class NavBar extends Component {
	constructor(props){
		super(props);

	}



//empty title
//for each space until end of name
//have a random character added to title
//have random character replaced with title name

	render() {
		return (
				<div className="row" style={styles.HeaderRow}>
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={styles.clearBackground}></div>
					<div className="col-xs-12 col-sm-4 col-md-4 col-lg-3 col-lg-offset-1">
						<h1 style={styles.titleName}>{this.props.title}</h1>
					</div>
					<div className="col-xs-12 col-sm-2 col-md-2 col-lg-1 col-lg-offset-3" style={styles.navButton}>
						<a href="#/about"><h3 style={styles.blach}>About</h3></a>
					</div>
					<div className="col-xs-12 col-sm-2 col-md-2 col-lg-1" style={styles.navButton}>
						<a href="#/resume"><h3 style={styles.blach}>Resume</h3></a>
					</div>
					<div  className="col-xs-12 col-sm-2 col-md-2 col-lg-1" style={styles.navButton}>
						<a href="#/portfolio"><h3 style={styles.blach}>Portfolio</h3></a>
					</div>
					<div style={styles.navButton} className="col-xs-12 col-sm-2 col-md-2 col-lg-1">
						<a href="#/contact"><h3 style={styles.blach}>Contact</h3></a>
					</div>
				</div>

		)
	}
}
const styles = {
	HeaderRow: {
		color:"white",
		fontFamily: "Mightype",
		zIndex:"0",
		margin:"0"
	},

	clearBackground: {
		background: "linear-gradient(#89043D, transparent)",
		opacity:".2",
		position:"absolute",
		height: "150px",
	},
	titleName: {
		fontSize:"50px",
		textShadow: "1px 1px black"
	},
	navButton: {
		marginTop: "20px",
		textAlign:"center",
		textShadow: "1px 1px black",
	},
	link: {
		color: "white",
		cursor: "pointer"
	}
}
