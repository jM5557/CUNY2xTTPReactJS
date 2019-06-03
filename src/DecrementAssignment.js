import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Decrement extends Component {

	constructor (props) {

		super(props);

		this.state = {

			num: props.num

		}

		this.incrementNumber = this.incrementNumber.bind(this);
		this.decrementNumber = this.decrementNumber.bind(this);

	}

	incrementNumber () {

		this.setState({

			num: this.state.num + 1

		});

	}

	decrementNumber () {

		if (this.state.num < 1) {

			alert("Can't Decrement Further!");

			return;

		}

		this.setState({

			num: this.state.num - 1

		});

	}

	render () {

		return (

			<div className = "decrement-wrapper">

				<button onClick = { this.incrementNumber }>Increment</button>

				<span className = "count">{ this.state.num }</span>

				<button onClick = { this.decrementNumber }>Decrement</button>

			</div>

		);

	}

} 

Decrement.propTypes = {

	num: PropTypes.number.isRequired

}

export default Decrement;