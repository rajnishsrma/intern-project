import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Container from "react-bootstrap/esm/Container";
import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon";
import './carttable.css';
import Table from 'react-bootstrap/Table';
import {data} from "../../CONST/CartData"
import MenuTwo from "../menus/Menu2/MenuTwo";
import {Link } from "react-router-dom";
import { useState } from "react";


function CartTable() {

  const [product, setProduct] = useState(data)




    return <Container fluid className="carttable-container">
         <MenuTwo />
         <hr />
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>PRODUCT INFORMATION</th>
          <th>CART NAME</th>
          <th>SHHIPING POINT</th>
          <th>CREATED BY</th>
          <th>EXPIRY</th>
        </tr>
      </thead>
      <tbody>
       {
        data.map((item)=>{
            return  <tr>
            <td><span>{item.productInfo}</span></td>
            <td>{item.cartName}</td>
            <td>{item.shhipingPoint}</td>
            <td>{item.createdBy}</td>
            {item.expiry < 10 ?  <td style={{color:"#e67e22"}}> expire in {item.expiry} days</td> :  <td>expire in {item.expiry} days <span className="carttable-new">new</span></td> }
            
          </tr>
        })
       }
      </tbody>

    </Table>
      <Link to="/createorder"> <div className="insertData"> <strong>+</strong> </div> </Link>
    </Container>
}

export default CartTable;