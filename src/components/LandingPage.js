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
      <section id="two" class="wrapper style2 special">
				<div class="container">

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
								<img src="images/profile_placeholder.gif" alt="" />
								<h4>Carolina Vazquez</h4>
								<p>Lorem ipsum dolor</p>
							</section>
							<section class="3u 6u$(medium) 12u$(xsmall) profile">
								<img src="images/profile_placeholder.gif" alt="" />
								<h4>Mariana Tapia</h4>
								<p>Ullam nihil repudi</p>
							</section>
							<section class="3u 6u(medium) 12u$(xsmall) profile">
								<img src="images/profile_placeholder.gif" alt="" />
								<h4>Doloremque quo</h4>
								<p>Harum corrupti quia</p>
							</section>
							<section class="3u$ 6u$(medium) 12u$(xsmall) profile">
								<img src="images/profile_placeholder.gif" alt="" />
								<h4>Voluptatem dicta</h4>
								<p>Et natus sapiente</p>
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
