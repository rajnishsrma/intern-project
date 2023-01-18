import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeSvgIcon } from 'react-fontawesome-svg-icon';
import { faBell, faCoffee, faListDots, faLocation, faMessage, faPerson, faQuestion, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import "./topbar.css"

function Topbar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container fluid >
          <Navbar.Brand href="#home" className='topbar-brand'>
            <div className="topbar-logo">f1</div>
            <span className="topbar-text">studioz</span>
          </Navbar.Brand>
          
          <Nav className="ms-auto icons">
            <Nav.Link href="#home"><FontAwesomeSvgIcon icon={faListDots} style={{color: '#8894A0'}}/></Nav.Link>
            <Nav.Link href="#home"><FontAwesomeSvgIcon icon={faBell} style={{color: '#8894A0'}}/></Nav.Link>
            <Nav.Link href="#home"><FontAwesomeSvgIcon icon={faQuestionCircle} style={{color: '#8894A0'}}/></Nav.Link>
            <div className='topbar-img'><img src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' /></div>
          </Nav>
        </Container>
      </Navbar>  
    </>
  );
}

export default Topbar;