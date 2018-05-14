import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';
import  '../styles/Card.css';
import  '../styles/skel.css';
import  '../styles/style.css';
import  '../styles/style-xlarge.css';
import Card from './Card';

export default class PrimariaSuperior extends React.Component {
  render(){
    return(
      <div className='whole yellow'>
        <Card color='yellow' title='Titulo Amarillo' video = "https://www.youtube.com/embed/bOZT-UpRA2Y"/>
        <Card color='yellow' title='Titulo Amarillo' video = "https://www.youtube.com/embed/bOZT-UpRA2Y"/>
        <Card color='yellow' title='Titulo Amarillo' video = "https://www.youtube.com/embed/bOZT-UpRA2Y"/>
        <Card color='yellow' title='Titulo Amarillo' video = "https://www.youtube.com/embed/bOZT-UpRA2Y"/>
        <Card color='yellow' title='Titulo Amarillo' video = "https://www.youtube.com/embed/bOZT-UpRA2Y"/>
      </div>
    );
  }
}
