import React from "react";
import useFirebase from "../../../Hooks/useFirebase";
import logo from "../../../Img/Click-medic.png";
import "./ContactUs.css";

const ContactUs = () => {
  const { googleSignIn, githubSignIn } = useFirebase();
  return (
    <>
      <div className="bannerBg">
        <div className="row">
          <div
            className="col-md-6 col-lg-6 col-12"
            style={{ textAlign: "left" }}
          >
            <p className="headingTag fw-bold contact-heading pe-4">
              Please fill the below information
            </p>
            <p
              className="text-white contact-heading"
              style={{ textAlign: "left", marginTop: "-10px" }}
            >
              This will help us to show the the perfect package you are looking
              for
            </p>
          </div>
          <div className="col-md-2 col-lg-2"></div>
          <div className="col-md-4 col-lg-4 col-sm-8">
            <img
              className="img-fluid"
              src="https://static.wixstatic.com/media/4575f6_ec4b613c4b6c4e9b89ad9c530b51c52a~mv2.gif"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="container contact-form alert alert-primary">
        <img
          width="150px"
          className="alert alert-primary rounded shadow"
          src={logo}
          alt=""
        />
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">First Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Last Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>{" "}
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Password</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Retype Password</label>
        </div>
        <div></div>
        <button
          type="submit"
          className="btn btn-primary mt-3 py-3"
          style={{ paddingLeft: "80px", paddingRight: "80px" }}
        >
          Submit
        </button>
        <div className="my-3">___________or___________</div>
        <div>
          <button
            onClick={googleSignIn}
            className="m-2 btn px-5 py-2 btn-success"
          >
            <i className="fab fa-google"></i>
          </button>
          <button onClick={githubSignIn} className="m-2 btn px-5 py-2 btn-dark">
            <i className="fab fa-github"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
