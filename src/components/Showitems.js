import React from "react";
import { useNavigate } from "react-router-dom";

const Showitems = ({ name, image, summary }) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/Bookingitems", { state: { name, image, summary } });
  };

  // Function to remove tags from the html text
  const removeTags = (str) => {
    if (!str) return "";

    const div = document.createElement("div");
    div.innerHTML = str;
    return div.textContent || div.innerText || "";
  };

  const plainTextSummary = removeTags(summary);

  return (
    <div className="card">
      <div className="card-header">
        <img src={image?.medium} className="card-img-top" alt={name} />
      </div>
      <div className="card-header">{name}</div>
      <div className="card-body">
        {summary && <p className="card-text">{plainTextSummary}</p>}
        <div>
          <button className="btn btn-primary" onClick={handleRedirect}>Book Tickets</button>
        </div>
      </div>
    </div>
  );
};

export default Showitems;
