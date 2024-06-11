import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <header style={{marginTop:"100px"}}>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
