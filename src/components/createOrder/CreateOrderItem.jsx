import React from "react";
import { faArrowAltCircleLeft, faArrowRight,  faListDots } from "@fortawesome/free-solid-svg-icons";

import Container from "react-bootstrap/esm/Container";
import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon";
import './createorderitem.css';

function CreateOrderItem(){
    return <><div className="createOrderItems">
            <div className="coTitles">
                <h1>Configure your door from scratch</h1>
                <h3>Configure your door from scratch</h3>
            </div>
            <div><FontAwesomeSvgIcon icon={faArrowRight} /></div>
         </div>
      
         </>
}

export default CreateOrderItem;