import { create } from "zustand";

export const useUsername = create((set) => ({
  username: "",
  setUsername: (username) => set({ username }),
}));
