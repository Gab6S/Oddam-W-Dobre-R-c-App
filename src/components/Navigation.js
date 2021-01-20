import React from "react";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import NavigationDown from "./NavigationDown";
import NavigationUp from "./NavigationUp";

const Navigation = () => {
  return (
    <header>
      <div className="main-bg"></div>
      <nav className="menu">
        <NavigationUp />
        <NavigationDown />
      </nav>
    </header>
  );
};

export default Navigation;
