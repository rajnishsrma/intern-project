import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import CreateOrderItem from '../../components/createOrder/CreateOrderItem';
import MenuThree from '../../components/menus/Menu3/MenuThree';
import './createorder.css';

export default function CreateOrder() {
  return (
    <Container fluid className="coContainer">
        <MenuThree />
        <CreateOrderItem />
        <CreateOrderItem />
        <CreateOrderItem />
        <CreateOrderItem />
        </Container>
  )
}
