import React from "react";
import { Link, Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";

function MasterLayOut({userData,logout}) {
  return (
    <div>
      <Nav userData={userData} logout={logout}/>
      <div className="container">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default MasterLayOut;
