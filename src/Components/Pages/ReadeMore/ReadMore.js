import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const ReadMore = () => {
  const { details } = useParams();
  console.log(details);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("../fakedb.json")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  const macthedItem = users?.find((user) => user?.name === details);
  /* const { name, title, education, experience, pic } = macthedItem; */

  return (
    <div>
      <div className="row">
        <div className="col-4">
          <div></div>
        </div>
        <div className="col-4 my-5 ">
          <div className="container p-5 card mb-3">
            <img src={macthedItem?.pic} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title fw-bold">
                {details}{" "}
                <span className="text-muted">({macthedItem?.title})</span>{" "}
              </h5>
              <p className="card-text text-start fw-bold">
                Education : {macthedItem?.education}
              </p>
              <p className="card-text text-start fw-bold text-muted">
                Institute : {macthedItem?.institute}
              </p>
              <p className="card-text text-start fw-bold text-muted">
                {macthedItem?.about}
              </p>
              <p className="card-text text-center fw-bold text-muted">
                {macthedItem?.experience}
              </p>
              <Link to="/home_page">
                <button className="btn btn-outline-secondary btn-lg shadow px-5">
                  <i className="ms-2 fas fa-long-arrow-alt-left"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ReadMore;
