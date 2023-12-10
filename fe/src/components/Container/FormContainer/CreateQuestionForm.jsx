import React, { useState } from "react";

import { Button, Form, Input, Select } from "antd";

const CreateQuestionForm = () => {
  const [isCreatedSuccess, setIsCreatedSuccess] = useState(false);

  const formLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
  };
  return (
    <>
      <Form
        name="create-quiz"
        //   onFinish={handleSubmitQuiz}
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
          <Input className="border rounded-md" disabled={isCreatedSuccess} />
        </Form.Item>

        <Form.Item wrapperCol={{ span: 24 }}>
          <Button
            type="primary"
            htmlType="submit"
            className="bg-black w-full"
            disabled={isCreatedSuccess}
          >
            Gửi
          </Button>
        </Form.Item>
      </Form>

      {isCreatedSuccess && <CreateQuestionForm />}
    </>
  );
};

export default CreateQuestionForm;
