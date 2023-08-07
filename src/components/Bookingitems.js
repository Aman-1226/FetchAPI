import React from "react";
import { useLocation } from "react-router-dom";

const Bookingitems = ({ name, image }) => {
  const { state } = useLocation();

  const showAlert = () => {
    return(
        alert("Now you have been directed to the payment section.....")
    )
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="card mt-5 mb-5" style={{ width: "27rem" }}>
        <div className="card-header my-6">
          <img src={state.image?.medium} className="card-img-top" alt={name} />
        </div>
        <h2 className="text-center" style={{ margin: "35px" }}>
          {state.name}
        </h2>
        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Phone number
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="xxxxxxxxxx"
            />
          </div>
          <div className="mb-3">
            <label for="scrollingNumber">Number of People: </label>
            <input
              type="number"
              id="scrollingNumber"
              step="1"
              min="0"
              max="100"
            />
          </div>
          <div className="mb-3">
            <input onClick={showAlert} className="btn btn-primary" type="submit" value="Submit" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookingitems;
