import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to='/home' activestyle="true">
            Home
          </NavLink>
          <NavLink to='/unternehmen' activestyle="true">
            Unternehmen
          </NavLink>
          <NavLink to='/produkte' activestyle="true">
            Produkte
          </NavLink>
          <NavLink to='/service' activestyle="true">
            Service
          </NavLink>
          <NavLink to='/kontakt' activestyle="true">
            Kontakt
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;