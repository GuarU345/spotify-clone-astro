import { token, userId } from "src/utils/helpers";

export const getAlbums = async () => {
  const res = await fetch("http://localhost:3000/api/albums", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const albums = await res.json();
  return albums;
};

export const getLikedAlbums = async () => {
  const res = await fetch(`http://localhost:3000/api/users/${userId}/albums`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const likedAlbums = await res.json();
  return likedAlbums;
};

export const getAlbumById = async (albumId) => {
  const res = await fetch(`http://localhost:3000/api/albums/${albumId}/songs`, {
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
