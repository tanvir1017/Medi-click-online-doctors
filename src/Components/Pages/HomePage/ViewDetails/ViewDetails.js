import React from "react";
import useAuth from "../../../../Hooks/useAuth";
import "../Home.css";

const ViewDetails = () => {
  const { user } = useAuth();
  return (
    <div>
      <div className="row">
        <div
          className="col-12 bannerBg"
          style={{ borderRadius: "20px", padding: "75px" }}
        >
          <h1 className="text-white fw-bold">Want to know more about us?</h1>
          <p className="text-white">
            Click to get a call back. We are here to answer your questions.
          </p>
          <button
            className="btn btn-dark shadow-lg"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Please send us your Query{" "}
            <i className="ms-2 fas fa-long-arrow-alt-right"></i>
          </button>
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              {user?.displayName ? (
                <h5 class="modal-title" id="exampleModalLabel">
                  {user?.displayName}'s Query
                </h5>
              ) : (
                <h5 class="modal-title" id="exampleModalLabel">
                  Your Query
                </h5>
              )}
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  @
                </span>
                {user.displayName ? (
                  <input
                    type="text"
                    class="form-control"
                    placeholder={user.displayName}
                    disabled
                  />
                ) : (
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                )}
              </div>

              <div class="input-group mb-3">
                {user.email ? (
                  <input
                    type="text"
                    class="form-control"
                    placeholder={user.email}
                    disabled
                  />
                ) : (
                  <input
                    type="text"
                    class="form-control"
                    placeholder="simple123"
                  />
                )}
                <span class="input-group-text" id="basic-addon2">
                  @gmail.com
                </span>
              </div>

              <p class="form-label text-start ">Your Adress</p>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="basic-url"
                  aria-describedby="basic-addon3"
                />
              </div>
              <div class="input-group">
                <textarea
                  class="form-control p-5"
                  placeholder="leave here a comment"
                ></textarea>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
