import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Layer from "./Layer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

import "../styles/main.scss";

const Layout = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
      <Layer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
