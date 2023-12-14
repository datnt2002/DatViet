import React, { useEffect, useState } from "react";

import { Button, Form, Input } from "antd";
import { useAppStore } from "../../../store/appstate";

const CreateGameForm = ({ isCreatedGameSuccess, setIsCreatedGameSuccess }) => {
  const { game, createGameTopicTracNghiemSet } = useAppStore();
  console.log(game);
  const handleSubmitGame = (values) => {
    createGameTopicTracNghiemSet(values);
    setIsCreatedGameSuccess(true);
  };
  const formLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
  };

  return (
    <Form
      name="create-game"
      onFinish={handleSubmitGame}
      labelWrap
      {...formLayout}
    >
      <Form.Item
        name="gameName"
        label="Chủ đề"
        rules={[
          { required: true, message: "Vui Lòng Điền ô này trước khi gửi" },
        ]}
      >
        <Input
          className="border"
          disabled={isCreatedGameSuccess}
          placeholder="VD: Lịch sử, Địa Lý"
        />
      </Form.Item>

      <Form.Item wrapperCol={{ span: 24 }}>
        <Button
          type="primary"
          htmlType="submit"
          className="bg-[#6158dd] w-full"
          disabled={isCreatedGameSuccess}
        >
          Gửi
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateGameForm;
