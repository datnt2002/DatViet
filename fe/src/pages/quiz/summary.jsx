import React from "react";
import bg from "../../assets/imgs/backgr.jpg";
import paperScroll from "../../assets/imgs/paperscroll.png";
import { Col, Divider, Row } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
const Summary = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
      }}
      className="bg-contain bg-bottom min-h-screen "
    >
      <div className="min-h-screen relative max-w-screen-xl">
        <img src={paperScroll} alt="" className=" absolute w-full h-full" />
        <div className="flex flex-col absolute z-50 w-full h-full ">
          <h1 className="text-center font-dancing font-bold text-8xl text-amber-800 mt-28 mb-10 tracking-wide">
            TRUY TÌM CỔ VẬT
          </h1>

          <h3 className="text-center font-dancing text-3xl mb-4">
            Số câu trả lời đúng: 15/16
          </h3>
          <div className="text-center text-lg h-96 overflow-y-scroll w-2/3 mx-auto">
            <div className="">
              <h1 className="font-bold">
                <CloseCircleOutlined /> Câu hỏi số 1: C.1867
              </h1>
              <p>
                Tài Liệu Tham Khảo: https://www.youtube.com/watch?v=F8u6ULjt8mU
              </p>
            </div>
            <div>
              <h1 className="font-bold">
                <CloseCircleOutlined /> Câu hỏi số 1: C.1867
              </h1>
              <p>
                Tài Liệu Tham Khảo: https://www.youtube.com/watch?v=F8u6ULjt8mU
              </p>
            </div>{" "}
            <div>
              <h1 className="font-bold">
                <CloseCircleOutlined /> Câu hỏi số 1: C.1867
              </h1>
              <p>
                Tài Liệu Tham Khảo: https://www.youtube.com/watch?v=F8u6ULjt8mU
              </p>
            </div>{" "}
            <div>
              <h1 className="font-bold">
                <CloseCircleOutlined /> Câu hỏi số 1: C.1867
              </h1>
              <p>
                Tài Liệu Tham Khảo: https://www.youtube.com/watch?v=F8u6ULjt8mU
              </p>
            </div>{" "}
            <div>
              <h1 className="font-bold">
                <CloseCircleOutlined /> Câu hỏi số 1: C.1867
              </h1>
              <p>
                Tài Liệu Tham Khảo: https://www.youtube.com/watch?v=F8u6ULjt8mU
              </p>
            </div>{" "}
            <div>
              <h1 className="font-bold">
                <CloseCircleOutlined /> Câu hỏi số 1: C.1867
              </h1>
              <p>
                Tài Liệu Tham Khảo: https://www.youtube.com/watch?v=F8u6ULjt8mU
              </p>
            </div>{" "}
            <div>
              <h1 className="font-bold">
                <CloseCircleOutlined /> Câu hỏi số 1: C.1867
              </h1>
              <p>
                Tài Liệu Tham Khảo: https://www.youtube.com/watch?v=F8u6ULjt8mU
              </p>
            </div>{" "}
            <div>
              <h1 className="font-bold">
                <CloseCircleOutlined /> Câu hỏi số 1: C.1867
              </h1>
              <p>
                Tài Liệu Tham Khảo: https://www.youtube.com/watch?v=F8u6ULjt8mU
              </p>
            </div>{" "}
            <div>
              <h1 className="font-bold">
                <CloseCircleOutlined /> Câu hỏi số 1: C.1867
              </h1>
              <p>
                Tài Liệu Tham Khảo: https://www.youtube.com/watch?v=F8u6ULjt8mU
              </p>
            </div>{" "}
            <div>
              <h1 className="font-bold">
                <CloseCircleOutlined /> Câu hỏi số 1: C.1867
              </h1>
              <p>
                Tài Liệu Tham Khảo: https://www.youtube.com/watch?v=F8u6ULjt8mU
              </p>
            </div>{" "}
            <div>
              <h1 className="font-bold">
                <CloseCircleOutlined /> Câu hỏi số 1: C.1867
              </h1>
              <p>
                Tài Liệu Tham Khảo: https://www.youtube.com/watch?v=F8u6ULjt8mU
              </p>
            </div>{" "}
            <div>
              <h1 className="font-bold">
                <CloseCircleOutlined /> Câu hỏi số 1: C.1867
              </h1>
              <p>
                Tài Liệu Tham Khảo: https://www.youtube.com/watch?v=F8u6ULjt8mU
              </p>
            </div>{" "}
            <div>
              <h1 className="font-bold">
                <CloseCircleOutlined /> Câu hỏi số 1: C.1867
              </h1>
              <p>
                Tài Liệu Tham Khảo: https://www.youtube.com/watch?v=F8u6ULjt8mU
              </p>
            </div>{" "}
            <div>
              <h1 className="font-bold">
                <CloseCircleOutlined /> Câu hỏi số 1: C.1867
              </h1>
              <p>
                Tài Liệu Tham Khảo: https://www.youtube.com/watch?v=F8u6ULjt8mU
              </p>
            </div>{" "}
            <div>
              <h1 className="font-bold">
                <CloseCircleOutlined /> Câu hỏi số 1: C.1867
              </h1>
              <p>
                Tài Liệu Tham Khảo: https://www.youtube.com/watch?v=F8u6ULjt8mU
              </p>
            </div>{" "}
            <div>
              <h1 className="font-bold">
                <CloseCircleOutlined /> Câu hỏi số 1: C.1867
              </h1>
              <p>
                Tài Liệu Tham Khảo: https://www.youtube.com/watch?v=F8u6ULjt8mU
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
