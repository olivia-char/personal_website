import React, { Component } from 'react';
import Mailto from 'react-mailto';
import Github from '../assets/img/github.svg'
import GithubColor from '../assets/img/github-color.svg'
import LinkedIn from '../assets/img/linked-in.svg'
import LinkedInColor from '../assets/img/linked-in-color.svg'
import AtSign from '../assets/img/at.svg'
import AtSignColor from '../assets/img/at-color.svg'

export default class Contact extends Component {
	constructor(props){
		super(props);
		this.state = {
      visibleLinkedIn: false,
      visibleGithub: false,
      visibleEmail: false,
      linkedInImg: LinkedIn,
      githubImg: Github,
      atSignImg: AtSign
    };

	}
	handleMouseOverLinkedIn() {
    this.setState({
      visibleLinkedIn: true,
      linkedInImg: LinkedInColor
    });
    console.log('mouse over works');
  }
  LinkedInMouseOut() {
    this.setState({
      visibleLinkedIn: !this.state.visibleLinkedIn,
      linkedInImg: LinkedIn
    });
     console.log('bye linkedin');
  }
  renderLinkedIn() {
    if(this.state.visibleLinkedIn) {
      return (
        <h3>LinkedIn</h3>
      )
    }
  }
	handleMouseOverGithub() {
    this.setState({
      visibleGithub: true,
      githubImg: GithubColor
    });
    console.log('mouse over works');
  }
  GithubMouseOut() {
    this.setState({
      visibleGithub: !this.state.visibleGithub,
      githubImg: Github
    });
     console.log('bye github');
  }
  renderGithub() {
    if(this.state.visibleGithub) {
      return (
        <h3>Github</h3>
      )
    }
  }

  handleMouseOverEmail() {
    this.setState({
      visibleEmail: true,
      atSignImg: AtSignColor
    });
    console.log('mouse over works');
  }
  EmailMouseOut() {
    this.setState({
    	visibleEmail: !this.state.visibleEmail,
    	atSignImg: AtSign
    });
     console.log('bye email');
  }
  renderEmail() {
    if(this.state.visibleEmail) {
      return (
        <h3>Write Olivia</h3>
      )
    }
  }
	render(){
		return (
			<div className="row">
   			<div className="col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 col-lg-8 col-lg-offset-4">
					<div className="row" style={styles.contactBox}>
						<div className="col-sm-4 col-md-4 col-lg-2" style={styles.box}>
								<a
									href="//linkedin.com/in/olivia-stalcup"
									target="_blank"
									onMouseOver={this.handleMouseOverLinkedIn.bind(this)}
									onMouseOut={this.LinkedInMouseOut.bind(this)}>
											<img src={this.state.linkedInImg} />
								</a>
								{this.renderLinkedIn()}
						</div>
						<div className="col-sm-4 col-md-4 col-lg-2" style={styles.box}>
								<a
									href="//github.com/olivia-char"
									target="_blank"
									onMouseOver={this.handleMouseOverGithub.bind(this)}
									onMouseOut={this.GithubMouseOut.bind(this)}
								>
									<img src={this.state.githubImg} />
								</a>
								{this.renderGithub()}
						</div>
						<div className="col-sm-4 col-md-4 col-lg-2" style={styles.box}>
							<Mailto
								email="ocstalcup@gmail.com"
								obfuscate={true}
								onMouseOver={this.handleMouseOverEmail.bind(this)}
								onMouseOut={this.EmailMouseOut.bind(this)}
							>
								<img src={this.state.atSignImg} />
							</Mailto>
							{this.renderEmail()}
						</div>
					</div>
      	</div>
   		</div>


		)
	}
}
const styles = {
	compBlurb: {
		paddingTop: '8%',
	  paddingLeft: '2%',
	  textAlign: 'center',
	  marginBottom: '2%'
	},
	box: {
		textAlign: 'center',
		height:'175px',
	},
	contactBox: {
		marginBottom: "7%",
		fontFamily:"Mightype",
		color:"#272838"
	}
}
