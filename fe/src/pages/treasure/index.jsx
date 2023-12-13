import React from "react";

import paperScroll from "../../assets/imgs/paperscroll.png";
import bg from "../../assets/imgs/backgr.jpg";

import { Button, Checkbox, Col, Form, Input, Row } from "antd";

const Treasure = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
      }}
      className="bg-cover bg-bottom min-h-screen"
    >
      <div className="flex flex-col h-screen">
        <div className="h-4/5 relative text-center">
          <img
            className="absolute h-full w-[80%] first:transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
            src={paperScroll}
            alt=""
          />
          <div className="absolute top-[15%] w-full z-50 px-10">
            <h1 className="font-dancing font-bold text-2xl text-amber-800 mb-8 tracking-wide">
              1. Thực dân Pháp bắt đầu xâm lược nước ta vào năm nào?
            </h1>
            <img
              className="h-64 mx-auto"
              alt=""
              src="https://cdn.tgdd.vn/Files/2021/04/22/1345502/nguon-goc-dac-diem-cach-nuoi-va-bang-gia-cua-meo-anh-202203281928229223.jpg"
            />
          </div>
        </div>
        <Row justify="center">
          <Col span={20}>
            <Form
              name="basic"
              wrapperCol={{
                span: 24,
              }}
              onFinish={onFinish}
            >
              <Form.Item name="username">
                <Input placeholder="Câu Trả Lời của bạn" className="p-4" />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 22,
                }}
              >
                <Button
                  type="primary"
                  htmlType="submit"
                  className="bg-amber-800 rounded-2xl"
                  size="large"
                >
                  Nộp Bài
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Treasure;
