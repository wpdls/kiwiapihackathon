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
  const [dropdownTitle, setDropdownTitle] = useState('Arrival');

  const toggle = () => setDropdownOpen(prevState => !prevState);
  // console.log('props', props.cityFrom)

  const handleItemClick = (e) => {
    setDropdownTitle(e.target.dataset.title)
  }


  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle caret>{dropdownTitle}</DropdownToggle>
              <DropdownMenu>
                <DropdownItem><p onClick={handleItemClick} id="VLC" data-title="Valencia">Valencia</p></DropdownItem>
                <DropdownItem><p onClick={handleItemClick} id="BCN" data-title="Barcelona">Barcelona</p></DropdownItem>
                <DropdownItem><p onClick={handleItemClick} id="MAD" data-title="Madrid">Madrid</p></DropdownItem>
                <DropdownItem><p onClick={handleItemClick} id="MXP" data-title="Milano">Milano</p></DropdownItem>
                <DropdownItem><p onClick={handleItemClick} id="ATH" data-title="Athens">Athens</p></DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DropDown;
