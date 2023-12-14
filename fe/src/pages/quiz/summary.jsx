import React from "react";
import bg from "../../assets/imgs/backgr.jpg";
import paperScroll from "../../assets/imgs/paperscroll.png";

import { Space, Table } from "antd";
import { questionList } from "../../data/dummy";
import { Link } from "react-router-dom";

const Summary = () => {
  const columns = [
    {
      title: "STT",
      dataIndex: "key",
      key: "key",
      width: 100,
    },
    {
      title: "Câu Hỏi",
      dataIndex: "question",
      key: "question",
    },
    {
      title: "Lựa Chọn",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Đáp Án Đúng",
      dataIndex: "address",
      key: "address",
    },

    {
      title: "Tư Liệu",
      dataIndex: "document",
      key: "document",
    },
  ];

  const data = questionList.map((ques, index) => {
    return {
      key: ques?.index,
      question: ques?.question,
      document: ques?.videoLink,
    };
  });

  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
      }}
      className="bg-contain bg-bottom min-h-screen "
    >
      <div className="min-h-screen relative ">
        <img src={paperScroll} alt="" className=" absolute w-full h-full" />
        <div className="flex flex-col absolute z-50 w-full h-full ">
          <h1 className="text-center font-dancing font-bold text-6xl text-amber-800 mt-28 mb-10 tracking-wide">
            TRUY TÌM CỔ VẬT
          </h1>
          <h3 className="text-center font-dancing text-3xl mb-4">
            Số câu trả lời đúng: 15/16
          </h3>
          <div className="w-2/3 mx-auto">
            <Table
              columns={columns}
              dataSource={data}
              scroll={{
                y: 240,
              }}
            />
            ;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
