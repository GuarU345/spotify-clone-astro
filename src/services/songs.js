import axios from "axios";
import { API_URL, token, userId } from "../utils/helpers";

export const getSongById = async (songId) => {
  const res = await fetch(`${API_URL}/songs/${songId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const song = await res.json();
  return song;
};

export const streamSong = async (songId) => {
  const { body } = await fetch(`${API_URL}/songs/${songId}/stream`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const bytes = await body.getReader();
};

export const getSongsByAlbumId = async (albumId) => {
  const res = await fetch(`${API_URL}/albums/${albumId}/songs`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const songs = await res.json();
  return songs;
};

export const getUserLikedSongsByAlbum = async (songIds) => {
  const body = {
    songs: songIds,
  };
  const { data } = await axios.post(`${API_URL}/users/${userId}/songs/`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};
