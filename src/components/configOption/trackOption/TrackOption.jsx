import React from 'react';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

import { Col, Form, Row } from 'react-bootstrap'
import { FontAwesomeSvgIcon } from 'react-fontawesome-svg-icon'
import './trackoption.css'
export default function TrackOption() {
  return (
    <div className='track-option-container'>
        <Row  className='track-option-header gx-0'>
            <h3>Track Option</h3>
        </Row>

        <Row  className='track-option-row '>
            <Col md={5}>
            <label>spring <span><FontAwesomeSvgIcon icon={faQuestionCircle} /></span></label>
            
            </Col>

            <Col md={6}>
                <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">Galvanized torsion</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                </Form.Select>
            </Col>
            <Col md={1}></Col>
        </Row>

    <div className='row-items'>
        <Row  className='track-option-row'>
            <Col md={5}>
            <label>Track size  <span><FontAwesomeSvgIcon icon={faQuestionCircle} /></span></label>
            
            </Col>

            <Col md={6}>
                <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">2" flate</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                </Form.Select>
            </Col>
            <Col md={1}></Col>
        </Row>

        <Row  className='track-option-row'>
            <Col md={5}>
            <label>Track mount   <span><FontAwesomeSvgIcon icon={faQuestionCircle} /></span></label>
        
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
        <Row  className='track-option-row'>
            <Col md={5}>
            <label>Track lift   <span><FontAwesomeSvgIcon icon={faQuestionCircle} /></span></label>
        
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
        <Row  className='track-option-row'>
            <Col md={5}>
            <label>Track radius  <span><FontAwesomeSvgIcon icon={faQuestionCircle} /></span></label>
        
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
