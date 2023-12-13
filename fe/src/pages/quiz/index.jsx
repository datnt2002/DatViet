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
          <div className="basis-1/2 flex justify-center items-center">
            <div className=" w-full h-2/3">
              <div className="relative">
                <img className="" src={paperScroll} />
                <div className="absolute top-[15%] w-full z-50 px-10">
                  <h1 className="font-dancing font-bold text-2xl text-amber-800 mb-8 tracking-wide">
                    1. Thực dân Pháp bắt đầu xâm lược nước ta vào năm nào?
                  </h1>
                  <img
                    className="h-full mx-auto"
                    src="data:image/jpeg;base64,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"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex basis-1/2 justify-center  items-center px-24">
            <div className="w-full h-2/3 flex flex-col">
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
    </div>
  );
};

export default Quiz;
