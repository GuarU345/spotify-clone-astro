export const getAlbums = async () => {
  const res = await fetch("http://localhost:3000/api/albums", {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImUxOWYxYzEwLWM1ZWQtNDkyMS05MmZlLTc5ZTM4NGJlMDI3OCIsImVtYWlsIjoiYWJlbEBnbWFpbC5jb20iLCJpYXQiOjE2OTkyODA4MDV9.v-365CZyEG5_ImP5HlrnVIQnLUdu9AOpLAs2n1FZIBA`,
    },
  });
  const albums = await res.json();
  return albums;
};
