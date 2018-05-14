import React from 'react';
import { Link } from 'react-router-dom';
import { Column, Row } from 'simple-flexbox';
import * as routes from '../constants/routes';
import  '../styles/Cajas.css';
import  '../styles/Card.css';
import  '../styles/skel.css';
import  '../styles/style.css';
import  '../styles/style-xlarge.css';
export default class LandingPage extends React.Component{
  render(){
    return(
      <div>
      <section id="banner">
        <h2>Hola. Esto es Limono</h2>
        <p>Alguna frase insipiradora mamalona aqui/ slogan</p>
        <ul class="actions">
          <Link to={routes.DECIDIRNIVEL}>
            <a href="#" class="button big">Decidir el nivel</a>
            </Link>
        </ul>
      </section>
      </div>
      //El codigo de la Landing page
    );
  }
}
