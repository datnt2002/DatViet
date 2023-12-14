import React, { useEffect } from "react";
import "./gamestyle.css";
import { Badge, Typography, List, Flex, Button } from "antd";
import { crosswordData } from "./data/dummy_cross";
import { DropboxOutlined } from "@ant-design/icons";

const { Text } = Typography;

const calSpace = (typedAnswer)=>{
  let maxlength = 0;
  for (var j = 0; j < crosswordData.length; j++) {
    var typedAnswerNumber = Number(crosswordData[j].typedAnswer);
    if (maxlength < typedAnswerNumber) {
      maxlength = typedAnswerNumber;
    }
  }
  return (maxlength - typedAnswer +1) * 50;
}

const Obstacle = () => {
  useEffect(() => {
    // innitGame();

    return () => {};
  }, []);

  const renderRowItem = (item, index) => {
    let crossInputs = [];
    let spaceLeft = calSpace(item.typedAnswer);
    console.log("spaceLeft", spaceLeft);
    for (let index = 1; index <= item?.answer?.length; index++) {
      crossInputs.push(index);
    }

    const handleOpenRow = () => {};
    const handleOnKeyUp = (event) => {
      if (event.keyCode === 8 || event.keyCode == 32 || event.keyCode == 191 || event.keyCode == 190) {
        return;
      }
      try {
        var currentTabindexElement = event.target.getAttribute("tabindex")?.toString()?.split('-');
        var nextEle = `${currentTabindexElement[0]}-${Number(currentTabindexElement[1])+1}`;
        document.querySelector(`[tabindex=${nextEle}]`).focus();
      } catch {}
    };

    return (
      <div className={``}>
        <Flex gap={"middle"} vertical={false}>
          <Badge count={index + 1} color="#faad14" />
          <div
            className={`flex flex-row`}
            style={{ marginLeft: spaceLeft}}
          >
            {crossInputs.map((inputIndex, index) => {
              return (
                <input
                  key={inputIndex}
                  className={`crossword-letter`}
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

          <Button icon={<DropboxOutlined />} onClick={handleOpenRow} />
        </Flex>
      </div>
    );
  };

  return (
    <div>
      <div className="crossword-container">
        <List
          itemLayout="horizontal"
          dataSource={crosswordData}
          renderItem={renderRowItem}
        />
      </div>
      <div>
        {/* <button >CHECK CROSSWORD</button> */}
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
