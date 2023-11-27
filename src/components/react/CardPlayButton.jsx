import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { usePlayerStore } from "../../store/usePlayerStore";
import { getSongsByAlbumId } from "src/services/songs";
import { useState } from "react";

const CardPlayButton = ({ id }) => {
  const [selectedAlbum, setSelectedAlbum] = useState(id);
  const {
    currentMusic,
    isPlaying,
    setIsPlaying,
    setCurrentMusic,
    setCurrentSong,
    playMusic,
  } = usePlayerStore();
  const isPlayingAlbum = isPlaying && currentMusic?.album.id === id;

  const handleClick = async () => {
    if (isPlayingAlbum) {
      setIsPlaying(false);
      return;
    }

    const data = await getSongsByAlbumId(selectedAlbum);
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
  };

  return (
    <button
      onClick={handleClick}
      className="rounded-full bg-green-500 p-3 text-2xl text-black hover:scale-105 hover:bg-green-400"
    >
      {isPlayingAlbum ? <BsPauseFill /> : <BsPlayFill />}
    </button>
  );
};

export default CardPlayButton;
