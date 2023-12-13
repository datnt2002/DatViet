import React, { useState } from "react";

import { Button, Form, Input, Select } from "antd";
import CreateQuestionInsideForm from "./CreateQuestionInsideForm";

const CreateQuestionForm = () => {
  const [isCreatedSuccess, setIsCreatedSuccess] = useState(false);

  const formLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
  };

  const handleSubmitQuiz = (values) => {
    console.log(values);
  };

  return (
    <>
      <Form
        name="create-quiz"
        onFinish={handleSubmitQuiz}
        labelWrap
        {...formLayout}
      >
        <Form.Item
          name="quiz"
          label="Bộ đề"
          rules={[
            { required: true, message: "Vui Lòng Điền ô này trước khi gửi" },
          ]}
        >
          <Input className="border" disabled={isCreatedSuccess} />
        </Form.Item>
        <Form.Item
          name="content"
          label="Chủ đề"
          rules={[
            { required: true, message: "Vui Lòng Điền ô này trước khi gửi" },
          ]}
        >
          <Input
            className="border"
            disabled={isCreatedSuccess}
            placeholder="VD: Lịch sử, Địa Lý"
          />
        </Form.Item>

        <Form.Item wrapperCol={{ span: 24 }}>
          <Button
            type="primary"
            htmlType="submit"
            className="bg-[#6158dd] w-full"
            disabled={isCreatedSuccess}
          >
            Gửi
          </Button>
        </Form.Item>
      </Form>

      <CreateQuestionInsideForm />
    </>
  );
};

export default CreateQuestionForm;
