import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax'
import NavBar from './NavBar'

const generateRandomChar = () => {
	const chars = "-+*/|}{[]~\\\":;?/.><=+-_)(*&^%$#@!)}"
	const random = Math.floor(Math.random() * (chars.length))
	return chars[random]
}

const generateRandomString = (strLength) => {
	let str = ''
	for (var i = 0; i < strLength; i++) {
		str += generateRandomChar()
	}
	return str
}

export default class HeaderParallax extends Component {
	constructor(props){
		super(props)

		this.state = {
			title: "",
		}
	}

	componentDidMount() {
		if(this.props.hasNoImage) {
			this.generateTitle()
		}
	}

	generateTitle(){
		const name = "Olivia Stalcup"
		const fnArr = []
		let idx = 0
		for (var i = 0; i <= name.length - 1; i++) {
			const promise = _=>{
				return new Promise((resolve, reject)=>{
					setTimeout(
						_=>this.setState({
							title: name.substring(0,++idx) + generateRandomString(name.length-idx)
						}, resolve),75
					)
				}
			)}
			fnArr.push(promise)
		}

		fnArr.reduce((p, fn) =>p.then(fn), Promise.resolve())
	}

	render() {
		return (

			<Parallax strength={400} className="aboutIntro" bgStyle={this.props.bgStyle}>
          <Background>
          	<img src={this.props.imgSrc} onLoad={_=>this.generateTitle()}/>
          </Background>
          <NavBar title={this.state.title}/>
					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-lg-offset-3" style={styles.header}>
						<h1 style={{fontSize:"95px"}}>{this.props.title}</h1>
						</div>
					</div>
      </Parallax>

		)
	}
}
const styles = {
	header: {
		color: "white",
		fontFamily: "Mightype",
		marginTop: "5%",
		textAlign: 'center',
		textShadow: ".5px .5px black"
	}
}
