import React from 'react';
import styled from 'styled-components';


// Define the Navbar component
const Navbar = () => {
    return (
        <div>
            <NavbarContainer2 >
                <NavList1>
                    <NavItem>English <i class="fa-solid fa-chevron-down"></i></NavItem>
                    <NavItem>USD <i class="fa-solid fa-chevron-down"></i> </NavItem>
                </NavList1>
                <NavList1 >
                    <NavItem> <i class="fa-regular fa-heart"></i>&nbsp; Wishlist</NavItem>
                    <NavItem> <i class="fa-regular fa-user"></i>&nbsp; Sign In</NavItem>
                    <NavItem> <i class="fa-solid fa-lock"></i>&nbsp; Sign Up</NavItem>
                </NavList1>
            </NavbarContainer2>
          
            <NavbarContainer1>
                <div>
                    <Image src="https://klbtheme.com/shopwise/fashion/wp-content/uploads/2020/05/logo2.png" alt="logo" />
                </div>
                <NavList2>
                    <NavItem> <span style={{color:'red'}}>Home <i class="fa-solid fa-chevron-down"></i></span></NavItem>
                    <NavItem>Shop <i class="fa-solid fa-chevron-down"></i></NavItem>
                    <NavItem>Contact</NavItem>
                    <NavItem>Page</NavItem>
                    <NavItem>Product <i class="fa-solid fa-chevron-down"></i></NavItem>
                    <NavItem>Blog <i class="fa-solid fa-chevron-down"></i></NavItem>
                    <NavItem><i class="fa-solid fa-magnifying-glass"></i></NavItem>
                    <NavItem><i class="fa-solid fa-bag-shopping"></i></NavItem>
                </NavList2>
            </NavbarContainer1>

        </div>

    );
};

export default Navbar;
// Create styled components for the navbar elements
const NavbarContainer1 = styled.nav`
  background-color: white;
 
  display: flex;
  justify-content: space-between;
  padding: 5px 100px;
  margin:auto;
  // position:fixed;
  width:100%;
  
 

`;

const NavbarContainer2 = styled.nav`

    display: flex;
    margin: auto;
    justify-content: space-between;
    padding: 10px 100px;
    border-bottom:1px solid #EFEBEC;
}
`

const NavList1 = styled.div`
  display: flex;
  justify-content: space-between;
    width:max-content;
  gap:20px;
  
`;
const NavList2 = styled.div`

  display: flex;
  align-items: center;
  gap: 20px;

`;

const NavItem = styled.p`
  color: black;
  text-decoration: none;
  cursor: pointer;
  font-weight:500;
`;
const Image = styled.img`
width:200px
`
