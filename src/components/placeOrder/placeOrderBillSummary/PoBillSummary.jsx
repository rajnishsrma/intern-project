import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import './pobillsummary.css';


export default function PoBillSummary() {
  return (
    <div className='bill-summary-container'>


        <Row className="bill-header">
        <h3>Bill Summary</h3>
        </Row>

        <Row className="bill-details gx-0" >
            <Col md={6}>
            <div>sub total</div>
            <div>energy surcharge</div>
            <div>sales tax</div>
            </Col>

            <Col md={6}>
            <div>$4500</div>
            <div>$70.18</div>  
            <div>$490.93</div>
            </Col>
        </Row>
        
        <Row className="total gx-0">
            <Col md={6}>
            <div>Total</div>
            </Col>

            <Col md={6}>
            <div>$1220</div>
            </Col>
        </Row>

        <hr />

        <Row className='tax-desc gx-0'>
            <Col md={12}>
            <Form.Check className='op-check'
                type="checkbox"
                label="Apply tax"
                id="add-opt-check"
                />
            </Col>
            <Col md={12}>
            <p>(The 1% iStore discount is calculated into the total price for all doors and door parts. Please refer to the quote or order acknowledgment for details.)</p>
            </Col>
        </Row>
    </div>
  )
}
