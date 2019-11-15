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
  // console.log('props', props.cityFrom)

  const handleItemClick = (e) => {
    console.log('target', e.target.id)
  }


  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle caret>Arrival</DropdownToggle>
              <DropdownMenu>
                <DropdownItem><p onClick={handleItemClick} id="VLC">Valencia</p></DropdownItem>
                <DropdownItem><p onClick={handleItemClick} id="BCN">Barcelona</p></DropdownItem>
                <DropdownItem><p onClick={handleItemClick} id="MAD">Madrid</p></DropdownItem>
                <DropdownItem><p onClick={handleItemClick} id="MXP">Milano</p></DropdownItem>
                <DropdownItem><p onClick={handleItemClick} id="ATH">Athens</p></DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DropDown;
