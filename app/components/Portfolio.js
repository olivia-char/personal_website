import React, { Component } from 'react';
import ProjectsImg from "../assets/img/desk.png"
import BioPrintImg from "../assets/img/bioPrint.png"
import HeaderParallax from "./HeaderParallax"
import ProjectBox from './ProjectBox'
import { StickyContainer, Sticky } from 'react-sticky';

export default class Portfolio extends Component {
	constructor(props){
		super(props)
	}

	render() {
		return (
			<div className="container">
				<HeaderParallax
			 		title="Portfolio"
			 		imgSrc={ProjectsImg}
			 		bgStyle={{marginTop: "-250px"}}
			 	/>
				<StickyContainer style={PortfolioTitle}>
					<Sticky>
						{
							({
								style,
								isSticky,
								wasSticky
							}) => {
								const modStyle = {
									...style,
									zIndex: 1,
									backgroundColor:"white",
								}
								console.log({ isSticky, wasSticky, style});
								return (
									<header style={modStyle}>
										<div className="col-lg-6 col-lg-offset-3" style={resumeBox}>
											<h1 style={font}>Professional Projects</h1>
										</div>
         					</header>
								)
							}
						}
					</Sticky>
					<div className="row" style={portfolioIntro} >
						<ProjectBox
							title="Glenét Vineyards"
							imgSrc={ProjectsImg}
							context="Business website for an exclusive membership winery. Hancrafted, small-lot vintages from the Sonoma County Appelation"
						/>
					</div>
					<div className="row" style={portfolioIntro}>
						<ProjectBox
							title="BioPrint Devices, Inc."
							imgSrc={BioPrintImg}
							context="Professional website for a biomedical device company specialzing in the advancement of spirometers"
						/>
					</div>
				</StickyContainer>
				<StickyContainer style={PortfolioTitle}>
    			<Sticky>
					{
						({
							style,
							isSticky,
							wasSticky
						}) => {
							const modStyle = {
								...style,
								zIndex: 1,
								backgroundColor:"white",
							}
							console.log({ isSticky, wasSticky, style});
							return (
								<header style={modStyle}>
									<div className="col-lg-6 col-lg-offset-3" style={resumeBox}>
										<h1 style={font}>Personal Projects</h1>
									</div>
								</header>
							)
						}
					}
       		</Sticky>
					<div className="row" style={portfolioIntro}>
						<ProjectBox
							title="Personal Website Alpha"
							imgSrc={ProjectsImg}
							context="First rendition of my personal website. Made layout more professional."
						/>
					</div>
					<div className="row" style={portfolioIntro}>
						<ProjectBox
							title="BookShelf"
							imgSrc={ProjectsImg}
							context="A personalized reading list based on a personality test (alpha form)"
						/>
					</div>
					<div className="row" style={portfolioIntro}>
						<ProjectBox
							title="What's the weather?"
							imgSrc={ProjectsImg}
							context="put in your address and find out what the weather is."
						/>
					</div>
    		</StickyContainer>
			</div>
		)
	}
}
const font = {
	fontFamily: 'Canvas',
	borderBottom: "1px solid #9E788F",
	paddingBottom: "5%"
}
const portfolioIntro = {
	color: "white",
	marginTop:"4%",
}

const photoStyle = {
	width:"100%"
}
const PortfolioTitle = {
	margin: '5% 0% 0% 0%',
}
const resumeBox = {
	textAlign:"center",
	paddingBottom: "2%",
}
