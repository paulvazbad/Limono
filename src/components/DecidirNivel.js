import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';
import  '../styles/Card.css';
import  '../styles/skel.css';
import  '../styles/style.css';
import  '../styles/style-xlarge.css';

export default class DecidirNivel extends React.Component {
  render(){
    return(
    <div className='container2'>
    <div className='container1'>
      <Link to={routes.PRIMARIAINF}>
        <div className='col1' >
          <p> Primaria inferior y Kinder </p>
        </div>
      </Link>

      <Link to={routes.PRIMARIASUP}>
        <div className='col2' >
          <p> Primaria Superior</p>
        </div>
      </Link>
      </div>
      </div>
    );
  }
}
