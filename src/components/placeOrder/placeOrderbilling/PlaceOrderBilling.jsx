import React from 'react';
import './placeorderbilling.css';


export default function PlaceOrderBilling() {
  return (
    <div className="bill-ship-container">
         <div className='po-billing'>
            <div className="billing-text">
              <h4>Billing to</h4>
              <h2>bement jared</h2>
              <h3>144 curt shore, 50, madison avenue hixson -42504</h3>
              <h3>contact: (123) 457 890</h3>
            </div>

            <div className="billing-change">
                <a href='/LayoutOption' >CHANGE</a>
            </div>
         </div>

         <div className="devider"></div>

         <div className='po-billing'>
            <div className="billing-text">
              <h4>Billing to</h4>
              <h2>bement jared</h2>
              <h3>144 curt shore, 50, madison avenue hixson -42504</h3>
              <h3>contact: (123) 457 890</h3>
            </div>

            <div className="billing-change">
                <a href='/LayoutOption' >CHANGE</a>
            </div>
         </div>
    </div>
   
  )
}
