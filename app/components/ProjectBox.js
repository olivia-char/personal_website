import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

export default class ProjectBox extends Component {
	constructor(props){
		super(props);
		this.state = {
			isHighlighted: true,
		}
	}
	renderGreyBox() {
			return(
				<div style={this.state.isHighlighted ? styles.styleGrey : styles.styleClear} onMouseOver={this.greyMouseOver.bind(this)}>
					<img src={this.props.imgSrc} style={styles.imgStyle}/>
					<h1 style={styles.projectTitle}>{this.props.title}</h1>
					<h3 style={styles.projectContent}>{this.props.context}</h3>
					<h4 style={styles.projectTech}>{this.props.tech}</h4>
					<Button bsSize="large" className="btn btn-primary-outline" href={this.props.link}>View</Button>
				</div>
			)
	}
	greyMouseOver() {
		this.setState({
			isHighlighted:false,
		})
	}
	greyMouseOut() {
		this.setState({
			isHighlighted:true
		})
	}
	render() {
		return (
			<div>
				<div className="col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3" onMouseEnter={this.greyMouseOver.bind(this)} onMouseOut={this.greyMouseOut.bind(this)}>
					{this.renderGreyBox()}
				</div>
			</div>
		)
	}
}
const styles = {
	projectTech: {
		fontFamily:"Canvas",
		padding: "0% 5% 3% 5%"
	},
	projectTitle: {
		fontFamily:"Mightype",
		fontSize: "45px",
		color:"#89043D",
		textShadow: "1px 1px black"
	},
	projectContent: {
		fontFamily:"Canvas",
		padding: "0% 5% 0% 5%"
	},
	styleGrey: {
		textAlign:"center",
		backgroundColor:"#9E788F",
		opacity:".7",
		boxShadow:"5px 5px 2px silver",
		marginBottom:"5%",
	},
	styleClear: {
		textAlign:"center",
		backgroundColor:"#9E788F",
		boxShadow:"10px 10px 5px silver",
		marginBottom:"5%"
	},
	imgStyle: {
		width:"100%",
		marginBottom:"5%",
		border:"1px solid #9E788F",
		height:"350px"
	},
}
