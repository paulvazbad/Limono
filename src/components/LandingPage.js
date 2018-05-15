import React from 'react';
import { Link } from 'react-router-dom';
import { Column, Row } from 'simple-flexbox';
import * as routes from '../constants/routes';

import  '../styles/Cajas.css';
import  '../styles/Card.css';
import  '../styles/skel.css';
import  '../styles/style.css';
import  '../styles/style-xlarge.css';

import caro from '../images/caro.jpg';
import ale from '../images/ale.jpg';
import marianat from '../images/mariana.jpg';
import regina from '../images/regina.jpg';
import maria from '../images/maria.jpg';
import katia from '../images/katia.jpg';

export default class LandingPage extends React.Component{
  render(){
    return(
      <div>
      <section id="banner">
        <h2>Hola. Esto es Limono.</h2>
        <p>Alguna frase insipiradora mamalona aqui/ slogan</p>
        <ul class="actions">
          <Link to={routes.DECIDIRNIVEL}>
            <a href="#" class="button big">Decidir el nivel</a>
            </Link>
        </ul>
      </section>
      <section id="nosotros" class="wrapper style2 special">
				<div class="container" id="nosotros">

          <header class="major">
						<h2>Nosotros:</h2>
						<p>Somos una empresa de jóvenes futuras nutriólogas que buscamos
            promover un estilo de vida sano, una correcta nutrición en los niños y con esto ayudar a su óptimo desarrollo.</p>
            <p> Con esta página web y sus múltiples actividades didácticas
            los niños podrán aprender y divertirse mientras aprenden sobre salud y nutrición.</p>
					</header>

          <section class="profiles">
						<div class="row">
							<section class="3u 6u(medium) 12u$(xsmall) profile">
								<img src={caro} alt="" width="92" height="92"/>
								<h4>Carolina Vazquez</h4>
								<p>Instructor</p>
							</section>
							<section class="3u 6u$(medium) 12u$(xsmall) profile">
								<img src={maria} alt="" width="92" height="92" />
								<h4>Mariana Regin</h4>
								<p>Dibujante</p>
							</section>
							<section class="3u 6u(medium) 12u$(xsmall) profile">
								<img src={regina} alt=""  width="92" height="92" />
								<h4>Regina Flores</h4>
								<p>Diseñador</p>
							</section>
              <section class="3u 6u(medium) 12u$(xsmall) profile">
                <img src={ale} alt=""  width="92" height="92" />
                <h4>Alejandra Pardo</h4>
                <p>Promoción</p>
              </section>
						</div>
            <div class="row">
							<section class="3u 6u(medium) 12u$(xsmall) profile">
								<img src={katia} alt="" width="92" height="92"/>
								<h4>Katia Reyes</h4>
								<p>Escritora</p>
							</section>
							<section class="3u 6u$(medium) 12u$(xsmall) profile">
								<img src={marianat} alt="" width="92" height="92" />
								<h4>Mariana Tapia</h4>
								<p>Editora</p>
							</section>
						</div>
					</section>
        </div>
      </section>

      </div>
      //El codigo de la Landing page
    );
  }
}
