import React from "react";

const Showitems = (props) => {
  // Function to remove tags from the html text
  const removeTags = (str) => {
    const div = document.createElement("div");
    div.innerHTML = str;
    return div.textContent || div.innerText || "";
  };

  const plainTextSummary = removeTags(props.summary);

  return (
    <div className="card">
      <div className="card-header">{props.name}</div>
      <div className="card-body">
        <p className="card-text">{plainTextSummary}</p>
        <a
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default Showitems;

{
  /* <div className="card-body">
  <h5 className="card-title">{props.name}</h5>
  <p className="card-text">{props.summary}</p>
  <a
    href={props.url}
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-outline-info"
  >
    Read more
  </a>
</div>; */
}
