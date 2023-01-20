import { faCopy, faEdit, faHeart, faMinus, faPlus, faRemove, faUser } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useState } from 'react';
import { FontAwesomeSvgIcon } from 'react-fontawesome-svg-icon';
import { Link } from 'react-router-dom';
import { data } from '../../../CONST/CartData';
import './placeorderdetails.css';


export default function PlaceOrderDetails() {

    const [counter, setCounter] = useState(1)
    const [delet, setDelet] = useState(data)

    function increment(){
       setCounter(counter +1)
       
    }

    function decrement(){
        setCounter(counter -1)
    }

    const deletHandler = (x)=> {
        console.log( "daf", x);
        let filtProduct = data.filter((item, ind)=>{
            if(x != item.id){
                return true
            }else{
                return false
            }
            
        })

        setDelet(filtProduct);
    }

  return (
    <div className='placeOrder-container'>

       {
        delet.map((item, i)=>{
            return (
               
            <div className="po-text" key={i}>
                
           <h1>{item.productInfo}</h1>

           <h3>Job Name: Front door with glass <span>Change</span></h3>
            <h3>Product #CWD •  Garage Door</h3>
            <h3>Availability: IN STOCK <h2>IN STOCK</h2> (Available for Pickup)</h3>
            <span onClick = {() => {deletHandler(item.id)} }><FontAwesomeSvgIcon icon={faRemove} /></span>
        </div>
        )
    })
       }
        


        <div className="counter-prize">
            <div className='pod-counter'>

                <button className='dec' onClick={decrement}><FontAwesomeSvgIcon icon={faMinus} /></button>
                <span className='num'>{counter}</span>
                <button className='inc' onClick={increment}><FontAwesomeSvgIcon icon={faPlus} /></button>
                
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
              <Link to="/configoption"><h2>EDIT</h2></Link>  
            </div>
            <div className="favorites">
                <FontAwesomeSvgIcon icon={faCopy} />
                <h2>COPY</h2>
            </div>
            <div className="favorites">
                <FontAwesomeSvgIcon icon={faRemove} />
               <Link to="/"><h2  >DELETE</h2></Link> 
            </div>
        </div>
    </div>
  )
}
