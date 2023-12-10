import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  QuestionOutlined,
  PlusOutlined,
} from "@ant-design/icons";

const SiderAdmin = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const items = [
    {
      key: "/admin",
      label: "Danh sách bộ đề",
      icon: <QuestionOutlined />,
    },
    {
      key: "/admin/create-question",
      label: "Tạo mới bộ đề",
      icon: <PlusOutlined />,
    },
    {
      title: "",
      key: "collapse",
      label: (
        <Button
          className="!w-full border-none"
          onClick={() => setCollapsed(!collapsed)}
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        ></Button>
      ),
    },
  ];
  return (
    <Sider
      className="w-52"
      trigger={null}
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <Menu
        className="h-full"
        mode="inline"
        items={items}
        onClick={({ key }) => {
          if (key !== "collapse") {
            navigate(key);
          }
        }}
      />
    </Sider>
  );
};

export default SiderAdmin;
