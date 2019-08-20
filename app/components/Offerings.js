import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Offerings extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
			<div className="row" style={styles.Offerings}>
        <div className="col-lg-12">
            <h4>OUR LANGUAGES</h4>

                <div className="col-lg-6">
                    <p>THis is realFRENCH LOGO</p>
                    <p>Start your journey to speaking <span>French</span>, one of the few languages spoken on 5 continents!</p>
                </div>

                <div className="col-lg-6">
                    <p>THis is realSPANISH LOGO</p>
                    <p>Live and breathe <span>Spanish</span>, one of the very few languages spoken all over the world!</p>
                </div>

        </div>
			</div>

		)
	}
}

const styles = {

}
