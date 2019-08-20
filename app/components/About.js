import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export default class About extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
			<div className="row">
        <div className="col-lg-10" style={styles.Info}>
            <h2>THIS IS <span>THE</span> GAME CHANGER IN LANGUAGE LEARNING</h2>

            <p>
                If you've ever tried learning another language, you know how difficult it can be.
                Endless memorizing and can't even put a sentence together to save your life...or even chat up the street vendor.
            </p>
            <div className="row">
                <div className="col-lg-4" style={styles.InfoLogo}></div>
                <div className="col-lg-6">
                    <p>IS CHANGING ALL OF THAT. ONE LANGUAGE LEARNER AT A TIME.</p>
                </div>
            </div>
            <p>
                Our <span>revolutionary method</span> and our <span>innovative approach</span> are game changers in the language-learning space.
                We've designed a platform to deliver everything you need to learn <span>real</span> actual language.
                The way it is used in <span>real</span>, situations.
                From the very first minute of study, we'll have you using the language like it's used every day.
            </p>
        </div>

        <div className="col-lg-12">
            <div className="row">
                <div className="col-lg-6">
                    <p>this is an info graphic</p>
                    <h5>You'll Be Exposed To Real Language</h5>
                    <p>
                        People don't learn to use a language from endless vocab lists and countless verb conjugations.
                        They learn from what is actually used, by actual people.
                        And now, so will you.
                    </p>
                </div>
                <div className="col-lg-6">
                    <p>This is an info graphic</p>
                    <h5>You'll Use What You Learn</h5>
                    <p>
                        No ridiculous translations.
                        No meaningless phrases.
                        Just the real stuff.
                        Surrounded by the funnest activities ever!
                    </p>
                </div>
                <div className="col-lg-6">
                    <p>This is an info graphic</p>
                    <h5>You'll Learn Like An Adult Does</h5>
                    <p>
                        We leverage the best of a natural approach to language teaching (i.e. your mom) and a structured approach to language learning (i.e. your highly-developed adult brain).
                    </p>
                </div>
                <div className="col-lg-6">
                    <p>This is an info graphic</p>
                    <h5>You'll Think Create In The Language</h5>
                    <p>
                        You will never, ever need to tell a Parisian that <i>"The sun is yellow."</i>
                        Which is why we're not wasting your time on ridiculous stuff like that or... Which one is "red"? Point to the "elephant". --- you're smart, you're solid... and so is <span>realLINGUA</span> by your side!
                    </p>
                </div>
            </div>
        </div>

        <div className="col-lg-12" style={styles.CallToAction}>
            <Link to="/" className="whiteButton">START LEARNING NOW</Link>
            <h3>ADIOS ENDLESS VOCABULARY LISTS. ADIEU BORING VERB CONJUCTIONS.</h3>
            <h3>Hola <span>real</span> language! Bonjour <span>realLINGUA!</span></h3>
        </div>
			</div>

		)
	}
}

const styles = {
  span: {
      fontWeight: "bold",
  },
  Info: {
      borderTop: "1px solid #449ac8",
      borderBottom: "1px solid #449ac8",
  },
	InlineLogo: {

		backgroundRepeat: "no-repeat",
		backgroundSize: "100%",
		height: "100px"
	},
	CallToAction: {
		marginTop: "5%",
		padding: "2% 0% 2% 0%",
		backgroundImage: "linear-gradient(to top, #007eb6,#FFFFFF)",
		textAlign: "center",
		color: "#FFFFFF"
	}
}
