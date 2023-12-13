import React from "react";
import { useNavigate } from "react-router-dom";

import quizGame from "../../assets/imgs/truytimcovat.jpg";
import paperScroll from "../../assets/imgs/paperscroll.png";
import bg from "../../assets/imgs/backgr.jpg";
import puzzle from "../../assets/imgs/puzzle.jpg";
import map from "../../assets/imgs/map.jpg";
import vuot from "../../assets/imgs/vuotchuong.jpg";

const Homepage = () => {
  const navigate = useNavigate();
  const handleNavigateTruyTimBaoVat = () => {
    navigate("/truy-tim-bao-vat-rule");
  };
  const handleNavigatePuzzle = () => {
    navigate("/puzzle");
  };
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${bg})`,
        }}
        className="bg-contain bg-bottom h-screen flex flex-1 flex-col md:flex-row"
      >
        <div className="text-center  h-screen basis-1/2 relative flex justify-center">
          <img src={paperScroll} alt="" className=" absolute w-full h-full" />
          <div className="absolute z-50 self-center">
            <h1 className="font-dancing font-bold text-8xl text-amber-800 mb-8 tracking-wide">
              CHỦ NHÂN
            </h1>
            <h1 className="font-dancing font-bold text-8xl text-amber-800 tracking-wide">
              ĐẤT VIỆT
            </h1>
          </div>
        </div>
        <div className="flex flex-col basis-1/2 justify-center pt-5 gap-8 px-24">
          <div
            className="flex border cursor-pointer border-black text-center py-5 px-4 rounded-3xl bg-gray-100/90"
            onClick={handleNavigateTruyTimBaoVat}
          >
            <img
              src={quizGame}
              alt=""
              className="h-20 aspect-video rounded-2xl mr-3"
            />
            <h1 className="text-2xl self-center font-semibold">
              TRUY TÌM CỔ VẬT
            </h1>
          </div>
          <div className="flex border cursor-pointer border-black text-center py-5 px-4 rounded-3xl bg-gray-100/90">
            <img
              src={map}
              alt=""
              className="h-20 aspect-video rounded-2xl mr-3"
            />
            <h1 className="text-2xl self-center font-semibold">
              GIẢI MÃ KHO BÁU
            </h1>
          </div>
          <div
            className="flex border cursor-pointer border-black text-center py-5 px-4 rounded-3xl bg-gray-100/90"
            onClick={handleNavigatePuzzle}
          >
            <img
              src={puzzle}
              alt=""
              className="h-20 aspect-video rounded-2xl mr-3"
            />
            <h1 className="text-2xl self-center font-semibold">
              KHÁM PHÁ KÌ QUAN
            </h1>
          </div>
          <div className="flex border cursor-pointer border-black text-center py-5 px-4 rounded-3xl bg-gray-100/90">
            <img
              src={vuot}
              alt=""
              className="h-20 aspect-video rounded-2xl mr-3"
            />
            <h1 className="text-xl self-center font-semibold">
              VƯỢT CHƯỚNG NGẠI VẬT
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
