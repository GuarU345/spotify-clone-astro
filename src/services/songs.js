import axios from "axios";
import { API_URL } from "../utils/helpers";

export const getSongById = async (songId) => {
  const res = await fetch(`${API_URL}/songs/${songId}`, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImUxOWYxYzEwLWM1ZWQtNDkyMS05MmZlLTc5ZTM4NGJlMDI3OCIsImVtYWlsIjoiYWJlbEBnbWFpbC5jb20iLCJpYXQiOjE2OTkyODA4MDV9.v-365CZyEG5_ImP5HlrnVIQnLUdu9AOpLAs2n1FZIBA",
    },
  });
  const song = await res.json();
  return song;
};

export const streamSong = async (songId) => {
  const { body } = await fetch(`${API_URL}/songs/${songId}/stream`, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImUxOWYxYzEwLWM1ZWQtNDkyMS05MmZlLTc5ZTM4NGJlMDI3OCIsImVtYWlsIjoiYWJlbEBnbWFpbC5jb20iLCJpYXQiOjE2OTkyODA4MDV9.v-365CZyEG5_ImP5HlrnVIQnLUdu9AOpLAs2n1FZIBA",
    },
  });
  const bytes = await body.getReader();
};

export const getSongsByAlbumId = async (albumId) => {
  const res = await fetch(`${API_URL}/albums/${albumId}/songs`, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImUxOWYxYzEwLWM1ZWQtNDkyMS05MmZlLTc5ZTM4NGJlMDI3OCIsImVtYWlsIjoiYWJlbEBnbWFpbC5jb20iLCJpYXQiOjE2OTkyODA4MDV9.v-365CZyEG5_ImP5HlrnVIQnLUdu9AOpLAs2n1FZIBA",
    },
  });
  const songs = await res.json();
  return songs;
};

export const getUserLikedSongsByAlbum = async (songIds) => {
  const body = {
    songs: songIds,
  };
  const { data } = await axios.post(
    `${API_URL}/users/e19f1c10-c5ed-4921-92fe-79e384be0278/songs/`,
    body,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImUxOWYxYzEwLWM1ZWQtNDkyMS05MmZlLTc5ZTM4NGJlMDI3OCIsImVtYWlsIjoiYWJlbEBnbWFpbC5jb20iLCJpYXQiOjE2OTkyODA4MDV9.v-365CZyEG5_ImP5HlrnVIQnLUdu9AOpLAs2n1FZIBA",
      },
    }
  );
  return data;
};
