import { API_URL, token, userId } from "src/utils/helpers";

export const getAlbums = async () => {
  const res = await fetch(`${API_URL}/albums`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const albums = await res.json();
  return albums;
};

export const getLikedAlbums = async () => {
  const res = await fetch(`${API_URL}/users/${userId}/albums`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const likedAlbums = await res.json();
  return likedAlbums;
};

export const checkUserLikesAlbum = async (albumId) => {
  const res = await fetch(`${API_URL}/users/${userId}/albums/${albumId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const isLikedAlbum = await res.json();
  return isLikedAlbum;
};

export const getAlbumById = async (albumId) => {
  const res = await fetch(`${API_URL}/albums/${albumId}/songs`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const album = await res.json();
  return {
    ...album,
    type: "Álbum",
  };
};
