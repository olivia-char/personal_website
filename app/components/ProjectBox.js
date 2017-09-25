import React, { Component } from 'react'

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
					<img src={this.props.imgSrc} height={200} style={styles.imgStyle}/>
					<h1 style={styles.projectTitle}>{this.props.title}</h1>
					<h3 style={styles.projectContent}>{this.props.context}</h3>
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
				<div className="col-lg-6 col-lg-offset-3" onMouseEnter={this.greyMouseOver.bind(this)} onMouseOut={this.greyMouseOut.bind(this)}>
					{this.renderGreyBox()}
				</div>
			</div>
		)
	}
}
const styles = {
	projectTitle: {
		fontFamily:"Mightype",
		fontSize: "45px",
		color:"#89043D",
		textShadow: "1px 1px black"
	},
	projectContent: {
		fontFamily:"Canvas",
		padding: "0% 5% 10% 5%"
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
	},
}
