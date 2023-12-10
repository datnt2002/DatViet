import React from "react";

import quizGame from "../../assets/imgs/quizGame.webp";
import paperScroll from "../../assets/imgs/paperscroll.png";
import bg from "../../assets/imgs/backgr.jpg";
import puzzle from "../../assets/imgs/puzzle.jpg";
import map from "../../assets/imgs/map.jpg";

const Quiz = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${bg})`,
        }}
        className="bg-cover bg-bottom h-screen flex flex-1 flex-col md:flex-row"
      >
        <div className="text-center mt-20 h-[27rem] basis-1/2 relative">
          <img src={paperScroll} alt="" className="absolute" />
          <div className="absolute z-50 top-1/3 left-1/4">
            <h1 className="font-dancing font-bold text-2xl text-amber-800 mb-8 tracking-wide">
              Chủ Nhân
            </h1>
          </div>
        </div>
        <div className="flex flex-col basis-1/2 justify-center pt-5 gap-8 px-24">
          <div className="flex border cursor-pointer border-black text-center py-5 px-4 rounded-3xl bg-gray-100/90">
            <h1 className="text-xl self-center font-semibold">
              Truy Tìm Cổ Vật
            </h1>
          </div>
          <div className="flex border border-black text-center py-5 px-4 rounded-3xl bg-gray-100/90">
            <h1 className="text-xl self-center font-semibold">
              Giải Mã Kho Báu
            </h1>
          </div>
          <div className="flex border border-black text-center py-5 px-4 rounded-3xl bg-gray-100/90">
            <h1 className="text-xl self-center font-semibold">
              Khám Phá Kì Quan
            </h1>
          </div>
          <div className="flex border border-black text-center py-5 px-4 rounded-3xl bg-gray-100/90">
            <h1 className="text-xl self-center font-semibold">
              Vượt chướng ngại vật
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
