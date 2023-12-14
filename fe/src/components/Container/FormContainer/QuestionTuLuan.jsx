import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import { Button, Card, Checkbox, Form, Input, Space, Typography } from "antd";
import { useAppStore } from "../../../store/appstate";
import { useNavigate } from "react-router-dom";

const QuestionTuLuan = () => {
  const { quiz, createQuestionsTuLuanSet } = useAppStore();
  const navigate = useNavigate();

  const handleSubmitQuestion = (values) => {
    console.log(values);
    const data = {
      quizId: quiz?.quizId.toString(),
      questions: values?.questions,
      navigate,
    };
    createQuestionsTuLuanSet(data);
  };
  const [form] = Form.useForm();
  console.log(quiz);

  const formLayout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 20,
    },
  };

  const initValueQuestion = { content: "", answer: "" };
  return (
    <Form
      {...formLayout}
      autoComplete="off"
      onFinish={handleSubmitQuestion}
      form={form}
    >
      <Form.List
        name="questions"
        rules={[
          {
            validator: async (_, names) => {
              if (!names || names.length < 1) {
                return Promise.reject(new Error("Vui lòng điền ít nhất một ô"));
              }
            },
          },
        ]}
      >
        {(fields, { add, remove }, { errors }) => (
          <div className="flex flex-col gap-4">
            {fields.map((field) => (
              <Card
                size="small"
                title={`Câu hỏi ${field.name + 1}`}
                key={field.key}
                extra={
                  <CloseOutlined
                    onClick={() => {
                      remove(field.name);
                    }}
                  />
                }
              >
                <Form.Item label="Câu hỏi" name={[field.name, "content"]}>
                  <Input placeholder="Nhập câu hỏi" />
                </Form.Item>
                {/* <Form.Item label="Hình Ảnh" name={[field.name, "questionImg"]}>
              <Input placeholder="Điền đường dẫn hình ảnh" />
            </Form.Item> */}
                {/* Nest Form.List */}
                <Form.Item label="Câu Trả Lời" name={[field.name, "answer"]}>
                  <Input placeholder="Nhập Câu Trả Lời" />
                </Form.Item>
              </Card>
            ))}

            <Button type="dashed" onClick={() => add(initValueQuestion)} block>
              + Thêm Câu Hỏi
            </Button>
            <Form.ErrorList errors={errors} className="text-red-600" />
          </div>
        )}
      </Form.List>
      <Form.Item noStyle shouldUpdate>
        {() => (
          <Typography>
            <pre>{JSON.stringify(form.getFieldsValue(), null, 2)}</pre>
          </Typography>
        )}
      </Form.Item>
      <Form.Item
        wrapperCol={{
          span: 24,
        }}
      >
        <Button
          type="primary"
          htmlType="submit"
          className="bg-[#6158dd] w-full mt-4"
        >
          Gửi
        </Button>
      </Form.Item>
    </Form>
  );
};

export default QuestionTuLuan;
