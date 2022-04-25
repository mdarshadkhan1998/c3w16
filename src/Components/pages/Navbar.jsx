import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
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
       <Navigationbar>
             {/* keep all the NavLinks here */}
        <Link  className="link" to="/" >Home</Link>
        <Link  className="link" to="/about" >About</Link>
        <Link  className="link" to="/books" >Books</Link>
        <Link  className="link" to="/login" >Login</Link>
        <Link  className="link" to="/logout" >Logout</Link>
       </Navigationbar>
    
     
    </>
  );
};