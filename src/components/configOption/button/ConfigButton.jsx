import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { FontAwesomeSvgIcon } from 'react-fontawesome-svg-icon';
import { Link } from 'react-router-dom';
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
          {
            billingPg ? <Link to="/createorder"> <button className='cart-btn' type='submit' >
            { billingPg && <span><FontAwesomeSvgIcon icon={faPlusSquare}/></span>} 
            {firstBtnText}  
            </button>  </Link> :  <Link to="/configoption"> <button className='cart-btn' type='submit' >
            { billingPg && <span><FontAwesomeSvgIcon icon={faPlusSquare}/></span>}       

            {firstBtnText}
            </button> </Link>
          }

          {/* // <button className='cart-btn' type='submit' >
          //   { billingPg && <span><FontAwesomeSvgIcon icon={faPlusSquare}/></span>}       

          //   {firstBtnText}
          //   </button> */}

         {/* <Link  to="/">  <button className='preview-btn' type='submit' >{secondBtnText} </button></Link> */}

         {
          billingPg ? <Link  to="/configoption">  <button className='preview-btn' type='submit' >{secondBtnText} </button></Link> : <Link  to="/placeorder">  <button className='preview-btn' type='submit' >{secondBtnText} </button></Link>
         }
        </div>
    </div>
  )
}
