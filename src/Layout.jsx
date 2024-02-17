import React from "react";

import { Outlet } from "react-router-dom";
import Slider from "./Components/Navbars/Slider";
import Footer from "./Components/Footer/Footer";

function Layout() {
  return (
    <>
      <Slider></Slider>
      <Outlet />
      <Footer></Footer>
    </>
  );
}

export default Layout;
