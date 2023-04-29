import React from "react";
import { Outlet } from "react-router-dom";

const Feature = () => {
  return (
    <div style={{ height: "100%", width: "100%", background: "red" }}>
      <h1>Feature</h1>

      <Outlet />
    </div>
  );
};

export default Feature;
