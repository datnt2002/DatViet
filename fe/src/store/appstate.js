import { create } from "zustand";
import {
  createGameTopicTracNghiem,
  createQuizTracNghiem,
} from "../services/tracNghiem";

export const useAppStore = create((set, get) => ({
  game: {},
  createGameTopicTracNghiemSet: async (data) => {
    const newData = await createGameTopicTracNghiem(data);
    if (newData.status === 200) {
      set({ game: newData.data });
    }
  },
  quiz: {},
  createQuizTracNghiemSet: async (data) => {
    const newData = await createQuizTracNghiem(data);
    if (newData.status === 201) {
      set({ quiz: newData });
    }
  },
}));
