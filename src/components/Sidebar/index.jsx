import React from "react";
import { Nav } from "react-bootstrap";
import "./Sidebar.css";
import { GrHomeRounded } from "react-icons/gr";
import { BsBriefcaseFill } from "react-icons/bs";

const Sidebar = (props) => {
  return (
    <Nav
      className="col-md-12 d-none d-md-block bg-light sidebar"
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home">
          <GrHomeRounded />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#" color="#FFFFF">
          <BsBriefcaseFill />
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Sidebar;
