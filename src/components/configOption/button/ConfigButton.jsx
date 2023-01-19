import { faPlus, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { FontAwesomeSvgIcon } from 'react-fontawesome-svg-icon';
import './configbutton.css';

export default function ConfigButton({billingPg, firstBtnText, secondBtnText}) {
  return (
    <div className='config-btn'>
        <div className="text">
          {
            billingPg && <><h4> 1 item</h4>
            <h3>$4035.23</h3></>
          }
        </div>

        <div className="btn">
          <button className='cart-btn' type='submit' >
            { billingPg && <span><FontAwesomeSvgIcon icon={faPlusSquare}/></span>}
            {firstBtnText}</button>

          <button className='preview-btn' type='submit' >{secondBtnText}</button>
        </div>
    </div>
  )
}
