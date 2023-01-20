import { faFilter, faSearch } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Container from "react-bootstrap/esm/Container";
import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon";
import { NavLink } from "react-router-dom";
import './menutwo.css';

function MenuTwo(){
    return <Container fluid className="menu2-container">
        <div className="menu2-title">
            <NavLink to="/">Active Carts</NavLink>
            <NavLink to="/archive">Archived Carts</NavLink>
        </div>

        <div className="menu2-input">
           <div className="search-box"> <input type="search" placeholder="Search"  />< FontAwesomeSvgIcon className="menu2-search-icon" icon={faSearch}/></div>
             <div><FontAwesomeSvgIcon icon={faFilter} style={{color: "black"}} /> filter</div>
        </div>
    </Container>
}

export default MenuTwo;