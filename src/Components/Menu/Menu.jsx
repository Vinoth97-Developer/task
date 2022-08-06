import React from "react";

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import "./Menu.css";
function Menu() {
  return (
    <div className="menu">
    <DropdownButton id="dropdown-basic-button"  title="Menu">
      <Dropdown.Item href="#">Home</Dropdown.Item>
      <Dropdown.Item href="#">Back</Dropdown.Item>
      <Dropdown.Item href="/">Logout</Dropdown.Item>
    </DropdownButton>
    </div>
  );
}

export default Menu;