import { useState } from "react";
import styled,{css} from "styled-components";

export  const MobileMenu = () => {
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
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    border-bottom: 1px solid #EFEBEC;
  
    @media (max-width: 767px) {
      padding: 10px;
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
    gap: 20px;
  `;
  
  const MenuItem = styled.p`
    color: black;
    text-decoration: none;
    cursor: pointer;
    font-weight: 500;
  `;