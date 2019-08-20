import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class InfoGraphic extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
			<div className="row" style={styles.Footer}>

			</div>

		)
	}
}

const styles = {
	Footer: {
		padding: "10% 0% 3% 0%",
		color: "#441C4E",
		backgroundColor: "#C4C4C4"
	},
	FooterInfo: {
		fontFamily: "Open Sans, sans-serif",
		fontSize: "14px",
		paddingLeft: "6%"
	},
	FooterTitle: {
		fontFamily: "Alegreya Sans, sans-serif",
		fontSize: "16px",
	}
}
