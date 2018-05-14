import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';
import  '../styles/Card.css';
import '../styles/Games.css'
export default class GameScreen extends React.Component{
  constructor(props) {
    super(props);
    this.state = this.props.location.state;
    this.fondo = this.state.color;
    this.game = this.state.game;
  }

  render(){
    return(
      <div className={this.fondo}>
      <p> Nada </p>
      <iframe src={this.game} className='cross'
      />
    </div>
  );

  }
}
