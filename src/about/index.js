import React from 'react'
import { Container } from 'reactstrap';
import './style.css';
import banana1 from '../assets/banana1.gif';
import banana2 from '../assets/banana2.gif';
import coolstar from '../assets/coolstar.gif';

class About extends React.Component {

  render() {

    return (
    	<div id="about">
	    	<Container>
	    		<h2 className="text-center">
		        About
					</h2>

					This is the about page where you will find good information.

					<div className="centered">
						<img src={banana2} alt={"banana2"}/> 
						<img src={banana2} alt={"banana2"}/> 
						<img src={banana2} alt={"banana2"}/> 
						<img src={banana2} alt={"banana2"}/>
						<img src={banana2} alt={"banana2"}/>
						<img src={banana2} alt={"banana2"}/>
						<img src={banana2} alt={"banana2"}/>
						<img src={banana2} alt={"banana2"}/>
						<img src={banana2} alt={"banana2"}/>
						<img src={banana2} alt={"banana2"}/>
						<img src={banana2} alt={"banana2"}/>
						<img src={banana2} alt={"banana2"}/>
						<img src={banana2} alt={"banana2"}/>
						<img src={coolstar} alt={"coolstar"}/> 
						<img src={banana1} alt={"banana1"}/> 
					</div>


			  </Container>
		  </div>
    );
  }

}

export default About;