import { faCopy, faEdit, faHeart, faMinus, faPlus, faRemove, faUser } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { FontAwesomeSvgIcon } from 'react-fontawesome-svg-icon';
import './placeorderdetails.css';


export default function PlaceOrderDetails() {
  return (
    <div className='placeOrder-container'>
        <div className="po-text">
           <h1>10' 0'' X 10' 0.0'' CAN211 CC W1 COMPLETE DOOR INTELLICORE OBSCURE, 5TH GENERATION FINISH WALDER DOOR</h1>
           <h3>Job Name: Front door with glass <span>Change</span></h3>
            <h3>Product #CWD •  Garage Door</h3>
            <h3>Availability: IN STOCK <h2>IN STOCK</h2> (Available for Pickup)</h3>
        </div>


        <div className="counter-prize">
            <div className='pod-counter'>

                <button className='dec'><FontAwesomeSvgIcon icon={faMinus} /></button>
                <span className='num'>1</span>
                <button className='inc'><FontAwesomeSvgIcon icon={faPlus} /></button>
                
            </div>
            <div className="company-name">
                <h2>Standard Multiplier: .432 Secondary Multipliers Applied</h2>
                <span><FontAwesomeSvgIcon icon={faUser} /> Apply <strong>MPQ</strong></span>
            </div>
            <div className="prize">
                <h3>net prize:</h3>
                <span>$4500.00</span>
                <h3>unit prize $4800</h3>
                <h4>view prize details</h4>
            </div>
        </div>

        <div className="edits">
            <div className="favorites">
                <FontAwesomeSvgIcon icon={faHeart} />
                <h2>FAVORITES</h2>
            </div>
            <div className="favorites">
                <FontAwesomeSvgIcon icon={faEdit} />
                <h2>EDIT</h2>
            </div>
            <div className="favorites">
                <FontAwesomeSvgIcon icon={faCopy} />
                <h2>COPY</h2>
            </div>
            <div className="favorites">
                <FontAwesomeSvgIcon icon={faRemove} />
                <h2>DELETE</h2>
            </div>
        </div>
    </div>
  )
}
