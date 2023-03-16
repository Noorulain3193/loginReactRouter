import React from "react";
import { Outlet, Link } from "react-router-dom";
import './Root.css';


export function Root() {
  return (
    <><div className="navbar">
      <Link to="/" className="name"> Learn 2 Code</Link>
      <div className="navComp">
        <Link to="/" className="navItem"> Catalog</Link>

        <Link to="/" className="navItem"> Resources</Link>

        <Link to="/" className="navItem"> Community</Link>
      </div>

      <Link to="/login" > <button className="logIn">Log In</button></Link>
    </div>
      <Outlet />
    </>
  );
};