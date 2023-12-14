import axiosClient from "./api.service";

export const createQuizTracNghiem = (data) => {
  const body = {
    title: data?.title,
    content: data?.content,
    quizType: "Multiple-choice questions",
  };
  return axiosClient
    .post("quizzes", body, {})
    .then((res) => {
      return res;
    })
    .catch((err) => err);
};

export const createQuestionsTracNghiem = (data) => {
  const body = {
    quizId: data?.quizId,
    questions: data?.questions,
  };
  return axiosClient
    .post("questions", body, {})
    .then((res) => {
      return res;
    })
    .catch((err) => err);
};

export const getListTracNghiem = () => {
  return axiosClient
    .get("quizzes")
    .then((res) => {
      return res;
    })
    .catch((err) => err);
};

export const xoaBoDeTracNghiem = (data) => {
  console.log(data);
  return axiosClient
    .delete(`quizzes/${data}`)
    .then((res) => {
      return res;
    })
    .catch((err) => err);
};
