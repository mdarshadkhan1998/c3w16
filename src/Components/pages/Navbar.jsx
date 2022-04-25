import { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";

const Navigationbar = styled.nav`
padding:10px;
display:flex;
gap:5%;
justify-content:center;
color:blue;
background-color:#fa9;
font-size:16px;
font-weight: bold;
`



export const Navbar = () => {
  const { token } = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully
  

  return (
    <>
      
        <nav>
          <Navigationbar>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/books">Books</NavLink>
          {token ? <NavLink to="/logout">LogOut</NavLink> :  <NavLink to="/login">Login</NavLink> }
          {/* keep all the NavLinks here */}
          </Navigationbar>
        </nav>   
     
    </>
  );
};