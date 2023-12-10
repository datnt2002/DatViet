import React from "react";
import { Link } from "react-router-dom";

import { Divider, Layout } from "antd";
import { Header } from "antd/es/layout/layout";
import AvatarAdmin from "./AvatarAdmin";

const HeaderAdmin = () => {
  return (
    <Layout>
      <Header className="flex bg-white h-16">
        <div className="flex w-28 items-center mx-auto">
          <Link className="text-[#F5F5F5] text-xl">
            <h1 className="text-black">Nhân Tài Đất Việt</h1>
          </Link>
        </div>

        <div>
          <AvatarAdmin />
        </div>
      </Header>
      <Divider className="bg-black my-0 border-b-2" />
    </Layout>
  );
};

export default HeaderAdmin;
