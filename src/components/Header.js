import React from "react";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <img
      className="logo"
      src={logo}
      alt="Rick and Morty"
      title="Rick and Morty"
    />
  );
};

export default Header;
