import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

const Authlayout: React.FC<any> = () => {
  return (
    <Container fluid className="layoutContainer">
      <Row>
        <Col className="section-left">
          <Outlet />
        </Col>
        <Col classname="section-right">
          <img src="/assets/images/bg-login.png" alt="bazar Auth" />
        </Col>
      </Row>
    </Container>
  );
};

export default Authlayout;