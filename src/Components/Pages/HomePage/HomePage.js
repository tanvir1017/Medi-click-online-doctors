import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card } from "react-bootstrap";
import "../Footer/Footer.css";
import Services from "../Services/Services";
import "./Home.css";

const HomePage = () => {
  return (
    <div>
      <div className="bannerBg">
        <div className="row">
          <div
            className="col-md-6 col-lg-6 col-12"
            style={{ textAlign: "left" }}
          >
            <p className="headingTag fw-bold">
              Protecting the future of every family
            </p>
            <p
              className="text-white"
              style={{ textAlign: "left", marginTop: "-10px" }}
            >
              Click Medic provides simple, affordable health and insurance
              services
            </p>
            <button className="btn btn-outline-dark text-white mb-3">
              Learn More
              <i className="ms-2 fas fa-long-arrow-alt-right"></i>
            </button>
          </div>
          <div className="col-md-2 col-lg-2"></div>
          <div className="col-md-4 col-lg-4 col-sm-8">
            <img
              className="img-fluid"
              src="https://milvikbd.com/_next/image?url=%2FHome-Page-Banner.png&w=384&q=75"
              alt=""
            />
          </div>
        </div>
        <div className="row">
          <div className="mb-0 col-md-6 col-sm-12 col-lg-12">
            <span className="fw-bold fs-5 text-white me-3">
              Underwritten By
            </span>
            <img
              width="20%"
              className="img-fluid bg-white px-2 rounded"
              src="https://milvikbd.com/_next/image?url=%2FUnderwriter-logo.png&w=384&q=75"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="afterbanner">
        <div className="row text-start p-5">
          <div className="col-md-5  col-lg-5 col-sm-12 ">
            <h2 className="fw-bold primarycolor">
              We believe that every family <br />
              should have access <br />
              to quality health care and financial protection when
              <br />
              they need it
            </h2>
          </div>
          <div className="col-md-7 col-lg-7  col-sm-12 text-dark fs-6">
            <p className="afterbannePText">
              We are a leading global mobile-enabled health and insurance
              service provider. We offer affordable, all-in-one, family health
              services, covering insurance, health screening and tele-medicine.
              For the last 10 years, we have been serving millions of customers
              in Asia & Africa leveraging mobile technology to deliver easy and
              cost-effective digital health and insurance services through
              frictionless mobile payments.
            </p>
            <br />
            <br />
            <div style={{ marginTop: "-18px" }}>
              <button className="btn-warning btn me-2 fw-bold text-dark">
                Know More
              </button>
              <button className="btn-danger btn fw-bold">Get in Touch</button>
            </div>
          </div>
        </div>
      </div>

      <div className="productCM">
        <div className="container p-5">
          <div className="text-start">
            {" "}
            <h2 className="mb-1 fw-bold">
              Product by{" "}
              <span className="fw-bold text-primary">Click Medic</span>
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
                Click Medic provides financial protection for unforeseen life
                events & 24x7 access to quality healthcare from home. We provide
                coverages for you & your family, which can go up to 8 members,
                You can choose from a range of packages starting from 145 Tk per
                month with varied levels of cover. Our subscribers can also
                avail discounts from our 150+ partner hospitals & diagnostic
                centers around the country.
              </p>
            </div>
            <div className="col-md-4 mb-3">
              <Card
                className="h-100 alert alert-danger"
                style={{ width: "100%" }}
              >
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
                    Protect your loved ones from financial crisis in case of
                    death the earning member of the family. Also get compensated
                    for partial or total physical disability.
                  </Card.Text>
                  <Button variant="primary" className="btn btn-outline-dark">
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4 mb-3">
              <Card
                className="h-100 alert alert-primary"
                style={{ width: "100%" }}
              >
                <Card.Img
                  className="shadow p-2 rounded"
                  variant="top"
                  style={{
                    width: "70px",
                  }}
                  src="https://milvikbd.com/_next/image?url=%2Fheart.svg&w=48&q=75"
                />
                <Card.Body>
                  <Card.Title className="fw-bold">
                    Click Medic Health
                  </Card.Title>
                  <Card.Text className="text-start">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary" className="btn btn-outline-primary">
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div className="afterbanner py-4">
        <Services></Services>
      </div>
      <div className="my-5 container">
        <div className="row py-5 alert alert-success shadow-lg ">
          <div className="col-md-5 col-lg-5 col-12">
            <img
              src="https://milvikbd.com/_next/image?url=%2FCovid-Care-Banner.png&w=256&q=75"
              alt=""
            />
          </div>
          <div className="col-md-7 col-lg-7 col-12 text-start">
            <h1>
              Covid-19 Care By <span className="fw-bold">Click Medic</span>
            </h1>
            <p>
              All of our products cover covid. Our CovidCare package also
              provides you or your family with dedicated support from MILVIK’s
              specialist doctors every two days.
            </p>
            <button className="btn btn-outline-success shadow fw-bold">
              View details <i className="ms-2 fas fa-long-arrow-alt-right"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="my-5 container">
        <div className="row">
          <div className="col-md-4 col-sm-12 col-lg-4">
            <h1 className="fw-bold text-start mt-5 mb-3">
              Why we are your <span className="primarycolor ">best choice</span>
            </h1>
            <p className="text-start mb-5" style={{ lineHeight: "30px" }}>
              Over the last 9 years, we have served more than 4 million
              customers in Bangladesh, providing access to primary healthcare
              and risk protection in their times of need.
            </p>
            <div className="row mt-3">
              <div className="col-3" style={{ marginRight: "-26px" }}>
                <img
                  src="https://milvikbd.com/_next/image?url=%2FBlue.svg&w=1920&q=75"
                  alt=""
                />
              </div>
              <div className="col-9 text-start">
                <h5 className="fw-bold">Affordable plans</h5>
                <p>Starting from just 145 Tk monthly</p>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-3" style={{ marginRight: "-26px" }}>
                <img
                  src="https://milvikbd.com/_next/image?url=%2FGreen.svg&w=1920&q=75"
                  alt=""
                />
              </div>
              <div className="col-9 text-start">
                <h5 className="fw-bold">Limited waiting</h5>
                <p>Maximum protection on what you are paying for</p>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-3" style={{ marginRight: "-26px" }}>
                <img
                  src="https://milvikbd.com/_next/image?url=%2FRed.svg&w=1920&q=75"
                  alt=""
                />
              </div>
              <div className="col-9 text-start">
                <h5 className="fw-bold">Simple & easy</h5>
                <p> Digital registration & claims payment.</p>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-3" style={{ marginRight: "-26px" }}>
                <img
                  src="https://milvikbd.com/_next/image?url=%2FYellow.svg&w=1920&q=75"
                  alt=""
                />
              </div>
              <div className="col-9 text-start">
                <h5 className="fw-bold">Paperless & no medical Hassle-free </h5>
                <p>registration without any paperwork</p>
              </div>
            </div>
          </div>
          <div className="col-md-8 col-sm-12 col-lg-8">
            <div className="row">
              <div>
                <h1 className="fw-bold text-start mt-5 mb-3">
                  <span className="primarycolor ">
                    What users say about their experience
                  </span>
                </h1>
                <p className="text-start mb-5" style={{ lineHeight: "30px" }}>
                  Trust being the biggest foundation of our service, we try to
                  ensure users have a positive experience with all of our
                  service dimensions.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-lg-4 col-sm-12 mb-2">
                <div className="card h-100 alert alert-success">
                  <div className="card-body">
                    <img
                      className="rounded-circle"
                      src="https://milvikbd.com/_next/image?url=%2FCustomer-1.png&w=64&q=75"
                      alt=""
                    />
                    <div className="card-title fw-bold mt-4">Ishak Hossain</div>
                    <p className="mt-2">
                      The doctor's treatment was excellent. They gave me enough
                      time and helped me recover from home.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-4 col-sm-12 mb-2">
                <div className="card h-100 alert alert-success">
                  <div className="card-body">
                    <img
                      className="rounded-circle"
                      src="https://milvikbd.com/_next/image?url=%2FCustomer-2.png&w=64&q=75"
                      alt=""
                    />
                    <div className="card-title fw-bold mt-4">
                      Abdullah Al Mamun
                    </div>
                    <p className="mt-2">
                      Getting Milvik Health was one of the best decisions I
                      took. Milvik doctors helped me during a lot of emergency
                      health situations. I also got super fast claims money from
                      Milvik when I was admitted to the hospital.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-4 col-sm-12 mb-2">
                <div className="card h-100 alert alert-success">
                  <div className="card-body">
                    <img
                      className="rounded-circle"
                      src="https://milvikbd.com/_next/image?url=%2FCustomer-3.png&w=64&q=75"
                      alt=""
                    />
                    <div className="card-title fw-bold mt-4">Masud Rana</div>
                    <p className="mt-2">
                      The doctor's treatment was excellent. They gave me enough
                      time and helped me recover from home.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
