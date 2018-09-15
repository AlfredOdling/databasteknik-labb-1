import React, { Component } from 'react';
import { Container } from 'reactstrap';
import UserRepos from './containers/UserRepos';
import './style.css';
import rainbowspinningstar from '../assets/rainbowspinningstar.gif';


class Home extends Component {
	render() {
		return (
			<div id="home">
				<Container>
					<div className="centerTitle">
						<img src={rainbowspinningstar} alt={"rainbowspinningstar"} />
						<h2 className="text-center">Alfred´s personal page</h2>
						<img src={rainbowspinningstar} alt={"rainbowspinningstar"} />
					</div>

					Welcome to my personal page! Browse around and see if there is anything you like.
				</Container>
			</div>
		);
	}
}

export default Home;
