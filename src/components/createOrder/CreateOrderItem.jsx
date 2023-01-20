import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon";
import './createorderitem.css';
import { Link } from "react-router-dom";

function CreateOrderItem(){
    return <div className="createOrderItems">
                <div className="coTitles">
                    <h1>Configure your door from scratch</h1>
                    <h3>Configure your door from scratch</h3>
                </div>
             <Link to="/Configorder"><div><FontAwesomeSvgIcon icon={faArrowRight} /></div></Link>
            </div>
      
         
}

export default CreateOrderItem;