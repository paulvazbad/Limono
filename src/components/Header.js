import React from 'react';
import {HashLink as Link } from 'react-router-hash-link';
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
						<li><Link to={routes.NOSOTROS}>Nosotros</Link></li>
            <li><Link to={routes.SABERMAS}>Conoce más</Link></li>
					</ul>
				</nav>
			</header>
    );
  }
}
