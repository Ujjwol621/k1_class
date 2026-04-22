import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Admin.css";

function Admin() {
  return (
    <main className="admin">
      <div className="admin-nav">
        <NavLink to="productManagement">Product Management</NavLink>
        <NavLink to="userManagement">User Management</NavLink>
        <NavLink to="orderManagement">Order Management</NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </main>
  );
}

export default Admin;
