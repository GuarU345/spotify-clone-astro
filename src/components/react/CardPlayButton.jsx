import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { usePlayerStore } from "../../store/usePlayerStore";
import { API_URL } from "../../utils/helpers";

const CardPlayButton = ({ id }) => {
  const {
    currentMusic,
    isPlaying,
    setIsPlaying,
    setCurrentMusic,
    setCurrentSong,
    playMusic,
  } = usePlayerStore();
  const isPlayingAlbum = isPlaying && currentMusic?.album.id === id;

  const handleClick = () => {
    if (isPlayingAlbum) {
      setIsPlaying(false);
      return;
    }

    fetch(`${API_URL}/albums/${id}/songs`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM5ZGUyZThlLTRjYjQtNGQyNi1hMjBhLTU0YjFkNDIzYWRkNSIsImVtYWlsIjoiZ3VhcnVAZ21haWwuY29tIiwiaWF0IjoxNjk5MjQ2Nzc1fQ.Qce5869LNnTt_sdUghlPgdQQZg0RRLkBSnMq0BkK_Ow",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const { songs, id, image, artist, name } = data;
        setIsPlaying(true);
        setCurrentMusic({
          songs,
          album: {
            id,
            name,
            image,
            artist,
          },
        });
        setCurrentSong(0);
        playMusic();
      });
  };

  return (
    <button
      onClick={handleClick}
      className="rounded-full bg-green-500 p-3 text-2xl text-black"
    >
      {isPlayingAlbum ? <BsPauseFill /> : <BsPlayFill />}
    </button>
  );
};

export default CardPlayButton;
