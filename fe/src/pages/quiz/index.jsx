import React, { useEffect, useState } from "react";

import bg from "../../assets/imgs/truytimcovat.jpg";
import { Radio, Space, Steps } from "antd";
import { useNavigate } from "react-router-dom";

import { questionList } from "../../data/dummy";

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [question, setQuestion] = useState({});
  const [isLastStep, setIsLastStep] = useState(false);
  console.log(question);
  const navigate = useNavigate();

  useEffect(() => {
    setQuestion(questionList[current]);
    // Kiểm tra xem có phải là bước cuối cùng không
    setIsLastStep(current === questionList.length - 1);
  }, [current]);

  useEffect(() => {
    setQuestion(questionList[0]);
  }, []);
  const onChange = (value) => {
    setQuestion(questionList[current]);
    setCurrent(value);
  };

  const stepItems = questionList.map((ques, index) => {
    return {
      key: index + 1,
      title: `Q` + (index + 1),
      status: "wait",
    };
  });

  const handleSubmit = () => {
    navigate("/truy-tim-bao-vat-summary");
  };

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
        <img src="" alt="" className="mx-auto" />
      </div>

      <div className=" mx-auto mb-10 w-2/3 h-auto pb-8 bg-white/90 pl-10 pt-6 rounded-2xl border border-amber-800">
        <Radio.Group>
          <Space direction="vertical" size={"large"}>
            <Radio value={1} className="text-lg">
              {question?.option1?.content}
            </Radio>{" "}
            <Radio value={2} className="text-lg">
              {question?.option2?.content}
            </Radio>{" "}
            <Radio value={3} className="text-lg">
              {question?.option3?.content}
            </Radio>{" "}
            <Radio value={4} className="text-lg">
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
