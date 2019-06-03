import React, { Component } from 'react';
import ContactCard from './ContactCardAssignment';
import Decrement from './DecrementAssignment';

class App extends Component {

	constructor (props) {

		super(props);

		this.state = {

		}

	}

	render () {

		return (

			<div>

				<ContactCard cardData = { {
					name: "Javier Minchala",
					email: "javierminchala@gmail.com",
					phone: {
						mobile: "555-555-5555",
						work: "347-123-45678"
					}
				} } />

				<ContactCard cardData = { {
					name: "John Smith",
					email: "smith.john@gmail.com",
					phone: {
						mobile: "718-164-3756",
						work: "347-134-2212"
					}
				} } />

				<ContactCard cardData = { {
					name: "Jane Doe",
					email: "jdoe98@gmail.com",
					phone: {
						mobile: "347-125-5555"
					}
				} } />

				<div>

					<Decrement num = { 10 } />

				</div>

			</div>

		);

	}

}

export default App;