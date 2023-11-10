import { API_URL } from "../utils/helpers";

export const getSongById = async (songId) => {
  const res = await fetch(`${API_URL}/songs/${songId}`);
  const song = await res.json();
  return song;
};
