import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './popurchasenum.css';


export default function PoPurchaseNum() {
  return (
    <div className='po-summary-container'>
        <Row className="purchase-order gx-0">
      
            <Col md={12}>
            {/* <div className="purchase-num"> */}
                <label for="orderNum">purchase order number</label>
                <input type="text" id='orderNum' name='orderNum' placeholder='Enter PO Number' />

                <p>this PO will be useful to track this order items</p>
            {/* </div> */}

            </Col>

       
            
        </Row>  

       
    </div>
    
  )
}
