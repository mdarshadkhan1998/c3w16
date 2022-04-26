import React, { useState } from "react";

const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState("");

  
  console.log(token)
  const handleLogin = async(email, password) => {
    //  api request to reqres.in for the token
    let response = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({

      //  email:"eve.holt@reqres.in",
      //  password:"cityslicka"

       "email":email,
       "password":password
      }),
    });
    let dat = await response.json();
    if(dat.token){
      setToken(dat);
    }    
  };
  const handleLogout = () => {
    //  set token back to " " once logged out
    setToken("");

  };
  const value = { handleLogin, token, handleLogout };
  

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };