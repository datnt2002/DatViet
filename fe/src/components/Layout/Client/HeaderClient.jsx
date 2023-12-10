import React from "react";
import { Link } from "react-router-dom";

import { Divider, Layout } from "antd";
import { Header } from "antd/es/layout/layout";

const HeaderClient = () => {
  return (
    <Layout>
      <Header className="flex bg-[#e0a949] h-16">
        <div className="flex  items-center mx-auto">
          <Link className="text-[#F5F5F5] text-xl">
            <h1 className="text-amber-800 font-dancing font-bold text-3xl">
              Chủ Nhân Đất Việt
            </h1>
          </Link>
        </div>
      </Header>
      <Divider className="bg-black my-0" />
    </Layout>
  );
};

export default HeaderClient;
