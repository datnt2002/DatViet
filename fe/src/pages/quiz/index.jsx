import React, { useEffect, useState } from "react";

import bg from "../../assets/imgs/truytimcovat.jpg";
import { Radio, Space, Steps } from "antd";
import { useNavigate } from "react-router-dom";

import { questionList } from "../../data/dummy.ts";

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
    console.log("onChange:", value);
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
        <img
          src="data:image/jpeg;base64,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"
          alt=""
          className="mx-auto"
        />
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
