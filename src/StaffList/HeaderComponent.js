import React from "react";
import {Navbar, NavbarBrand, NavItem, Nav} from 'reactstrap';
import{Link,NavLink} from 'react-router-dom';



function Header (props){
    return(
    <Navbar color="dark">
        <div className="container">
          <Nav className="topnav">
            <NavLink exact to="/"><img src="assets/images/logo.png" className="image"/></NavLink>
            <NavLink to="/List">Nhân viên</NavLink>
            <NavLink to="/PB">Phòng ban</NavLink>
            <NavLink to="/BL">Bảng lương</NavLink>
          </Nav>
        </div>
      </Navbar>
    );
}

export default Header;