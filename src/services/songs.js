import { API_URL } from "../utils/helpers";

export const getSongById = async (songId) => {
  const res = await fetch(`${API_URL}/songs/${songId}`, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM5ZGUyZThlLTRjYjQtNGQyNi1hMjBhLTU0YjFkNDIzYWRkNSIsImVtYWlsIjoiZ3VhcnVAZ21haWwuY29tIiwiaWF0IjoxNjk5MjQ2Nzc1fQ.Qce5869LNnTt_sdUghlPgdQQZg0RRLkBSnMq0BkK_Ow",
    },
  });
  const song = await res.json();
  return song;
};

export const streamSong = async (songId) => {
  const { body } = await fetch(`${API_URL}/songs/${songId}/stream`, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM5ZGUyZThlLTRjYjQtNGQyNi1hMjBhLTU0YjFkNDIzYWRkNSIsImVtYWlsIjoiZ3VhcnVAZ21haWwuY29tIiwiaWF0IjoxNjk5MjQ2Nzc1fQ.Qce5869LNnTt_sdUghlPgdQQZg0RRLkBSnMq0BkK_Ow",
    },
  });
  const bytes = await body.getReader();
};
