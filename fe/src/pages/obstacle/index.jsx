import React, { useEffect } from "react";
import "./gamestyle.css";
import { Badge, Typography, List, Flex, Button } from "antd";
import { crosswordData } from "./data/dummy_cross";
import { BulbOutlined } from "@ant-design/icons";

const { Text } = Typography;

const calSpace = (typedAnswer) => {
  let maxlength = 0;
  for (var j = 0; j < crosswordData.length; j++) {
    var typedAnswerNumber = Number(crosswordData[j].typedAnswer);
    if (maxlength < typedAnswerNumber) {
      maxlength = typedAnswerNumber;
    }
  }
  return (maxlength - typedAnswer + 1) * 50;
};

const Obstacle = () => {
  useEffect(() => {

    return () => {};
  }, []);

  const renderRowItem = (item, index) => {
    let crossInputs = [];
    let spaceLeft = calSpace(item.typedAnswer);
    for (let index = 1; index <= item?.answer?.length; index++) {
      crossInputs.push(index);
    }

    const handleOpenRow = (rowId) => {
      let currentAnswerArr = document
        .getElementById(rowId)
        .querySelectorAll("input");
      let currentAnswer = "";
      if (currentAnswerArr) {
        currentAnswerArr.forEach((item, index) => {
          if (item.value) {
            currentAnswer += item.value.toUpperCase();
          }
        });
      }
      if (currentAnswer === item.answer) {
        document.getElementById(rowId).className = "";
        document.getElementById(rowId).classList.add("cross-correct");
      } else {
        document.getElementById(rowId).className = "";
        document.getElementById(rowId).classList.add("cross-wrong");
      }
    };
    const handleOnKeyUp = (event) => {
      if (
        event.keyCode === 8 ||
        event.keyCode == 32 ||
        event.keyCode == 191 ||
        event.keyCode == 190
      ) {
        return;
      }
      try {
        var currentTabindexElement = event.target
          .getAttribute("tabindex")
          ?.toString()
          ?.split("-");
        var nextEle = `${currentTabindexElement[0]}-${
          Number(currentTabindexElement[1]) + 1
        }`;
        document.querySelector(`[tabindex=${nextEle}]`).focus();
      } catch {}
    };

    return (
      <div id={`cross-row${index}`}>
        <Flex gap={"middle"} vertical={false} align="center">
          {/* <Badge count={index + 1} color="#faad14" /> */}
          <div className={`flex flex-row`} style={{ marginLeft: spaceLeft }}>
            {crossInputs.map((inputIndex, index) => {
              return (
                <input
                  key={inputIndex}
                  className={`crossword-letter ${
                    item.typedAnswer === index + 1
                      ? "crossword-letter-keyword"
                      : ""
                  }`}
                  // onkeyup="skipToNext(this);"
                  type="text"
                  minlength="1"
                  maxlength="1"
                  pattern="^[A-Za-z]{1}$"
                  required="required"
                  onKeyUp={handleOnKeyUp}
                  // value=""
                  tabindex={`${item.answer}-${inputIndex}`}
                  // data-type="hightlight"
                />
              );
            })}
          </div>
          <Button
            icon={<BulbOutlined />}
            onClick={() => handleOpenRow(`cross-row${index}`)}
          >
            Mở ô chữ {index + 1}
          </Button>
        </Flex>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center">
      <h4 className="font-dancing text-3xl mb-2">Vượt chướng ngại vật</h4>
      <div className="crossword-container">
        <List
          itemLayout="horizontal"
          dataSource={crosswordData}
          renderItem={renderRowItem}
        />
      </div>
      <div>
        <h5 className="text-center font-dancing text-2xl">Bộ Câu Hỏi</h5>
        <List
          itemLayout="horizontal"
          dataSource={crosswordData}
          renderItem={(row, index) => (
            <li key={row.typedAnswer}>
              <div className="flex flex-row">
                <Badge count={index + 1} color="#faad14" />
                <Text className="ml-2">{row.question}</Text>
              </div>
            </li>
          )}
        />
      </div>
    </div>
  );
};

export default Obstacle;
