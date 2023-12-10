import React from "react";

import { Link } from "react-router-dom";
import { Avatar, Dropdown, Space } from "antd";

import adminAvatar from "../../../assets/imgs/adminAvatar.jpg";

const AvatarAdmin = () => {
  const handleLogout = () => {};

  const items = [
    {
      key: "1",
      disabled: true,
      label: (
        <Space className="flex">
          <Avatar size={43} src={adminAvatar} alt="Avatar" />
          <div className="flex flex-col">
            <p>Admin</p>
          </div>
        </Space>
      ),
    },
    {
      type: "divider",
    },
    {
      key: "3",
      label: <Link onClick={handleLogout}>Đăng xuất</Link>,
    },
  ];
  return (
    <Dropdown menu={{ items }}>
      <Avatar size={43} src={adminAvatar} alt="Avatar" />
    </Dropdown>
  );
};

export default AvatarAdmin;
