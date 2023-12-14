import React from "react";
import bg from "../../assets/imgs/backgr.jpg";

import { Progress, Table } from "antd";
import { useAppStore } from "../../store/appstate";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  VideoCameraOutlined,
  BookOutlined,
} from "@ant-design/icons";

const Summary = () => {
  const { listQuestions } = useAppStore();
  let countCorrectAnswers = 0;
  const data = listQuestions.map((ques, index) => {
    if (ques?.selectedAnswerIndex == ques?.correctAnswerIndex) {
      countCorrectAnswers += 1;
    }
    return {
      key: index,
      question: ques?.question,
      result: ques?.selectedAnswerIndex == ques?.correctAnswerIndex,
      selectedAnswerIndex:
        ques?.[`option${ques?.selectedAnswerIndex}`]?.content,
      correctAnswerIndex: ques?.[`option${ques?.correctAnswerIndex}`]?.content,
      videoLink: ques?.videoLink,
    };
  });
  const columns = [
    {
      title: "STT",
      dataIndex: "key",
      key: "key",
      width: 100,
    },
    {
      title: "Kết quả",
      dataIndex: "result",
      key: "result",
      render: (val) => (val ? "Đúng" : "Sai"),
    },
    {
      title: "Câu Hỏi",
      dataIndex: "question",
      key: "question",
    },
    {
      title: "Lựa Chọn",
      dataIndex: "selectedAnswerIndex",
      key: "selectedAnswerIndex",
    },
    {
      title: "Đáp Án Đúng",
      dataIndex: "correctAnswerIndex",
      key: "correctAnswerIndex",
    },
    {
      title: "Tư Liệu",
      dataIndex: "videoLink",
      key: "videoLink",
      render: (text) =>
        text ? (
          <VideoCameraOutlined
            className="text-3xl cursor-pointer"
            onClick={() => handleNavigate(text)}
          />
        ) : (
          <BookOutlined className="text-3xl cursor-pointer" />
        ),
    },
  ];

  const handleNavigate = (text) => {
    window.open(text, "_blank");
  };
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
      }}
      className="bg-contain bg-bottom min-h-screen "
    >
      <div className="min-h-screen ">
        <div className="flex flex-col w-full h-full ">
          <h1 className="text-center font-dancing font-bold text-6xl text-amber-800 mt-10 mb-5 tracking-wide">
            TRUY TÌM CỔ VẬT
          </h1>
          <h3 className="text-center font-dancing text-3xl mb-4">
            {`Số câu trả lời đúng: ${countCorrectAnswers}/${15}`}
          </h3>
          <Progress
            className="mx-auto mb-2"
            type="circle"
            percent={Math.floor((countCorrectAnswers / 15) * 100)}
          />
          <div className="w-2/3 mx-auto">
            <Table
              columns={columns}
              dataSource={data}
              scroll={{
                y: 540,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
