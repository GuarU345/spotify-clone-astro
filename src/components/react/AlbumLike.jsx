import { useEffect, useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { checkUserLikesAlbum } from "src/services/albums";

const AlbumLike = ({ id }) => {
  const [likedAlbum, setlikedAlbum] = useState();

  const isLikedAlbum = async () => {
    const { liked } = await checkUserLikesAlbum(id);
    setlikedAlbum(liked);
  };

  useEffect(() => {
    isLikedAlbum();
  }, []);
  return (
    <button className={`${likedAlbum ? "text-green-500" : "d-none"} text-2xl`}>
      {likedAlbum ? <BsHeartFill /> : <BsHeart />}
    </button>
  );
};

export default AlbumLike;
