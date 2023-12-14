import React, { useState } from "react";

import { Button, Form, Input } from "antd";
import CreateQuestionInsideForm from "./CreateQuestionInsideForm";
import CreateGameForm from "./CreateGameForm";
import { useAppStore } from "../../../store/appstate";

const CreateQuestionForm = () => {
  const [isCreatedGameSuccess, setIsCreatedGameSuccess] = useState(false);
  const [isCreatedQuizSuccess, setIsCreatedQuizSuccess] = useState(false);
  const { game, quiz, createQuizTracNghiemSet } = useAppStore();
  const formLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
  };
  console.log(quiz);
  const handleSubmitQuiz = (values) => {
    console.log(game);
    console.log(values);
    const data = { gameId: game?.gameId, ...values };
    createQuizTracNghiemSet(data);
    setIsCreatedQuizSuccess(true);
  };
  return (
    <>
      <CreateGameForm
        isCreatedGameSuccess={isCreatedGameSuccess}
        setIsCreatedGameSuccess={setIsCreatedGameSuccess}
      />
      {isCreatedGameSuccess && (
        <Form
          name="create-quiz"
          onFinish={handleSubmitQuiz}
          labelWrap
          {...formLayout}
        >
          <Form.Item
            name="title"
            label="Bộ đề"
            rules={[
              { required: true, message: "Vui Lòng Điền ô này trước khi gửi" },
            ]}
          >
            <Input
              className="border"
              disabled={isCreatedQuizSuccess}
              placeholder="Tên Bộ Đề"
            />
          </Form.Item>
          <Form.Item
            name="content"
            label="Nội dung"
            rules={[
              { required: true, message: "Vui Lòng Điền ô này trước khi gửi" },
            ]}
          >
            <Input
              className="border"
              disabled={isCreatedQuizSuccess}
              placeholder="VD: Cuộc Kháng Chiến ... "
            />
          </Form.Item>
          <Form.Item wrapperCol={{ span: 24 }}>
            <Button
              type="primary"
              htmlType="submit"
              className="bg-[#6158dd] w-full"
              disabled={isCreatedQuizSuccess}
            >
              Gửi
            </Button>
          </Form.Item>
        </Form>
      )}

      {isCreatedQuizSuccess && <CreateQuestionInsideForm />}
    </>
  );
};

export default CreateQuestionForm;
