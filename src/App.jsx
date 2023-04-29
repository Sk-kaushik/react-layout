import { useEffect } from "react";
import Layout from "./layout";
import { useDispatch, useSelector } from "react-redux";
import { fullscreen, collapse, hideSidebar, hideHeader } from "./store/action";
import Routes from "./routes";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fullscreen());
  }, []);

  const toggleFullscreen = () => {
    dispatch(fullscreen());
  };

  const collapseSidebar = () => {
    dispatch(collapse());
  };

  const toggleSidebar = () => {
    dispatch(hideSidebar());
  };

  const toggleHeader = () => {
    dispatch(hideHeader());
  };

  return (
    <Layout toggleFullscreen={toggleFullscreen} collapseSidebar={collapseSidebar} hideSidebar={toggleSidebar} toggleHeader={toggleHeader}>
      <Routes />
    </Layout>
  );
}

export default App;
