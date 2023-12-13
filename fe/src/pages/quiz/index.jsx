import React from "react";

import paperScroll from "../../assets/imgs/paperscroll.png";
import bg from "../../assets/imgs/backgr.jpg";
import { Pagination } from "antd";

const Quiz = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${bg})`,
        }}
        className="bg-cover bg-bottom min-h-screen"
      >
        <div className="flex" style={{ height: "calc(100vh - 64px)" }}>
          <div className="basis-1/2 flex justify-center items-center">
            <div className=" w-full h-2/3">
              <div className="relative">
                <img className="" src={paperScroll} />
                <div className="absolute top-[15%] w-full z-50 px-10">
                  <h1 className="font-dancing font-bold text-2xl text-amber-800 mb-8 tracking-wide">
                    1. Thực dân Pháp bắt đầu xâm lược nước ta vào năm nào?
                  </h1>
                  <img className="h-full mx-auto" alt="" src="" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex basis-1/2 justify-center  items-center px-24 py-10">
            <div className="w-full h-2/3 flex flex-col justify-between">
              <div className="w-2/3 mx-auto rounded-lg border-2 flex flex-col items-center justify-center bg-white py-2 border-orange-600">
                <h4>Chọn câu hỏi</h4>
                <Pagination defaultCurrent={1} total={40} />
              </div>
              <div className="self-start w-full cursor-pointer border-black  py-3 px-4 rounded-3xl bg-gray-100/90">
                <h1 className="text-xl  font-semibold">A. 1858</h1>
              </div>
              <div className="self-start w-full cursor-pointer border-black  py-3 px-4 rounded-3xl bg-gray-100/90">
                <h1 className="text-xl  font-semibold">B. 1859</h1>
              </div>
              <div className="self-start w-full cursor-pointer border-black  py-3 px-4 rounded-3xl bg-gray-100/90">
                <h1 className="text-xl  font-semibold">C. 1862</h1>
              </div>
              <div className="self-start  w-full selection:cursor-pointer border-black  py-3 px-4 rounded-3xl bg-gray-100/90">
                <h1 className="text-xl  font-semibold">D. 1868</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
