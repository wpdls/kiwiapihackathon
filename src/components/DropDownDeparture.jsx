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
  const [dropdownTitle, setDropdownTitle] = useState('Departure');

  const toggle = () => setDropdownOpen(prevState => !prevState);

  const handleItemClick = (e) => {
    setDropdownTitle(e.target.dataset.title)
    
  }

  return (
    <div>
      <Col>
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret>{dropdownTitle}</DropdownToggle>
          <DropdownMenu>
          <DropdownItem><p onClick={handleItemClick} id="PRG" data-title="Prague">Prague</p></DropdownItem>
          <DropdownItem><p onClick={handleItemClick} id="TXL" data-title="Berlin">Berlin</p></DropdownItem>
          <DropdownItem><p onClick={handleItemClick} id="WAW" data-title="Warsaw">Warsaw</p></DropdownItem>
          <DropdownItem><p onClick={handleItemClick} id="PED" data-title="Pardubice">Pardubice</p></DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Col>
    </div>
  );
};

export default DropDown;
