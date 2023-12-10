import React, { useEffect, useState } from "react";

import { Content } from "antd/es/layout/layout";
import CreateQuestionForm from "../../components/Container/FormContainer/CreateQuestionForm";

const CreateQuestion = () => {
  return (
    <Content>
      <div
        className="p-6 min-h-screen h-auto"
        style={{
          // backgroundImage: `url(${repeatBg})`,
          backgroundSize: "100% auto",
        }}
      >
        <div className="flex flex-col border border-black bg-white/50 rounded-2xl p-6">
          <div className="flex justify-between">
            <h1 className="font-semibold text-2xl mb-5">Tạo mới bộ đề</h1>
          </div>
          <CreateQuestionForm />
        </div>
      </div>
    </Content>
  );
};

export default CreateQuestion;
