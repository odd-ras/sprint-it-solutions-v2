import React, { useState } from "react";

//css
import "./CardComponent.css";

//data
import data from "../../data/data.json";

//bootstrap
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function CardComponent() {
  const [solutions, setSolutions] = useState(data.solutions);

  return (
    <>
      {solutions.map((solution) => (
        <Col key={solution.id} className="py-4">
          <Card style={{ width: "18rem" }} className="">
            <Card.Body>
              <Card.Title>{solution.title}</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              {solution.categories.map((category, index) => (
                <ListGroup.Item key={index}>{category}</ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </Col>
      ))}
    </>
  );
}

export default CardComponent;
