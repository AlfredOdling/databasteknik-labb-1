import React from 'react'
import MessageBoard from '../messageBoard/index'
import { Container } from 'reactstrap';
import './style.css';

class Contact extends React.Component {

	render() {

		return (
			<div id="about">
				<Container>
					<h2 className="text-center">Contact</h2>
					Leave a message here and I will get back to you.
					<MessageBoard/>
			  </Container>
			</div>
		);
	}

}

export default Contact;