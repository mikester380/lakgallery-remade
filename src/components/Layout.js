import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Layer from "./Layer";
import ScrollToTop from "./ScrollToTop";

import "../styles/main.scss";

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">{children}</main>
      <Footer />
      <Layer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
