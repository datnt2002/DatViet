import axiosClient from "./api.service";

export const createGameTopicTracNghiem = (data) => {
  return axiosClient
    .post("games", { gameName: data?.gameName, type: 1 }, {})
    .then((res) => {
      return res;
    })
    .catch((err) => err);
};

export const createQuizTracNghiem = (data) => {
  const body = {
    title: data?.title,
    content: data?.content,
    gameId: data?.gameId,
    quizType: 1,
  };
  return axiosClient
    .post("quizzes", body, {})
    .then((res) => {
      return res;
    })
    .catch((err) => err);
};
