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
    <div>
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "100%",
        }}
        className="bg-contain bg-bottom min-h-screen relative"
      >
        <div className="bg-white/80 p-2 rounded-2xl absolute top-4 w-[95%] left-8">
          <Steps
            current={current}
            onChange={onChange}
            items={stepItems}
            type="navigation"
          />
        </div>

        <div className="bg-amber-400 border border-amber-800 w-2/3 rounded-2xl absolute top-24 right-9 p-6">
          <h1 className="text-2xl font-dancing">
            Câu số {current + 1}: {question?.question}
          </h1>
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            className="mx-auto"
          />
        </div>

        <div className="absolute top-[22rem] right-9 w-2/3 h-auto pb-8 bg-white/90 pl-10 pt-6 rounded-2xl border border-amber-800">
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
            className="hover:shadow-2xl cursor-pointer absolute z-50 bottom-2 right-8 border-4 border-amber-800 bg-amber-700 text-white p-2 rounded-full"
          >
            Nộp Bài
          </h1>
        )}
      </div>
    </div>
  );
};

export default Quiz;
