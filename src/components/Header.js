import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';
import  '../styles/Card.css';
import  '../styles/skel.css';
import  '../styles/style.css';
import  '../styles/style-xlarge.css';

export default class PrimariaInferior extends React.Component {
  render(){
    return(

      <header id="header">
				<h1><Link to={routes.LANDING}>Limono</Link></h1>
				<nav id="nav">
					<ul>
						<li><Link to={routes.LANDING}>Home</Link></li>
						<li><a href='#nosotros'>Nosotros</a></li>
            <li><a href='#sabermas'>Conoce más</a></li>
						<li><a href="#" class="button special">Sign Up</a></li>
					</ul>
				</nav>
			</header>
    );
  }
}
