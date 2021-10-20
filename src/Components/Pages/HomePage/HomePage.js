import React from "react";
import "../Footer/Footer.css";
import Services from "../Services/Services";
import Benifites from "./Benifites/Benifites";
import ClickMedicProdcuts from "./ClickMedicProducts/ClickMedicProdcuts";
import ConsumerSatisfaction from "./ConsumerSatisfacton/ConsumerSatisfaction";
import "./Home.css";
import ViewDetails from "./ViewDetails/ViewDetails";

const HomePage = () => {
  return (
    <div>
      <div className="bannerBg">
        <div className="row">
          <div
            className="col-md-6 col-lg-6 col-12"
            style={{ textAlign: "left" }}
          >
            <p className="fw-bold contact-heading contactTag">
              Protecting the future of every family
            </p>
            <p
              className="text-white contact-heading"
              style={{ textAlign: "left", marginTop: "-10px" }}
            >
              Click Medic provides simple, affordable health and insurance
              services
            </p>
            <button className="contact-btn btn btn-outline-dark text-white mb-3">
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
          <ClickMedicProdcuts></ClickMedicProdcuts>
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
        <ConsumerSatisfaction></ConsumerSatisfaction>
      </div>
      <div className="my-5 container">
        <Benifites></Benifites>
      </div>
      <div className="my-5 container">
        <ViewDetails></ViewDetails>
      </div>
    </div>
  );
};

export default HomePage;
