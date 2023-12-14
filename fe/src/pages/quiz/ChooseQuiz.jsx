import React, { useEffect } from "react";
import bg from "../../assets/imgs/truytimcovat.jpg";
import { useAppStore } from "../../store/appstate";
import { useNavigate } from "react-router-dom";

const ChooseQuiz = () => {
  const { listQuiz, getListTracNghiemSet } = useAppStore();
  const navigate = useNavigate();
  console.log(listQuiz);

  useEffect(() => {
    getListTracNghiemSet();
  }, []);

  const handleChooseQuiz = (quizId) => {
    navigate(`/truy-tim-bao-vat`);
  };
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "100%",
      }}
      className="bg-contain bg-bottom min-h-screen"
    >
      <div className="min-h-screen flex flex-col justify-center">
        {listQuiz.length > 0 &&
          listQuiz.map((quiz, index) => {
            return (
              <div
                className=" bg-white/80 rounded-3xl w-1/2 mx-auto text-center cursor-pointer my-6 p-6"
                key={index}
                onClick={() => handleChooseQuiz(quiz?.quizId)}
              >
                <h1 className="font-dancing text-2xl">
                  Bộ đề {index + 1}: {quiz?.title}
                </h1>
                <p className="font-dancing text-xl">{quiz?.description}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ChooseQuiz;
