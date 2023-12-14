import React from "react";
import bg from "../../assets/imgs/truytimcovat.jpg";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../../store/appstate";
import { questionList } from "../../data/dummy";

const ChooseQuiz = () => {
  const { randomQuestionTracNghiemSet } = useAppStore();
  const navigate = useNavigate();
  const listQuiz = [
    { quizId: 1, title: "Bộ Đề 1", description: "Lịch sử" },
    { quizId: 2, title: "Bộ Đề 2", description: "Lịch sử" },
    { quizId: 3, title: "Bộ Đề 3", description: "Lịch sử" },
    { quizId: 4, title: "Bộ Đề 4", description: "Lịch sử" },
    { quizId: 5, title: "Bộ Đề 5", description: "Lịch sử" },
  ];

  // useEffect(() => {
  //   getListTracNghiemSet();
  // }, []);

  const handleChooseQuiz = (quizId) => {
    randomQuestionTracNghiemSet(questionList);
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
                <h1 className="font-dancing text-2xl">{quiz?.title}</h1>
                <p className="font-dancing text-xl">{quiz?.description}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ChooseQuiz;
