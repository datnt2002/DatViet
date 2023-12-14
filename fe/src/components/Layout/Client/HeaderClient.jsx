import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { Divider, Layout } from "antd";
import { Header } from "antd/es/layout/layout";
import { ArrowLeftOutlined } from "@ant-design/icons";

const HeaderClient = ({ hasBack }) => {
  const navigate = useNavigate();
  return (
    <Layout>
      <Header className="flex bg-[#e0a949] h-16">
        {hasBack && (
          <div
            className="flex flex-row cursor-pointer"
            onClick={() => {
              navigate(-1);
            }}
          >
            <ArrowLeftOutlined size={16} />
            <p className="ml-2"> Trở về</p>
          </div>
        )}
        <div className="flex items-center justify-between mx-auto">
          <Link to="/" className="text-[#F5F5F5] text-xl">
            <h1 className="text-amber-800 font-dancing font-bold text-3xl">
              Chủ Nhân Đất Việt
            </h1>
          </Link>

          <h1
            onClick={() => {
              navigate("/login");
            }}
            className="cursor-pointer absolute right-3 border border-amber-700 leading-none p-2 rounded-2xl font-dancing font-bold text-xl"
          >
            Login
          </h1>
        </div>
      </Header>
      <Divider className="bg-black my-0" />
    </Layout>
  );
};

export default HeaderClient;
