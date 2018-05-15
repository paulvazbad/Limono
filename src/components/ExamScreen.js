import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';
import '../styles/Exams.css';

export default class ExamScreen extends React.Component{
  constructor(props) {
    super(props);
    this.state = this.props.location.state;
    this.fondo = this.state.color;
    this.exam = this.state.exam;
  }

  render(){
    return(
      <div className={this.fondo}>
      <iframe src={this.exam} className='form'
      />
    </div>
  );

  }
}
