import React, { useEffect, useState } from "react";
import { Button, Layout, Modal, Popconfirm, Space, Table, Tag } from "antd";
import { Content } from "antd/es/layout/layout";
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { useAppStore } from "../../../store/appstate";
import { xoaBoDeTracNghiem } from "../../../services/tracNghiem.service";

const QuanLiBoDe = () => {
  const { listQuiz, getListTracNghiemSet } = useAppStore();

  const navigate = useNavigate();

  useEffect(() => {
    getListTracNghiemSet();
  }, []);

  const handleDelete = async (record) => {
    try {
      await xoaBoDeTracNghiem(record?.quizId);
      await getListTracNghiemSet();
    } catch (error) {
      console.error("Error deleting quiz:", error);
    }
  };

  const columns = [
    {
      title: "STT",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Tên Bộ Đề",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Nội dung",
      dataIndex: "content",
      key: "content",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Link>
            <EyeOutlined />
          </Link>
          <Link onClick={() => handleNavigateEdit(record)}>
            <EditOutlined />
          </Link>
          <>
            <Popconfirm
              title="Xóa bộ đề này?"
              description="Bạn có chắc muốn xóa bộ đề này?"
              onConfirm={() => {
                handleDelete(record);
              }}
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

  const data = listQuiz.map((quiz, index) => {
    return {
      key: index + 1,
      title: quiz?.title,
      content: quiz?.content,
      quizId: quiz?.quizId,
    };
  });

  const handleNavigateEdit = (record) => {
    navigate(`edit-bo-de/${record?.quizId}`);
  };

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

export default QuanLiBoDe;
