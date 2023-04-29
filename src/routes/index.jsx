import React from "react";
import { Routes, Route } from "react-router-dom";
import Feature from "../components/feature";
import Form from "../components/form";
import New from "../components/new";
import Old from "../components/old";
import { path } from "./path";

const RoutesList = () => {
  return (
    <Routes>
      <Route path="form" element={<Form />} />
      <Route path={"feature"} element={<Feature />}>
        {/* This and next route works the same if i want to define routes in New component I will use new/* syntax */}
        {/* <Route path={"new"} element={<New />}>
          <Route path={"n2"} element={<Old />} />
          <Route path={"n3"} element={<Old />} />
        </Route> */}

        {/* If i want to define child routes in new */}
        <Route path={"new/*"} element={<New />} />
      </Route>
    </Routes>
  );
};

export default RoutesList;
