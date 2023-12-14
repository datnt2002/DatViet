import React from "react";
import bg from "../../assets/imgs/vuotchuongbg.jpg";
import { useNavigate } from "react-router-dom";
const Rule = () => {
  const navigate = useNavigate();
  const handleStartVuotChuong = () => {
    navigate("/obstacle");
  };
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
      }}
      className="bg-contain bg-bottom min-h-screen"
    >
      <div className="h-screen">
        <div className="flex flex-col w-full text-center h-full self-center ">
          <h1 className=" font-dancing font-bold text-8xl text-amber-800 mt-10 mb-10 tracking-wide">
            VƯỢT CHƯỚNG NGẠI VẬT
          </h1>

          <div className="my-5">
            <p className="text-4xl my-10 font-dancing">
              1. Người chơi lựa chọn câu hỏi hàng ngang bất kỳ và điền đáp án
              của câu hỏi đó.
            </p>
            <p className="text-4xl my-10 font-dancing">
              2. Khi hoàn thành câu hỏi hàng ngang, từ khoá hàng dọc sẽ xuất
              hiện.
            </p>
            <p className="text-4xl my-10 font-dancing">
              3. Người chơi theo dõi tư liệu tham khảo về từ khoá đó.
            </p>
          </div>
          <h1
            onClick={handleStartVuotChuong}
            className="hover:shadow-2xl mx-auto cursor-pointer w-fit border-4 border-amber-800 bg-amber-700 text-white p-5 rounded-full text-lg"
          >
            Bắt đầu
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Rule;
