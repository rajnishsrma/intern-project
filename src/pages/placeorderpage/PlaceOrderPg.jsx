import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PlaceOrderBilling from '../../components/placeOrder/placeOrderbilling/PlaceOrderBilling';
import PoBillSummary from '../../components/placeOrder/placeOrderBillSummary/PoBillSummary';
import PlaceOrderDetails from '../../components/placeOrder/placeOrderDetails/PlaceOrderDetails';
import PoPurchaseNum from '../../components/placeOrder/placeOrderPurchasenum/PoPurchaseNum';
import PlaceOrderSummary from '../../components/placeOrder/placeOrderSummary/PlaceOrderSummary';
import ConfigButton from '../../components/configOption/button/ConfigButton'
import './placeorderpg.css';


export default function PlaceOrderPg() {
  return (
    <div className='order-pg'>
      <PlaceOrderDetails />
      <Row className='align-summary gx-3'>
        <Col md={6}>
          <PlaceOrderSummary />
          <PoPurchaseNum />

        </Col>

        <Col md={6}>
          <PoBillSummary />
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <PlaceOrderBilling />
        </Col>
      </Row>

    <Row>
      <Col md={12}>
        <ConfigButton billingPg={true} firstBtnText="Add More" secondBtnText="Place Order" />
      </Col>
    </Row>
    </div>
  )
}
