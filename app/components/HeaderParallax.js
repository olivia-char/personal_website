import React, { Component } from 'react';
import { Parallax } from 'react-parallax'
import NavBar from './NavBar'

export default class HeaderParallax extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
		
			<Parallax bgImage={this.props.imgSrc} strength={400} className="aboutIntro" bgStyle={this.props.bgStyle}>
          <NavBar />
					<div className="row">
						<div className="col-lg-6 col-lg-offset-3" style={header}>
						<h1 style={{fontSize:"95px"}}>{this.props.title}</h1>
						</div>
					</div>
      </Parallax>

		)
	}
}
const header = {
	color: "white",
	fontFamily: "Mightype",
	marginTop: "5%",
	textAlign: 'center'
}