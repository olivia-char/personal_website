import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ReferFriend extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
			<div className="row">
        <div className="col-lg-12">
            <h2>Thank you for your interest in <span><i>real</i>LINGUA!</span> Please refer us to your friends.</h2>
						 <p>Please Enter Their Email Address</p>
						 <form className="ReferFriendForm">
								 <input type="text"></input>
						 </form>
        </div>
			</div>

		)
	}
}

const styles = {

}
