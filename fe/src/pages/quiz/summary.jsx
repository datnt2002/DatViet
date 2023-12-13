import React from "react";
import bg from "../../assets/imgs/backgr.jpg";
import paperScroll from "../../assets/imgs/paperscroll.png";
import { Col, Row } from "antd";

const Summary = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
      }}
      className="bg-contain bg-bottom h-screen"
    >
      <div className="h-screen relative ">
        <img src={paperScroll} alt="" className=" absolute w-full h-full" />
        <div className="flex flex-col absolute z-50 w-full h-full ">
            <h1 className="text-center font-dancing font-bold text-8xl text-amber-800 mt-28 mb-16 tracking-wide">
              TRUY TÌM CỔ VẬT
            </h1>
            <div>
                <h3>Số câu trả lời đúng</h3>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
