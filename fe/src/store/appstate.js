import { create } from "zustand";
import {
  createQuestionsTracNghiem,
  createQuizTracNghiem,
  getListTracNghiem,
} from "../services/tracNghiem.service";

export const useAppStore = create((set, get) => ({
  quiz: {},
  createQuizTracNghiemSet: async (data) => {
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
}));
