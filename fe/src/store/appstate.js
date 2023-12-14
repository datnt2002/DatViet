import { create } from "zustand";
import {
  createQuestionsTracNghiem,
  createQuestionsTuLuan,
  createQuizTracNghiem,
  getListTracNghiem,
  getListTuLuan,
} from "../services/tracNghiem.service";
import { shuffleArray } from "../pages/quiz/helper";

export const useAppStore = create((set, get) => ({
  //fe
  listQuestions: [],
  randomQuestionTracNghiemSet: (data) => {
    const randomArr = shuffleArray(data).slice(0, 15);
    set({ listQuestions: randomArr });
  },
  updateQuestionTracNghiemAnswer: (questionId, curAnswerVal) => set((state) => ({
    ...state,
    listQuestions: state.listQuestions.map((question) =>{
      if(questionId === question?.id){
        return {
          ...question,
          selectedAnswerIndex: curAnswerVal
        }
      }
      return question;
    })
  })),

  listQuestionsTuLuan: [],
  randomQuestionTuLuanSet: (data) => {
    const randomArr = shuffleArray(data).slice(0, 15);
    set({ listQuestionsTuLuan: randomArr });
  },

  //api
  quiz: {},
  createQuizTracNghiemSet: async (data) => {
    console.log(data);
    const newData = await createQuizTracNghiem(data);
    if (newData.status === 201) {
      set({ quiz: newData?.data });
    }
  },
  questions: [],
  createQuestionsTracNghiemSet: async (data) => {
    console.log(data);
    const newData = await createQuestionsTracNghiem({
      quizId: data?.quizId,
      questions: data?.questions,
    });
    console.log(newData);
  },
  listQuiz: [],
  getListTracNghiemSet: async () => {
    const newData = await getListTracNghiem();
    console.log(newData);
    if (newData?.status === 200) {
      set({ listQuiz: newData?.data });
    }
  },

  //giai ma kho bau tu luan
  questionstuLuan: [],
  createQuestionsTuLuanSet: async (data) => {
    console.log(data);
    const newData = await createQuestionsTuLuan({
      quizId: data?.quizId,
      questions: data?.questions,
    });
    console.log(newData);
  },
  listQuizTuLuan: [],
  getListTuLuanSet: async () => {
    const newData = await getListTuLuan();
    console.log(newData);
    if (newData?.status === 200) {
      set({ listQuizTuLuan: newData?.data });
    }
  },
}));
