import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/global.css";

const Layout = ({ children }) => (
  <div>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
