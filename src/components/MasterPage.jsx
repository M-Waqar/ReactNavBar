import React from "react";
import Layout from "./Layout";
import Footer from "./Footer";

const MasterPage = ({ children }) => {
  return (
    <>
      <Layout />
      <div className="container">{children}</div>
      <Footer />
    </>
  );
};

export default MasterPage;
