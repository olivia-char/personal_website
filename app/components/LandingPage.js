import React, { Component } from 'react'
import Olivia from "../assets/img/bean.png"
import HeaderParallax from "./HeaderParallax.js"

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
			<div className="row" >
				<div className="col-sm-12 col-md-12 col-lg-12">

					<img className="bg" src={Olivia} />
					<HeaderParallax
						style={{zIndex:0}}
						hasNoImage={true}
					/>
				</div>
			</div>
		)
	}
}
