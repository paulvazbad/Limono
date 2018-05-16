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

import infoCar from '../pdf/Infografia-Carbohidratos.pdf';
import infoLip from '../pdf/Infografia-Lipidos.pdf';
import infoPro from '../pdf/Infografia-Proteinas.pdf';

export default class LandingPage extends React.Component{
  render(){
    return(
      <div>
      <section id="banner">
        <h2>Hola. Esto es Limono.</h2>
        <p>Aprendiendo super habitos saludables.</p>
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
								<h4>María Arreguin</h4>
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

      <section id="sabermas" class="wrapper style3 special">
        <div class="container">
  					<header class="major">
  						<h2>Conoce más:</h2>
              </header>
              <div class="12u$">
								<ul class="actions">
									<li>
                  <a href={infoLip} target="_blank"><input value="Infografia Lípidos" class="special big" type="submit"/></a>
                  </li>
                  	<li>
                    <a href={infoPro} target="_blank"><input value="Infografia Proteínas" class="special big" type="submit"/></a>
                    </li>
                    	<li>
                      <a href={infoCar} target="_blank"><input value="Infografia Carbohidratos" class="special big" type="submit"/></a>
                      </li>
								</ul>
							</div>
  				</div>
      </section>

      <footer id="footer">
				<div class="container">
					<section class="links">
						<div class="8u 12u$(medium)">
							<ul class="copyright">
								<li>Design: <a href="http://templated.co">TEMPLATED</a></li>
								<li>Images: <a href='https://www.freepik.com/free-vector/seamless-fruit-pattern_713157.htm'>Designed by Freepik</a></li>
                <li>Made with ❤️ by  <a href='https://www.github.com/paulvazbad'>Paul Vazquez</a> </li>
              </ul>

						</div>
          </section>
        </div>
      </footer>

      </div>
      //El codigo de la Landing page
    );
  }
}
