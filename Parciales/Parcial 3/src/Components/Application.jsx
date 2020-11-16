import React, { useContext } from "react";
import { Router } from "@reach/router";

import SignIn from "./SignIn";
import SignUp from "./SignUp";
import PasswordReset from "./PasswordReset";

import ProfilePage from "./Alumno";
import { UserContext } from "../providers/UserProvider";


function Application() {
  
  const user = useContext(UserContext);
  console.log(" Usuario Application : " + user);

  return (
    user ? <ProfilePage />  
      : 
      <Router> 
          <SignIn path="/" />
          <SignUp path="signUp" />
          <PasswordReset path="passwordReset" />      
      </Router>
  );
}

export default Application;
