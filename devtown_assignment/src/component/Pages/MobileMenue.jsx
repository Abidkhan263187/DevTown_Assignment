import { useState } from "react";
import styled, { css } from "styled-components";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MobileNav>
      <Hamburger onClick={toggleMenu}>
        <i className={`fa-solid ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </Hamburger>
      {isOpen && (
        <MenuOptions>
          <MenuItem>Home</MenuItem>
          <MenuItem>Shop</MenuItem>
          <MenuItem>Cart</MenuItem>
          <MenuItem>Product</MenuItem>
          <MenuItem>Blog</MenuItem>

        </MenuOptions>
      )}
    </MobileNav>
  );
};



const MobileNav = styled.nav`
  background-color:#ff324d;
  display:none;
   
    @media (max-width: 767px) {
      padding: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px;
      border-bottom: 1px solid #EFEBEC;
    }
    @media (min-width: 768px) and (max-width: 1023px) {
      padding: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px;
      border-bottom: 1px solid #EFEBEC;

    }
   
  `;

const Hamburger = styled.div`
    display: none;
  
    @media (max-width: 767px) {
      display: block;
      cursor: pointer;
    }
    @media (min-width:768px) and  (max-width:1023px){
        display:block
      }
  `;

const MenuOptions = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
   
  `;

const MenuItem = styled.p`
    color: black;
    text-decoration: none;
    cursor: pointer;
    font-weight: 500;
    border-bottom:1px solid;
    padding:5px;
    width:100%
  `;