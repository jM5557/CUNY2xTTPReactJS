import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContactCard extends Component {

	render () {

		return (

			<div className = "card">	
				
				<p className = "name">{ this.props.cardData.name }</p>
				<p className = "email">{ this.props.cardData.email }</p>
				
				<div className = "details">
					<div className = "box">
						<div>Mobile</div>
						<span>{ this.props.cardData.phone.mobile }</span>
					</div>

					{ (this.props.cardData.phone.work) && (

						<div className = "box">
							<div>Work</div>
							<span>{ this.props.cardData.phone.work }</span>
						</div>
						
					) }
				</div>

			</div>	

		);

	}

}

ContactCard.propTypes = {

	cardData: PropTypes.shape({

		name: PropTypes.string.isRequired,

		email: PropTypes.string.isRequired,

		phone: PropTypes.shape({
			
			mobile: PropTypes.string.isRequired,

			work: PropTypes.string

		})

	})

}

export default ContactCard;