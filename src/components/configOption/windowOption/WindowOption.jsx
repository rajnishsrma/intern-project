import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { FontAwesomeSvgIcon } from 'react-fontawesome-svg-icon';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import './windowoption.css';


export default function WindowOption() {
  return (
    <div className='window-option-container'>
        <Row  className='window-option-header gx-0'>
            <h3>Window Option</h3>
        </Row>

        <Row  className='window-option-row '>
            <Col md={5}>
            <label>Glass Type <span><FontAwesomeSvgIcon icon={faQuestionCircle} /></span></label>
            
            </Col>

            <Col md={6}>
                <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">solid(no windows)</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                </Form.Select>
            </Col>
            <Col md={1}></Col>
        </Row>
<div className='row-items'>
        <Row  className='window-option-row'>
            <Col md={5}>
            <label>Glass Type  <span><FontAwesomeSvgIcon icon={faQuestionCircle} /></span></label>
            
            </Col>

            <Col md={6}>
                <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">Section four</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                </Form.Select>
            </Col>
            <Col md={1}></Col>
        </Row>

        <Row  className='window-option-row'>
            <Col md={5}>
            <label>Glass Type   <span><FontAwesomeSvgIcon icon={faQuestionCircle} /></span></label>
           
            </Col>

            <Col md={6}>
                <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">arch 1 design  </option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                </Form.Select>
            </Col>
            <Col md={1}></Col>
        </Row>
        </div>
    </div>
  )
}
