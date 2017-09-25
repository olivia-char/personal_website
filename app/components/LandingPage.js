import React, { Component } from 'react'
import Olivia from "../assets/img/bean.png"
import NavBar from "./NavBar"

export default class LandingPage extends Component {
	constructor(props){
		super(props)
	}

	componentDidMount() {
		const body=document.getElementsByTagName('body')[0];
		body.style.margin = 0
		body.style.overflow = "hidden"
	}

	componentWillUnmount() {
		const body=document.getElementsByTagName('body')[0];
		body.removeAttribute("style")
	}


	render() {
		return (
			<div className="noScrollWrapper">
				<div className="container">
					<img className="bg" src={Olivia} />
					<NavBar style={{zIndex:0}}/>
				</div>
			</div>
		)
	}
}
