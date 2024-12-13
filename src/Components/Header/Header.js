import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="logo">Shopcart</div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};


