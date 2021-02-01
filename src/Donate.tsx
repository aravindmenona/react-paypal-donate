import React, { Component } from "react";
import { Row, Col ,Container} from "react-bootstrap";
import "./App.css";
import PayPalBtn from "./PayPalButton";
export class Donate extends Component {
  render() {
    return (
      <div>
         <Container>
        <Row className="mt-5 heading">
          <Col xs={12} lg={12}>
            <h1>Donate</h1>
          </Col>
        </Row>
        <PayPalBtn></PayPalBtn>
        </Container>
      </div>
    );
  }
}

export default Donate;
