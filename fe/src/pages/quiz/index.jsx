import React from "react";

import paperScroll from "../../assets/imgs/paperscroll.png";
import bg from "../../assets/imgs/backgr.jpg";

const Quiz = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${bg})`,
        }}
        className="bg-cover bg-bottom min-h-screen"
      >
        <div className="flex h-[39rem]">
          <div className="basis-1/2 relative">
            <img src={paperScroll} alt="" className="absolute" />
            <div className="absolute z-50 w-full text-center">
              <h1 className="font-dancing font-bold text-2xl text-amber-800 mb-8 tracking-wide">
                1. Thực dân Pháp bắt đầu xâm lược nước ta vào năm nào?
              </h1>
            </div>
          </div>
          <div className="flex flex-col basis-1/2 justify-center pt-5 gap-8 px-24">
            <div className="flex border cursor-pointer border-black text-center py-5 px-4 rounded-3xl bg-gray-100/90">
              <h1 className="text-xl self-center font-semibold">A. 1858</h1>
            </div>
            <div className="flex border border-black text-center py-5 px-4 rounded-3xl bg-gray-100/90">
              <h1 className="text-xl self-center font-semibold">B. 1859</h1>
            </div>
            <div className="flex border border-black text-center py-5 px-4 rounded-3xl bg-gray-100/90">
              <h1 className="text-xl self-center font-semibold">C. 1862</h1>
            </div>
            <div className="flex border border-black text-center py-5 px-4 rounded-3xl bg-gray-100/90">
              <h1 className="text-xl self-center font-semibold">D. 1868</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
