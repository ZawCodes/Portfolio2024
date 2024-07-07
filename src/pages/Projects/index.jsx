import React from "react";
import List from "./List";
import { Outlet } from "react-router-dom";
import "./index.scss";

const Index = () => {
  return (
    <>
      <div className="projects-section">
        <div className="container">
          <List />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Index;
