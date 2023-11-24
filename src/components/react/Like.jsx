import { BsHeart, BsHeartFill } from "react-icons/bs";
import { dislikeSong, likeSong } from "src/services/user_actions";

const Like = ({ liked, songId }) => {
  const handleLike = async () => {
    if (liked === false) {
      try {
        await likeSong(songId);
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        dislike = await dislikeSong(songId);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <button
        onClick={handleLike}
        className={`${liked ? "text-green-500" : "d-none"} text-lg`}
      >
        {liked ? <BsHeartFill /> : <BsHeart />}
      </button>
    </>
  );
};

export default Like;
