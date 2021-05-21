import React, { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Landing from "./pages/Landing/Landing";
// import Products from "./pages/Products";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <React.Fragment>
      <Landing />
      {/*<Products />*/}
    </React.Fragment>
  );
}

export default App;
