import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';

import  '../styles/Card.css';
import  '../styles/skel.css';
import  '../styles/style.css';
import  '../styles/style-xlarge.css';

import Card from './Card';
import * as allAct  from '../constants/games';

export default class PrimariaSuperior extends React.Component {
  renderCards(){
    return(
      allAct.listaActividadesSup.map(actividad =>
      <Card color='yellow' title={actividad.titulo} video={actividad.video} game={actividad.game} exam={actividad.exam} />)
    );
  }
  render(){
    return(

      <div className='whole yellow'>
      <header class="major" >
        <h2>Primaria Mayor</h2>
      </header>
      {this.renderCards()}
      </div>
    );
  }
}
