import React, { useEffect, useState } from "react";
import { ProgressBar, Row } from "react-bootstrap";
import Service from "../Service/Service";

const Services = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("./fackdb.json")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      {users.length === 0 ? (
        <ProgressBar variant="danger" animated now={85} />
      ) : (
        <Row xs={1} lg={4} md={2} className="g-4">
          {users.map((user) => (
            <Service user={user}></Service>
          ))}
        </Row>
      )}
    </div>
  );
};

export default Services;
