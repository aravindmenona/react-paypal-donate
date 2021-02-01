import React, { Component } from "react";
import { Container, CardDeck, Card, Row, Button } from "react-bootstrap";
import "./App.css";
export class Tiles extends Component {
  render() {
    return (
      <div className="grey">
        <Container>
          <Row className="mt-5"></Row>
          <CardDeck className="grey card-deck">
            <Card className="borderless">
              <Card.Body className="grey card-dimension">
                <Card.Title className="sub-heading">
                 
                </Card.Title>
                <Card.Text>
                  
       
                </Card.Text>   <Button href="/" className="align-bottom">
                    Know more
                  </Button>{" "}

              </Card.Body>
              {/* <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer> */}

              <Card.Img
                variant="top"
                className="tile-image paddingtop50 grey"
                src={""}
              />
            </Card>
            <Card className="borderless">
              <Card.Body className="grey card-dimension">
                <Card.Title className="sub-heading">
               
                </Card.Title>
                <Card.Text>
                  
      
                </Card.Text>            <Button href="/" className="align-bottom">
                    Know more
                  </Button>{" "}
                  
              </Card.Body>
              {/* <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer> */}
              <Card.Img
                variant="top"
                className="tile-image paddingtop50 grey"
                src={""}
              />
            </Card>
            <Card className="borderless">
              <Card.Body className="grey card-dimension">
                <Card.Title className="sub-heading"></Card.Title>
                <Card.Text>
                 

                </Card.Text>                <Button href="/" className="align-bottom">
                    Know more
                  </Button>{" "}
           
              </Card.Body>
              {/* <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer> */}
              <Card.Img
                variant="top"
                className=""
                src={""}
              />
            </Card>
          </CardDeck>
        </Container>
      </div>
    );
  }
}

export default Tiles;
