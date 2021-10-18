import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = (props) => {
  const { name, pic, education, institute, title } = props.user;
  return (
    <div className="">
      <Card style={{ height: "100%" }}>
        <Card.Img variant="top" src={pic} />
        <Card.Body className="text-start">
          <Card.Title>
            {name} <small className="text-muted">{title}</small>
          </Card.Title>
          <Card.Text>
            <p>
              {education.slice(0, 100)}{" "}
              <span>
                {" "}
                <Link to="/home_page">
                  ...Reade More <i className="fas fa-long-arrow-alt-right"></i>
                </Link>
              </span>
            </p>
            <p>
              {institute.slice(0, 200)}
              <span>
                {" "}
                <Link to="/home_page">
                  ...Read More <i className="fas fa-long-arrow-alt-right"></i>
                </Link>
              </span>
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
