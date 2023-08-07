import React, { useState, useEffect } from "react";
import Showitems from "./Showitems";


const Show = () => {
  const [show, setShow] = useState([]);

  const updateShow = async () => {
    let url = "https://api.tvmaze.com/search/shows?q=all";
    try {
      let response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      let parsedData = await response.json();
      console.log(parsedData);
      setShow(parsedData.map((item) => item.show)); // Converts the object to array
    } catch (error) {
      // Handle errors here
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    updateShow();
    // eslint-disable-next-line
  }, []);

  if (!show?.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container my-3">
      <h2 className="text-center" style={{ margin: "35px" }}>
        New App
      </h2>
      <div className="container">
        <div className="row">
          {show.map((element) => {
            return (
              <div className="col-md-4 mb-4" key={element.id}>
                <Showitems
                  name={element.name}
                  summary={element.summary}
                  image={element.image}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Show;
