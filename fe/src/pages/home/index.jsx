import React from "react";
import { Button, Divider } from "antd";

import quizGame from "../../assets/imgs/quizGame.webp";

const Homepage = () => {
  return (
    <div>
      <div
        //  style={{ backgroundImage: `url(${introBg})` }}
        className="bg-cover flex flex-1 flex-col md:flex-row"
      >
        <div className="text-center mt-52 h-[27rem] basis-1/2">
          <h1 className="font-dancing font-bold text-8xl mb-8 tracking-wide">
            Chủ Nhân
          </h1>
          <h1 className="font-dancing font-bold text-8xl tracking-wide">
            Đất Việt
          </h1>
        </div>
        <div className="flex flex-col basis-1/2 justify-center pt-5 gap-8 px-24">
          <div className="flex border border-black text-center py-5 px-4 rounded-3xl">
            <img src={quizGame} alt="" className="h-20 rounded-2xl mr-3" />
            <h1 className="text-xl self-center font-semibold">
              Hướng Dẫn Dự Thi Trên Myaloha
            </h1>
          </div>
          <div className="flex border border-black text-center py-5 px-4 rounded-3xl">
            <img src={quizGame} alt="" className="h-20 rounded-2xl mr-3" />
            <h1 className="text-xl self-center font-semibold">
              Hướng Dẫn Dự Thi Trên Myaloha
            </h1>
          </div>
          <div className="flex border border-black text-center py-5 px-4 rounded-3xl">
            <img src={quizGame} alt="" className="h-20 rounded-2xl mr-3" />
            <h1 className="text-xl self-center font-semibold">
              Hướng Dẫn Dự Thi Trên Myaloha
            </h1>
          </div>
          <div className="flex border border-black text-center py-5 px-4 rounded-3xl">
            <img src={quizGame} alt="" className="h-20 rounded-2xl mr-3" />
            <h1 className="text-xl self-center font-semibold">
              Hướng Dẫn Dự Thi Trên Myaloha
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
