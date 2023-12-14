import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import { Button, Card, Checkbox, Form, Input, Space, Typography } from "antd";
import { useAppStore } from "../../../store/appstate";
import { useNavigate } from "react-router-dom";

const EditTracNghiem = () => {
  const { quiz, createQuestionsTracNghiemSet, questions } = useAppStore();
  const navigate = useNavigate();
  const handleSubmitQuestion = (values) => {
    console.log(values);
    const data = {
      quizId: quiz?.quizId.toString(),
      questions: values?.questions,
      navigate,
    };
    createQuestionsTracNghiemSet(data);
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
  const initValueAnswer = { content: "", isCorrect: false };
  const initValueQuestion = { content: "" };
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
                <Form.Item label="Câu Trả Lời">
                  <Form.List
                    name={[field.name, "answer"]}
                    rules={[
                      {
                        validator: async (_, names) => {
                          if (!names || names.length < 1) {
                            return Promise.reject(
                              new Error("Vui Lòng Thêm ít nhất 1 câu trả lời")
                            );
                          }
                        },
                      },
                    ]}
                  >
                    {(subFields, subOpt, subMeta) => (
                      <div className="flex flex-col gap-4">
                        {subFields.map((subField) => (
                          <Space key={subField.key}>
                            <Form.Item
                              noStyle
                              name={[subField.name, "content"]}
                            >
                              <Input placeholder="Đáp Án" />
                            </Form.Item>
                            <Form.Item
                              noStyle
                              valuePropName="checked"
                              name={[subField.name, "isCorrect"]}
                            >
                              <Checkbox defaultChecked={false}>
                                Đáp án đúng
                              </Checkbox>
                            </Form.Item>
                            <CloseOutlined
                              className="align-[0.125rem]"
                              onClick={() => {
                                subOpt.remove(subField.name);
                              }}
                            />
                          </Space>
                        ))}
                        <Button
                          type="dashed"
                          onClick={() => subOpt.add(initValueAnswer)}
                          block
                        >
                          + Thêm Câu Trả Lời
                        </Button>
                        {subMeta.errors && subMeta.errors.length > 0 && (
                          <Form.ErrorList
                            errors={subMeta.errors}
                            className="text-red-600"
                          />
                        )}
                      </div>
                    )}
                  </Form.List>
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

export default EditTracNghiem;
