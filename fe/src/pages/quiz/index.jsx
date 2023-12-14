import React, { useEffect, useState } from "react";

import bg from "../../assets/imgs/truytimcovat.jpg";
import { Radio, Space, Steps } from "antd";
import { useNavigate } from "react-router-dom";

import { useAppStore } from "../../store/appstate";

const Quiz = () => {
  const { listQuestions, updateQuestionTracNghiemAnswer } = useAppStore();
  
  const [current, setCurrent] = useState(0);
  const [question, setQuestion] = useState({});
  const [isLastStep, setIsLastStep] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setQuestion(listQuestions[current]);
    // Kiểm tra xem có phải là bước cuối cùng không
    setIsLastStep(current === listQuestions.length - 1);
  }, [current]);

  useEffect(() => {
    setQuestion(listQuestions[0]);
  }, []);

  const onChange = (value) => {
    setQuestion(listQuestions[current]);
    setCurrent(value);
  };

  const stepItems = listQuestions.map((ques, index) => {
    return {
      key: index + 1,
      // title: `Q` + (index + 1),
      status: "wait",
    };
  });

  const handleSubmit = () => {
    navigate("/truy-tim-bao-vat-summary");
  };

  const handleSelectAnswer = (e)=>{
    updateQuestionTracNghiemAnswer(question?.id, e.target.value);
  }

  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "100%",
      }}
      className="bg-contain bg-bottom min-h-screen"
    >
      <div className="bg-white/80 mt-4 p-2 rounded-2xl mx-auto w-[95%] ">
        <Steps
          current={current}
          onChange={onChange}
          items={stepItems}
          type="navigation"
        />
      </div>

      <div className="bg-amber-400 border border-amber-800 w-2/3 rounded-2xl p-6 mx-auto my-6">
        <h1 className="text-2xl font-dancing">
          Câu số {current + 1}: {question?.question}
        </h1>
        {question?.imgs?.length > 0 && (
          <img src={question?.imgs[0]} alt="" className="mx-auto" />
        )}
      </div>

      <div className=" mx-auto mb-10 w-2/3 h-auto pb-8 bg-white/90 pl-10 pt-6 rounded-2xl border border-amber-800">
        <Radio.Group onChange={handleSelectAnswer} value={listQuestions[current]?.selectedAnswerIndex}>
          <Space direction="vertical" size={"large"}>
            <Radio value={question?.option1?.index} className="text-lg">
              {question?.option1?.content}
            </Radio>
            <Radio value={question?.option2?.index} className="text-lg">
              {question?.option2?.content}
            </Radio>
            <Radio value={question?.option3?.index} className="text-lg">
              {question?.option3?.content}
            </Radio>
            <Radio value={question?.option4?.index} className="text-lg">
              {question?.option4?.content}
            </Radio>
          </Space>
        </Radio.Group>
      </div>

      {isLastStep && (
        <h1
          onClick={handleSubmit}
          className="hover:shadow-2xl cursor-pointer w-20 text-centers mx-auto border-4 border-amber-800 bg-amber-700 text-white p-2 mb-4 rounded-full"
        >
          Nộp Bài
        </h1>
      )}
    </div>
  );
};

export default Quiz;
