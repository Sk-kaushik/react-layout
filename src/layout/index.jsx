import React from "react";
import "./style.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Layout = (props) => {
  const { fullscreen, collapse, hideHeader, hideSidebar } = useSelector((state) => state);

  return (
    <>
      <div className={`main-layout-container ${fullscreen ? "fullscreen" : ""}`}>
        <div className={`header ${hideHeader ? "hide" : ""}`}>
          <div className="nav-container">
            <Link to="/form">Form</Link>
            <Link to="/feature">Feature</Link>
            <Link to="/feature/new">New</Link>
            <Link to="/feature/old">Old</Link>
          </div>
        </div>
        <div className={`sidebar ${collapse ? "collapse" : ""} ${hideSidebar ? "hide" : ""}`}>
          {collapse}
          Sidebar
          <button onClick={props.collapseSidebar}>Collapse</button>
        </div>
        <div className="main">
          {props.children}

          <div>
            <button onClick={props.hideSidebar}>Hide Sidebar</button>
            <button onClick={props.toggleHeader}>Hide Header</button>
            <button onClick={props.toggleFullscreen}>Full screen</button>
          </div>
        </div>
        <div className="footer">Footer</div>
      </div>
    </>
  );
};

export default Layout;
