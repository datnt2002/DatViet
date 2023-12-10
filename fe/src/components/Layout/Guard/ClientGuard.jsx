import React from "react";
import HeaderClient from "../Client/HeaderClient";
import { Layout } from "antd";
import Footer from "../Footer";

const ClientGuard = ({ children }) => {
  return (
    <>
      <HeaderClient />
      <Layout className="min-h-screen">{children}</Layout>
      <Footer />
    </>
  );
};

export default ClientGuard;
