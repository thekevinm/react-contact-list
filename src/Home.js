import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import data from './people.json';

class Home extends Component {
	render() {
		return (
			<div className="mainCont">
			  <header className="homeHeader">
			    <h1>My Peeps</h1>
			  </header>
			  {data.map(person => (
			    <p id="names"><Link to={`/about/${person.id}`} style={{ textDecoration: 'none' }}><img className="homePics" src={person.picture.thumbnail} />{person.name.first} {person.name.last}</Link></p>
			  ))}
			</div>
		)
	}
}

export default Home