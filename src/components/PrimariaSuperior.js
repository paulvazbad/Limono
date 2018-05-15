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
        <Card color='yellow' title='Proteínas' video = "https://www.youtube.com/embed/bOZT-UpRA2Y"
        game=''
        exam='https://docs.google.com/forms/d/e/1FAIpQLSeBDZd8_VPm91YyTyvEki_rtS8JY5-M5gM1dGloF3X5-q4sZg/viewform?embedded=true'/>
        <Card color='yellow' title='Lípidos'
        video = "https://www.youtube.com/embed/bOZT-UpRA2Y"
        game=''
        exam='https://docs.google.com/forms/d/e/1FAIpQLSfn3pIuV_IrGRrXjJWpP1I27_TvWCR8blQ8bSr_ynk-Q9Ytfw/viewform?embedded=true'/>
        <Card color='yellow' title='Carbohidratos'
        video = "https://www.youtube.com/embed/bOZT-UpRA2Y"
        game=''
        exam='https://docs.google.com/forms/d/e/1FAIpQLSckp-MoJjpbdueYEUwXZzffd88z49Xj07CcYFYVDDgmcNlJCw/viewform?embedded=true'/>
      </div>
    );
  }
}
