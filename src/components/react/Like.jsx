import { useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { dislikeSong, likeSong } from "src/services/user_actions";

const Like = ({ liked, songId }) => {
  const [isLiked, setIsLiked] = useState(liked);
  const handleLike = async () => {
    if (liked === false) {
      try {
        await likeSong(songId);
        setIsLiked(true);
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        await dislikeSong(songId);
        setIsLiked(false);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <button onClick={handleLike} className="text-lg">
        {isLiked ? (
          <p className="text-green-500">
            <BsHeartFill />
          </p>
        ) : (
          <BsHeart />
        )}
      </button>
    </>
  );
};

export default Like;
