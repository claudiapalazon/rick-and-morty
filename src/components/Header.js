import React from "react";
import logo from "../images/logo.png";

// paint the header with Ricky and Morty's logo
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
