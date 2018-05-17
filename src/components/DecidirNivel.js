import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';
import { Modal, Button } from 'react-bootstrap';
import  '../styles/Card.css';
import  '../styles/skel.css';
import  '../styles/style.css';
import  '../styles/style-xlarge.css';
import '../styles/bootstrap.css';
import  '../styles/Card.css';

export default class DecidirNivel extends React.Component {
  constructor(props, context){
    super(props, context);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      show: true
    };
  }
  handleClose() {
    this.setState({ show: false });
  }
  render(){
    return(
      <div>
      <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Video introductorio</Modal.Title>
          </Modal.Header>
          <Modal.Body>
        <div className='videoDiv'>
          <iframe src="https://streamable.com/s/kszhc/arqqsw" frameborder="0" width="100%" height="100%" allowfullscreen className='videoStyle'>
          </iframe>
          </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>

  <div className='container2'>
    <div className='container1'>
      <Link to={routes.PRIMARIAINF}>
        <div className='col1' >
          <p> Primaria Menor
              (5-8 años)</p>
        </div>
      </Link>
      <Link to={routes.PRIMARIASUP}>
        <div className='col2' >
          <p> Primaria Mayor
              (8-12 años)</p>
        </div>
      </Link>
      </div>
      </div>
      </div>
    );
  }
}
