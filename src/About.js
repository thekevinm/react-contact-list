import React, {Component} from 'react'
import people from './people'
import {Link} from 'react-router-dom'
import User from './resources/userimg.svg'
import Email from './resources/email.svg'
import Phone from './resources/phone.svg'
import Globe from './resources/globe.svg'

class About extends Component {
	render() {
		return (
			<div className="aboutCont">
				{people.filter(person => person.id == this.props.match.params.id).map(person => (
					<div className="aboutCont2">
						<header className="aboutHead">
							<Link to="/"><p id="backButton">&#8592;</p></Link>
							<img className="aboutPic"src={person.picture.large} />
						</header>
						<div className="iconCont">
							<div className="iconCool"><img className="icons" src={User} />{person.name.first} {person.name.last}</div>
							<div className="iconCool"><img className="icons" src={Email} />{person.email}</div>
							<div className="iconCool"><img className="icons" src={Phone} />{person.phone}</div>
							<div className="iconCool"><img className="icons" src={Globe} />{person.location.city}, {person.location.state}</div>
						</div>
					</div>
				))}
			</div>
		)
	}
}

export default About