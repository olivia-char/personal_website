import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class HowItWorks extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
			<div className="row" style={styles.HowItWorks}>
        <div className="col-lg-12">
            <h2><span>HEY!</span> Remember how you wanted to learn a new language?</h2>
            <div className="row">
                <div className="col-lg-3">
                    <p>this is the image</p>
                </div>
                <div className="col-lg-9">
                    <p><span>So,</span> you found a popular language-learning tool and started learning vocabulary, phrases
                        even.</p>
                    <p><i>"The sun is yellow.", "The dog is under the table.", "Vintage records are becoming
                        rare."</i></p>
                    <p>Great!</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3">
                    <p>this is the image</p>
                </div>
                <div className="col-lg-9">
                    <p>
                        <span>Then</span> you meet someone who speaks that language! And you're completely caught off guard! You feel
                        awkward.
                    </p>
                    <p>
                        You try, but after saying your name and telling them where the dog is, you have no idea what they're saying.
                        We, at <span>realLINGUA</span>, have been there!
                    </p>
                    <p>
                        But...it's not your fault!
                        We've all wanted to learn a new language and had that experience where nothing made any sense, because nobody taught us how people really speak.
                    </p>
                    <p>That’s where we come in.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3">
                    <p>this is the image</p>
                </div>
                <div className="col-lg-9">
                    <p>
                        The <span>realLINGUA</span> system demystifies the language people use by presenting natural conversations and breaking them down for you, bit by bit.
                    </p>
                    <p>
                        Sure, people write "I want to" but they usually say "I wanna."
                        And this happens in languages all over the world.
                    </p>
                    <p>
                        We give you expertly-designed learning activities to help you identify, remember, and use the language you're studying.
                    </p>
                </div>
            </div>
            <div className="col-lg-3 offset-4">
                <Link to="/" className="blueButton">START YOUR FREE TRIAL NOW</Link>
            </div>
        </div>
			</div>

		)
	}
}

const styles = {

}
