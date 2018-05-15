import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';
import Card from './Card';

export default class PrimariaInferior extends React.Component {
  render(){
    return(

      <div className='whole'>
        <Card color='aqua' title='Titulo verde' video = "https://www.youtube.com/embed/bOZT-UpRA2Y"
        game='https://puzzel.org/en/wordseeker/embed?p=-LCS0J625Hu11RmiND6G'
        />
        <Card color='aqua' title='Titulo verde' video = "https://www.youtube.com/embed/bOZT-UpRA2Y"
        game="https://www.jigsawplanet.com/tinkerpj?rc=ulist&amp;num=4&amp;title=tinkerpj&#39;s%20Last%20Jigsaws"/>
        <Card color='aqua' title='Titulo verde' video = "https://www.youtube.com/embed/bOZT-UpRA2Y"
        game="https://www.jigsawplanet.com/tinkerpj?rc=ulist&amp;num=4&amp;title=tinkerpj&#39;s%20Last%20Jigsaws"/>
      </div>
    );
  }
}
