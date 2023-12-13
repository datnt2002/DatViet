import React from "react";
import { Layout, Popconfirm, Space, Table, Tag } from "antd";
import { Content } from "antd/es/layout/layout";
import {
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
  SmileOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const AdminPage = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Link>
            <EyeOutlined />
          </Link>
          <Link>
            <EditOutlined />
          </Link>
          <>
            <Popconfirm
              title="Xóa bộ đề này?"
              description="Bạn có chắc muốn xóa bộ đề này?"
              onConfirm={() => {}}
              okText="Xóa"
              cancelText="Trở Lại"
              okButtonProps={{
                style: { backgroundColor: "black", color: "white" },
              }}
            >
              <Link>
                <DeleteOutlined />
              </Link>
            </Popconfirm>
          </>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];
  return (
    <>
      <Layout style={{ padding: "0 24px 24px" }}>
        <Content
          className="min-h-screen"
          style={{
            padding: 24,
          }}
        >
          <Table columns={columns} dataSource={data} />
        </Content>
      </Layout>
    </>
  );
};

export default AdminPage;
