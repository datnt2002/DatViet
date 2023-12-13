import React from "react";
import { Link } from "react-router-dom";

import { Divider, Layout } from "antd";
import { Header } from "antd/es/layout/layout";
import AvatarAdmin from "./AvatarAdmin";

const HeaderAdmin = () => {
  return (
    <Layout>
      <Header className="flex bg-[#6158dd] h-16">
        <div className="flex w-auto items-center mx-auto">
          <Link className="text-[#F5F5F5] text-xl">
            <h1 className="text-white font-dancing w-auto">
              Nhân Tài Đất Việt
            </h1>
          </Link>
        </div>

        <div>
          <AvatarAdmin />
        </div>
      </Header>
    </Layout>
  );
};

export default HeaderAdmin;
