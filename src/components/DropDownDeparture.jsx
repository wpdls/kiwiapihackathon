import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row,
  Container,
  Col
} from "reactstrap";

const DropDown = props => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  const handleItemClick = (e) => {
    console.log('target', e.target.id)
  }
  // console.log('props', props.cityFrom)
  return (
    <div>
      <Col>
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret>Departure</DropdownToggle>
          <DropdownMenu>
          <DropdownItem><p onClick={handleItemClick} id="PRG">Prague</p></DropdownItem>
          <DropdownItem><p onClick={handleItemClick} id="TXL">Berlin</p></DropdownItem>
          <DropdownItem><p onClick={handleItemClick} id="WAW">Warsaw</p></DropdownItem>
          <DropdownItem><p onClick={handleItemClick} id="PED">Pardubice</p></DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Col>
    </div>
  );
};

export default DropDown;
