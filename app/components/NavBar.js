import React, { Component } from 'react'


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

export default class LandingPage extends Component {
	constructor(props){
		super(props)

		this.state = {
			title: generateRandomString(14),
		}
	}

	componentDidMount(){
		this.generateTitle()
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

//empty title
//for each space until end of name
//have a random character added to title
//have random character replaced with title name

	render() {
		return (
				<div className="row" style={HeaderRow}>
					<div className="col-lg-12" style={clearBackground}></div>
					<div className="col-lg-3 col-lg-offset-1">
						<h1 style={titleName}>{this.state.title}</h1>
					</div>
					<div className="col-lg-1 col-lg-offset-3" style={firstNavButton}>
						<a href="#/about"><h3>My Story</h3></a>
					</div>
					<div className="col-lg-1" style={navButton}>
						<a href="#/resume"><h3>Resume</h3></a>
					</div>
					<div  className="col-lg-1" style={navButton}>
						<a href="#/portfolio"><h3>Portfolio</h3></a>
					</div>
					<div style={lastNavButton} className="col-lg-2">
						<a href="#/contact"><h3>Contact Me</h3></a>
					</div>
				</div>

		)
	}
}
const HeaderRow = {
	color:"white",
	fontFamily: "Mightype",
	zIndex:"0",
	margin:"0"
}
const clearBackground = {
	background: "linear-gradient(#89043D, transparent)",
	opacity:".2",
	position:"absolute",
	height: "150px",

}
const titleName = {
	fontSize:"50px",
}
const firstNavButton = {
	marginTop: "20px",
	textAlign:"center",
	paddingLeft:"0%"
}
const navButton = {
	marginTop: "20px",
	textAlign:"center",
}
const lastNavButton = {
	textAlign:"left",
	paddingLeft:"1%",
	marginTop: "20px"
}
