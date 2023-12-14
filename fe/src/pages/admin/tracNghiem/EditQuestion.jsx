import React from "react";

import { Content } from "antd/es/layout/layout";
import { Button, Form, Input, Layout } from "antd";
import EditTracNghiem from "../../../components/Container/FormContainer/EditTracNghiem";

const EditQuestion = () => {
  const handleSubmitQuiz = () => {};

  const formLayout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 20,
    },
  };
  return (
    <Layout style={{ padding: "0 24px 24px" }}>
      <Content>
        <div
          className="p-6 min-h-screen h-auto"
          style={{
            // backgroundImage: `url(${repeatBg})`,
            backgroundSize: "100% auto",
          }}
        >
          <div className="flex flex-col  bg-white p-6">
            <div className="flex justify-between">
              <h1 className="font-semibold text-2xl mb-5">
                Chỉnh Sửa Bộ Đề Truy Tìm Cổ Vật
              </h1>
            </div>
            <>
              <Form
                name="create-quiz"
                onFinish={handleSubmitQuiz}
                labelWrap
                form
                {...formLayout}
              >
                <Form.Item
                  name="title"
                  label="Bộ đề"
                  rules={[
                    {
                      required: true,
                      message: "Vui Lòng Điền ô này trước khi gửi",
                    },
                  ]}
                >
                  <Input className="border" placeholder="Tên Bộ Đề" />
                </Form.Item>
                <Form.Item
                  name="content"
                  label="Nội dung"
                  rules={[
                    {
                      required: true,
                      message: "Vui Lòng Điền ô này trước khi gửi",
                    },
                  ]}
                >
                  <Input
                    className="border"
                    placeholder="VD: Cuộc Kháng Chiến ... "
                  />
                </Form.Item>
                <Form.Item wrapperCol={{ span: 24 }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="bg-[#6158dd] w-full"
                  >
                    Gửi
                  </Button>
                </Form.Item>
              </Form>
            </>
            <EditTracNghiem />
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default EditQuestion;
