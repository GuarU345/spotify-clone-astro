import { create } from "zustand";
import { Howl } from "howler";
import { STREAMSONGS } from "../../public/songs";

export const usePlayerStore = create((set, get) => ({
  songPlaying: null,
  isPlaying: false,
  volume: 0.1,
  duration: "0:00",
  progress: "0:00",
  currentMusic: { album: null, songs: [] },
  currentSong: 0,
  progressInterval: null,
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setVolume: (volume) => set({ volume }),
  setCurrentMusic: (currentMusic) => set({ currentMusic }),
  setCurrentSong: (currentSong) => set({ currentSong }),
  setProgress: (progress) => set({ progress }),
  playMusic: async () => {
    const { currentMusic, currentSong, volume, isPlaying } = get();
    const { songs } = currentMusic;
    const findSong = songs[currentSong];
    let { track } = STREAMSONGS.find(
      (streamsong) => streamsong.name === findSong.name
    );
    const songPlaying = new Howl({
      src: [track],
      volume,
    });
    songPlaying.load();
    songPlaying.on("load", () => {
      const duration = songPlaying.duration();
      set({ duration });
    });
    const existingInterval = get().progressInterval;
    if (existingInterval) {
      clearInterval(existingInterval);
    }
    songPlaying.play();
    songPlaying.on("load", () => {
      const interval = setInterval(() => {
        const progress = songPlaying.seek();
        set({ progress });

        if (!isPlaying) {
          clearInterval(interval);
        }
      }, 1000);
      set({ progressInterval: interval });
    });
    set({ songPlaying });
  },
  goNextSong: () => {
    const { currentMusic, currentSong, playMusic, songPlaying } = get();
    const { songs } = currentMusic;
    const nextSong = currentSong + 1;
    if (nextSong < songs.length) {
      set({ currentSong: nextSong });
      songPlaying.stop();
      set({ duration: "0:00" });
      set({ progress: "0:00" });
      playMusic();
    } else {
      set({ currentSong: 0 });
      songPlaying.stop();
      set({ duration: "0:00" });
      set({ progress: "0:00" });
      playMusic();
    }
  },
  goPreviousSong: () => {
    const { currentMusic, currentSong, playMusic, songPlaying } = get();
    const { songs } = currentMusic;
    const previousSong = currentSong - 1;
    if (previousSong >= 0) {
      set({ currentSong: previousSong });
      songPlaying.stop();
      set({ duration: "0:00" });
      set({ progress: "0:00" });
      playMusic();
    } else {
      const lastSong = songs.length - 1;
      set({ currentSong: lastSong });
      songPlaying.stop();
      set({ duration: "0:00" });
      set({ progress: "0:00" });
      playMusic();
    }
  },
  changeVolume: (volume) => {
    const { songPlaying } = get();
    songPlaying.volume(volume);
  },
}));
