import React from "react";
import { Card, Col } from "react-bootstrap";

const Service = (props) => {
  return (
    <div className="container">
      <Col>
        <Card className="card h-100">
          <Card.Img className="card-img" variant="top" src="" />
          <Card.Body>
            <Card.Title>
              <h2>{}</h2>
              <small className="text-muted">{}</small>
            </Card.Title>
            <Card.Text>
              <ul>
                <li>{}</li>
                <li>{}</li>
                <li>{}</li>
                <li>{}</li>
                <li>{}</li>
              </ul>
              <div className="d-flex justify-content-center my-2">
                <strong className="alert alert-danger p-2 m-2">
                  {" "}
                  {} {}{" "}
                </strong>
                <strong className="alert alert-success  p-2 m-2 ">
                  {" "}
                  {} {}{" "}
                </strong>
                <strong className="alert alert-danger  p-2 m-2 ">
                  {} {}{" "}
                </strong>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Service;
