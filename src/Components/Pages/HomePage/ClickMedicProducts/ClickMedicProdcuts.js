import React from "react";
import { Card } from "react-bootstrap";

const ClickMedicProdcuts = () => {
  return (
    <>
      <div className="text-start">
        {" "}
        <h2 className="mb-1 fw-bold">
          Product by <span className="fw-bold text-primary">Click Medic</span>
        </h2>
        <div
          className="bg-primary"
          style={{
            width: "180px",
            height: "5px",
            marginBottom: "25px",
          }}
        ></div>
      </div>
      <div className="row text-start">
        <div className="col-md-4 mb-3 alert alert-primary">
          <img
            className="img-fluid mb-2 shadow p-2  rounded"
            width="90px"
            src="https://i.ibb.co/X3b6tj2/Click-medic.png"
            alt=""
          />
          <p className="text-start afterbannePText">
            Click Medic provides financial protection for unforeseen life events
            & 24x7 access to quality healthcare from home. We provide coverages
            for you & your family, which can go up to 8 members, You can choose
            from a range of packages starting from 145 Tk per month with varied
            levels of cover. Our subscribers can also avail discounts from our
            150+ partner hospitals & diagnostic centers around the country.
          </p>
        </div>
        <div className="col-md-4 mb-3">
          <Card className="h-100 alert alert-danger" style={{ width: "100%" }}>
            <Card.Img
              className="shadow p-2 rounded"
              variant="right"
              style={{
                width: "70px",
                textAlign: "right",
              }}
              src="https://milvikbd.com/_next/image?url=%2Fumbrella.svg&w=48&q=75"
            />
            <Card.Body>
              <Card.Title className="fw-bold">Click Medic Life</Card.Title>
              <Card.Text className="text-start">
                Protect your loved ones from financial crisis in case of death
                the earning member of the family. Also get compensated for
                partial or total physical disability.
              </Card.Text>
              <p className="btn btn-outline-dark">Learn More</p>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 mb-3">
          <Card className="h-100 alert alert-primary" style={{ width: "100%" }}>
            <Card.Img
              className="shadow p-2 rounded"
              variant="top"
              style={{
                width: "70px",
              }}
              src="https://milvikbd.com/_next/image?url=%2Fheart.svg&w=48&q=75"
            />
            <Card.Body>
              <Card.Title className="fw-bold">Click Medic Health</Card.Title>
              <Card.Text className="text-start">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <p className="btn btn-outline-primary">Learn More</p>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ClickMedicProdcuts;
