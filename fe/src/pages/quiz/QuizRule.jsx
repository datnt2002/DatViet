import React from "react";

import paperScroll from "../../assets/imgs/paperscroll.png";
import bg from "../../assets/imgs/backgr.jpg";
import { useNavigate } from "react-router-dom";

const QuizRule = () => {
  const navigate = useNavigate();
  const handleStartTruyTim = () => {
    navigate("/truy-tim-bao-vat");
  };
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${bg})`,
        }}
        className="bg-contain bg-bottom h-screen"
      >
        <div className="h-screen relative">
          <img src={paperScroll} alt="" className=" absolute w-full h-full" />
          <div className="absolute z-50 w-full text-center ">
            <h1 className=" font-dancing font-bold text-8xl text-amber-800 mt-20 mb-20 tracking-wide">
              LUẬT CHƠI
            </h1>

            <div className="my-5">
              <p className="text-4xl my-10 font-dancing">
                1. Người chơi đọc câu hỏi và chọn đáp án đúng cho từng câu.
              </p>
              <p className="text-4xl my-10 font-dancing">
                2. Khi đã hoàn thành 15 câu hỏi, người chơi chọn ô “Đã hoàn
                thành bài”.
              </p>
              <p className="text-4xl my-10 font-dancing">
                3. Người chơi theo dõi trang thống kê đáp án và phần tư liệu
                tham khảo.
              </p>
            </div>
          </div>
          <h1
            onClick={handleStartTruyTim}
            className="hover:shadow-2xl cursor-pointer absolute z-50 bottom-20 right-28 border-4 border-amber-800 bg-amber-700 text-white p-5 rounded-full text-lg"
          >
            Bắt đầu
          </h1>
        </div>
      </div>
    </div>
  );
};

export default QuizRule;
