import React from "react";
import { Link, Routes, Route, Navigate, useLocation, useParams } from "react-router-dom";
import { path } from "../../routes/path";

const New = () => {
  const location = useLocation();

  const checkIfLocationHasChildRoute = (endText) => {
    // To prepare dynamic regex
    let regex = new RegExp(".*" + endText + "$");

    return regex.test(location.pathname);
  };

  return (
    <div>
      <h1>New</h1>
      <Link to={path.feature.innerPages.new.innerPages.n2.url}>n2</Link>
      <br />
      <Link to={path.feature.innerPages.new.innerPages.n3.url}>n3</Link>

      {checkIfLocationHasChildRoute("new") ? <Navigate to={path.feature.innerPages.new.innerPages.n2.route} /> : null}

      <Routes>
        <Route path={path.feature.innerPages.new.innerPages.n2.route} element={<h1>N2</h1>} />
        <Route path={path.feature.innerPages.new.innerPages.n3.route} element={<h1>N3</h1>} />
      </Routes>
    </div>
  );
};

export default New;
