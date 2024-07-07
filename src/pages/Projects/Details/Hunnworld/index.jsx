import React from "react";
import hunn1 from "./assets/hunn1.jpg";
import "./index.scss";

const Index = () => {
  return (
    <>
      <div className="Hunn-container">
        <div className="image-container">
          <div className="img-wrap hunn1">
            <img src={hunn1} alt="hunn1" />
          </div>
        </div>
        <div className="desc">
          <p className="tech">
            Technologies used: Reactjs, Vite, Html, Scss, Javascript, Context
            API, i18next
          </p>
          <p>
            A website to showcase our heated tobacco products, provide
            information on where to purchase them, offer customer support, and
            enable users to register warranties for their purchased devices.
          </p>
        </div>
      </div>
    </>
  );
};

export default Index;
