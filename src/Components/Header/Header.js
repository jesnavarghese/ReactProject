import React from "react";
import "./Header.css";
import Logo from "../Images/Logo.png"
import {IconeHome} from "../Icons/IconHome"
import {IconSearch} from "../Icons/IconSearch"
import {IconList} from "../Icons/IconList"
import {IconCart} from "../Icons/IconCart"

export const Header = () => {
  return (
    <header className="header">
      <div className="logo"> <img src= {Logo} /> Funiro</div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="icons">
      <IconeHome />
      <IconSearch /> 
      <IconList />   
      <IconCart />
      </div>
    </header>
  );
};


