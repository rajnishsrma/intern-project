import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeSvgIcon } from 'react-fontawesome-svg-icon';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import './configorder.css';
import { Link } from 'react-router-dom';



export default function ConfigOrder() {
  return (
    <div className='config-main'>

        <Form className='config-order-form'>
            <div className="form-items">
      <Form.Group className="mb-3 config-order-select" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Select aria-label="Default select example">
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        </Form.Select>        
      </Form.Group>

      <Form.Group className="mb-3 config-order-select" controlId="formBasicEmail">

    <Form.Label>Email address <span><FontAwesomeSvgIcon icon={faQuestionCircle} /></span></Form.Label>
        <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </Form.Select>

      </Form.Group>
      <Form.Group className="mb-3 config-order-select" controlId="formBasicEmail">
        <Form.Label>Email address <span><FontAwesomeSvgIcon icon={faQuestionCircle} /></span></Form.Label>
        <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>        
      </Form.Group>
      </div>
      
     <div className="form-btn">
      <Link to="/configoption">
          <Button  type="submit">
            CONFIGURE
          </Button>
      </Link>
     </div>
      
    </Form>

    </div>
  )
}
