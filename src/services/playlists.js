import { API_URL, token, userId } from "src/utils/helpers";

export const getLikedSongsPlaylist = async () => {
  const res = await fetch(`${API_URL}/users/${userId}/playlists/love`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const likedPlaylist = await res.json();
  return {
    ...likedPlaylist,
    type: "Lista",
  };
};
