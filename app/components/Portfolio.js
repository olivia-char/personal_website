import React, { Component } from 'react';
import ProjectsImg from "../assets/img/workDesk.png"
import BioPrintImg from "../assets/img/bioPrint.png"
import GlenetImg from "../assets/img/glenet.png"
import BookShelf from "../assets/img/bookshelf.png"
import FroggyOaks from "../assets/img/FroggyOaks.png"
import WeatherImg from "../assets/img/Weather.png"
import HeaderParallax from "./HeaderParallax"
import ProjectBox from './ProjectBox'
import { StickyContainer, Sticky } from 'react-sticky';

export default class Portfolio extends Component {
	constructor(props){
		super(props)
	}

	render() {
		return (
			<div className="row">
				<div className="col-sm-12 col-md-12 col-lg-12">
				<HeaderParallax
					title="Portfolio"
					imgSrc={ProjectsImg}
					bgStyle={{marginTop: "-250px"}}
				/>
				<StickyContainer style={styles.portfolioTitle}>
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
									borderBottom: "1px solid #9E788F",
								}
								console.log({ isSticky, wasSticky, style});
								return (
									<header style={modStyle}>
										<div className="col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3" style={styles.resumeBox}>
											<h1 style={styles.font}>Personal Projects</h1>
										</div>
									</header>
								)
							}
						}
					</Sticky>
					<div className="row" style={styles.portfolioIntro} >
						<ProjectBox
							title="Rebuidling Froggy Oaks"
							imgSrc={FroggyOaks}
							context="An Interactive Map of the Rebuilding Process of Froggy Oaks after the Sonoma County Wildfires."
							tech="Technologies Used - React.js, Webpack, Nginx"
							link="https://www.froggyoaks.com"
						/>
					</div>
					<div className="row" style={styles.portfolioIntro}>
						<ProjectBox
							title="Weather Forecast"
							imgSrc={WeatherImg}
							context="Using the OpenWeatherMap API, you can enter your zip code to find your local weather forecast"
							tech="Technologies Used - Bootstrap, OpenWeatherMap API "
							link="https://weather.oliviastalcup.com"
						/>
					</div>
				</StickyContainer>
				<StickyContainer style={styles.portfolioTitle}>
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
								borderBottom: "1px solid #9E788F",
							}
							console.log({ isSticky, wasSticky, style});
							return (
								<header style={modStyle}>
									<div className="col-lg-6 col-lg-offset-3" style={styles.resumeBox}>
										<h1 style={styles.font}>Professional Projects</h1>
									</div>
								</header>
							)
						}
					}
					</Sticky>
					<div className="row" style={styles.portfolioIntro} >
						<ProjectBox
							title="Glenét Vineyards"
							imgSrc={GlenetImg}
							context="Professional website for a Sonoma County Winery offering wines and memberships."
							tech="Technologies Used - Ruby on Rails, React.js, Bootstrap, MailChimp"
							link="https://winery.oliviastalcup.com"
						/>
					</div>
					<div className="row" style={styles.portfolioIntro}>
						<ProjectBox
							title="BioPrint Devices, Inc."
							imgSrc={BioPrintImg}
							context="Professional website for a biomedical device company."
							tech="Technologies Used - React.js, Webpack, Bootstrap"
							link="https://device.oliviastalcup.com"
						/>
					</div>
				</StickyContainer>
   			</div>

			</div>
		)
	}
}
const styles = {
	font: {
		fontFamily: 'Canvas',
		padding: "3% 0% 5% 0%"
	},
	portfolioIntro: {
		color: "white",
		marginTop:"4%",
	},
	photoStyle: {
		width:"100%"
	},

	resumeBox: {
		textAlign:"center",
		paddingBottom: "2%",
	}
}
