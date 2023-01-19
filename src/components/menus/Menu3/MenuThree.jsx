import React from 'react';
import './menuthree.css';
import { faArrowAltCircleLeft, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon";


export default function () {
  return (
    <div className="createorder-header">
            <a href="#">
                <span><FontAwesomeSvgIcon icon={faArrowAltCircleLeft} /></span>
                <span>Create  a new order</span>
                <span>2 of 3</span>
            </a>
           <a> <FontAwesomeSvgIcon icon={faEllipsisVertical} /></a>
    </div>

  )
}
