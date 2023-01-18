import React from "react";
import Container from "react-bootstrap/esm/Container";
import './menuone.css'

function MenuOne(){
    return <Container fluid className="menu1-container">
       <a className="menu1-cart active">cart</a>
       <a className="menu1-favorites">favorites</a>
    </Container>
}

export default MenuOne;