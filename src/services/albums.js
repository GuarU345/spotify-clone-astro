export const getAlbums = async () => {
  const res = await fetch("http://localhost:3000/api/albums", {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjRjZjVlYTlmLTAxMTEtNDdmZi05NzRjLTBkNGU2ZDcxNmUwOCIsImVtYWlsIjoiYWJlbEBnbWFpbC5jb20iLCJpYXQiOjE2OTg3OTUzNzN9.qFNJiXNrTPyP5-2pOieOqSAzDqCXIzxmm8CM0gv_WwI`,
    },
  });
  const albums = await res.json();
  return albums;
};
