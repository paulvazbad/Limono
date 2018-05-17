import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';
import Card from './Card';

import * as allAct  from '../constants/games';


export default class PrimariaInferior extends React.Component {

  renderCards(){
    return(
      allAct.listaActividadesMen.map(actividad =>
      <Card color='whole' title={actividad.titulo} video={actividad.video} game={actividad.game} exam={actividad.exam} />)
    );
  }
  render(){
    return(
      <div className='whole'>
      <header class="major">
        <h2>Primaria Menor</h2>
      </header>
      {this.renderCards()}

      </div>
    );
  }
}
