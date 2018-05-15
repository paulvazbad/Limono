import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';

import  '../styles/Card.css';
import  '../styles/skel.css';
import  '../styles/style.css';
import  '../styles/style-xlarge.css';

export default class Card extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    if(this.props.color==='yellow'){
    return(
      <div className='card'>
      <header class="major">
        <h2>{this.props.title}</h2>
      </header>
      <div className='videoDiv'>
        <iframe src={this.props.video} frameborder="0" width="100%" height="100%" allowfullscreen className='videoStyle'>
        </iframe>
      </div>
        <Link to={{pathname:routes.EXAMS, state:{ color:'whole yellow', exam:this.props.exam} }}>
        <p class="button yellow">Examen
        </p>
        </Link>
        <Link to={{pathname:routes.GAMES, state:{color:'whole yellow', game:this.props.game} }}>
        <p class="button yellow">Juegos
        </p>
        </Link>
      </div>
    );
  }
  else{
    return(
      <div className='card'>
      <header class="major">
        <h2>{this.props.title}</h2>
      </header>
        <iframe width="560" height="315" src={this.props.video} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
        </iframe>
          <Link to={{pathname:routes.EXAMS, state:{ color:'whole', game:this.props.exam} }}>
        <p class="button aqua">Examen
        </p>
          </Link>
        <Link to={{pathname:routes.GAMES, state:{ color:'whole', game:this.props.game} }}>
        <p class="button aqua">Juegos
        </p>
        </Link>
      </div>

    );
  }
  }
}
