import React, { createContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export let AuthContext = createContext("");

function AuthContextProvider(props) {
  let [userData, setuserData] = useState(null);

  let saveUserData = () => {
    return setuserData(JSON.parse(localStorage.getItem("currentUser")));
  };

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      saveUserData();
    }
  }, []);

  let logout = () => {
    localStorage.removeItem("currentUser");
    setuserData(null);
    return <Navigate to="/login" />;
  };

  return (
    <AuthContext.Provider value={{ userData, logout, saveUserData }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
