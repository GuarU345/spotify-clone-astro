import { create } from "zustand";

export const usePlayerStore = create((set) => ({
  currentSong: null,
  setCurrentSong: (state) => set({ currentSong: state }),
}));
