import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './placeordersummary.css';


export default function PlaceOrderSummary() {
  return (
    <div className='po-summary-container'>
        <Row className="delivery-date gx-0">
            <Col md={12}>
            <label for="date">Change delivery date</label>
            <input type="date" id='date' name='date' />

            <p>standered delivery, tue may 28- 2019</p>
            </Col>

            
        </Row>  

       
    </div>
    
  )
}
