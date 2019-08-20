import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import About from './About'
import HowItWorks from './HowItWorks'
import Offerings from './Offerings'
import ReferFriend from './ReferFriend'
import Footer from './Footer'



export default class LandingPage extends Component {
	constructor(props){
		super(props)
	}

	render() {
			 return (
					 <div className="row">
					 	<div className="col-lg-12" style={styles.LandingPage}>
							<div className="row">
								<div className="col-lg-6" style={styles.TagLine}>
										<h2>You know that language you studied?</h2>
										<h2>NOW <span>SPEAK</span> IT FOR <span><i>real!</i></span></h2>
										<div>
											<Link to="/" className="blueButton">START LEARNING NOW</Link>
										</div>
										<p>It takes just 30 seconds. No credit card. Start for <span>free</span> now.</p>
								</div>
								<div className="col-lg-5" style={styles.Logo}></div>
							</div>
						</div>
						<div className="col-lg-12">
							<About />
						</div>


						<div className="col-lg-12" style={styles.Testimonial}>
							<h3>TESTIMONIALS</h3>
						</div>

						<div className="col-lg-12" style={styles.HIW}>
							<HowItWorks />
						</div>

						<div className="col-lg-12" style={styles.CallToAction}>
							<h3>You know that language you've been trying to learn?</h3>
							<h3>Start speaking it. For <span><i>real!</i></span></h3>
							<h3><span><i>real</i></span> language, <span><i>real</i></span> learning,</h3>
							<h1><span><i>real</i>LINGUA</span></h1>
						</div>



						<div className="col-lg-12" style={styles.Offerings}>
								<Offerings />
						</div>

						<div className="col-lg-12" style={styles.ReferFriend}>
						<ReferFriend />
						</div>

					 	 <Footer />
					 </div>
			 )
	 }
}

const styles =  {
		LandingPage: {
			padding: "2%",
			backgroundImage: "linear-gradient(#007eb6,#FFFFFF)",
			textAlign: "center",
		},
		TagLine: {
			marginTop: "5%"
		},
		Logo: {

			backgroundRepeat: "no-repeat",
			backgroundSize: "100%",
			height: "300px",
			marginTop: "5%"
		},
  	Testimonial: {
			backgroundColor: "#007eb6",
			padding: "5% 0% 5% 0%",
			color: "#FFFFFF",
			textAlign: "center"
		},
		CallToAction: {
			backgroundColor: "#007eb6",
			color: "#FFFFFF",
			textAlign: "center"
		},
		Offerings: {
			backgroundColor: "#FFFFFF",
			padding: "5% 0% 5% 0%",
			color: "black",
			textAlign: "center"
		},
		ReferFriend: {
			padding: "2% 0% 2% 0%",
			backgroundImage: "linear-gradient(#007eb6,#FFFFFF)",
			textAlign: "center",
			color: "white"
		}
}
