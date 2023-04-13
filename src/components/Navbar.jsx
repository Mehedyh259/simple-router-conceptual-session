import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className=" normal-case text-xl">Khabar Bari</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/products"}>Products</Link>
          </li>
          <li>
            <Link to={"/orders"}>Orders</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          
          
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
