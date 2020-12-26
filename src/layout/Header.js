import React from "react";
import { Navbar, NavbarBrand, NavbarText } from "reactstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar color="info" light>
      {/* //can also use tag={link} to="/" inside the NAvbrand tag as it is reactsrap */}
      <NavbarBrand className="text-white">
        <Link to="/"> COntact App</Link>
      </NavbarBrand>
      <NavbarText className="text-white float-right">
        A simple Contact app
      </NavbarText>
    </Navbar>
  );
};
export default Header;
