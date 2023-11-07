export const getAlbums = async () => {
  const res = await fetch("http://localhost:3000/api/albums", {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImUxOWYxYzEwLWM1ZWQtNDkyMS05MmZlLTc5ZTM4NGJlMDI3OCIsImVtYWlsIjoiYWJlbEBnbWFpbC5jb20iLCJpYXQiOjE2OTkyODA4MDV9.v-365CZyEG5_ImP5HlrnVIQnLUdu9AOpLAs2n1FZIBA`,
    },
  });
  const albums = await res.json();
  return albums;
};

export const getLikedAlbums = async () => {
  const res = await fetch(
    "http://localhost:3000/api/users/e19f1c10-c5ed-4921-92fe-79e384be0278/albums",
    {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImUxOWYxYzEwLWM1ZWQtNDkyMS05MmZlLTc5ZTM4NGJlMDI3OCIsImVtYWlsIjoiYWJlbEBnbWFpbC5jb20iLCJpYXQiOjE2OTkyODA4MDV9.v-365CZyEG5_ImP5HlrnVIQnLUdu9AOpLAs2n1FZIBA`,
      },
    }
  );
  const likedAlbums = await res.json();
  return likedAlbums;
};

export const getAlbumById = async (albumId) => {
  const res = await fetch(`http://localhost:3000/api/albums/${albumId}/songs`, {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImUxOWYxYzEwLWM1ZWQtNDkyMS05MmZlLTc5ZTM4NGJlMDI3OCIsImVtYWlsIjoiYWJlbEBnbWFpbC5jb20iLCJpYXQiOjE2OTkyODA4MDV9.v-365CZyEG5_ImP5HlrnVIQnLUdu9AOpLAs2n1FZIBA`,
    },
  });
  const album = await res.json();
  return {
    ...album,
    type: "Álbum",
  };
};
