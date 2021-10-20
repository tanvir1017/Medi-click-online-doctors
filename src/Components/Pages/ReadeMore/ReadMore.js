import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./ReadeMore.css";

const ReadMore = () => {
  const { details } = useParams();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("../fakedb.json")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  const macthedItem = users?.find((user) => user?.name === details);
  /* const { name, title, education, experience, pic } = macthedItem; */

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-lg-10 my-5 ">
          <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col">
              <div class="card">
                <img
                  src={macthedItem?.pic}
                  class="img-fluid card-img-top"
                  alt="..."
                />
                <div class="card-body text-start">
                  <h5 class="card-title fw-bold text-dark">
                    {macthedItem?.name}
                  </h5>
                  <p class="card-text">{macthedItem?.institute}</p>
                  <p class="card-text">{macthedItem?.education}</p>
                  <p class="card-text">{macthedItem?.about}</p>
                </div>
              </div>
            </div>{" "}
            <div class="col alert alert-primary">
              <form class="row g-3">
                <div class="col-md-6">
                  <label for="inputEmail4" class="form-label">
                    First Name
                  </label>
                  <input type="email" class="form-control" id="inputEmail4" />
                </div>
                <div class="col-md-6">
                  <label for="inputPassword4" class="form-label">
                    Last Name
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword4"
                  />
                </div>
                <div class="col-12 text-start">
                  <label for="inputEmail" class="form-label">
                    Email
                  </label>
                  <input type="text" class="form-control" id="inputAddress" />
                </div>
                <div class="col-12 text-start">
                  <label for="inputPassword" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword"
                  />
                </div>
                <div className="text-start mb-0 ">
                  <label for="inputPhoneNumber">Phone</label>
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-text px-5" id="basic-addon2">
                    +880
                  </span>
                  <input
                    type="text"
                    class="py-2 form-control"
                    placeholder="1********"
                    aria-label="Recipient's username"
                  />
                </div>
                <div class="col-md-6 text-start">
                  <label for="inpuDistricts" class="form-label">
                    Division
                  </label>
                  <select id="inputState" class="form-select">
                    <option selected>Choose...</option>
                    <option>Dhaka Division</option>
                    <option>Chittagong Division</option>
                    <option>Rajshahi Division</option>
                    <option>Ranghpur Division</option>
                    <option>Mymensingh Division</option>
                    <option>Sylhet Division</option>
                    <option>Khulna Division</option>
                    <option>Borishal Division</option>
                  </select>
                </div>
                <div class="col-md-6 text-start">
                  <label for="inputCity" class="form-label">
                    City
                  </label>
                  <input type="text" class="form-control" id="inputCity" />
                </div>
                <div class="col-md-6 text-start">
                  <label for="inputThana" class="form-label">
                    Thana
                  </label>
                  <input type="text" class="form-control" id="inputCity" />
                </div>
                <div class="col-md-4 text-start">
                  <label for="inputUninon" class="form-label">
                    Uninon
                  </label>
                  <input type="text" class="form-control" id="inputCity" />
                </div>
                <div class="col-md-2 text-start">
                  <label for="inputZip" class="form-label">
                    Zip
                  </label>
                  <input type="text" class="form-control" id="inputZip" />
                </div>
                <div class="col-md-12 text-start">
                  <label for="birthday" class="form-label">
                    Fixed Date:
                  </label>
                  <input type="date" class="form-control" id="inputCity" />
                </div>
                <div class="col-md-6 text-start">
                  <label for="inputThana" class="form-label">
                    Fee
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    disabled
                    placeholder={macthedItem?.fee}
                    id="inputCity"
                  />
                </div>
                <div class="col-md-6 text-start">
                  <label for="inputCity" class="form-label">
                    Shift
                  </label>
                  <input
                    disabled
                    type="text"
                    class="form-control"
                    id="inputCity"
                    placeholder={macthedItem?.schedule}
                  />
                </div>
                <div class="col-12">
                  <div class="form-check text-start">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label class="form-check-label " for="gridChec k">
                      Agree with <Link to="/">terms & conditions</Link>
                    </label>
                  </div>
                </div>
                <div class="col-12">
                  <button type="submit" class="btn btn-primary">
                    Click For Appointment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-5 rows-col-1">
        <Link to="/home_page">
          <button className="btn btn-outline-secondary btn-lg shadow px-5">
            <i className="ms-2 fas fa-long-arrow-alt-left"></i>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ReadMore;
