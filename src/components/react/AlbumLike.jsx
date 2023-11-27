import { useEffect, useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { checkUserLikesAlbum } from "src/services/albums";
import { dislikeAlbum, likeAlbum } from "src/services/user_actions";

const AlbumLike = ({ id }) => {
  const [likedAlbum, setlikedAlbum] = useState();

  const isLikedAlbum = async () => {
    const { liked } = await checkUserLikesAlbum(id);
    setlikedAlbum(liked);
  };

  const handleLikeAlbum = async () => {
    if (likedAlbum === false) {
      try {
        await likeAlbum(id);
        setlikedAlbum(true);
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        await dislikeAlbum(id);
        setlikedAlbum(false);
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    isLikedAlbum();
  }, []);
  return (
    <button
      onClick={handleLikeAlbum}
      className={`${likedAlbum ? "text-green-500" : "d-none"} text-2xl`}
    >
      {likedAlbum ? <BsHeartFill /> : <BsHeart />}
    </button>
  );
};

export default AlbumLike;
