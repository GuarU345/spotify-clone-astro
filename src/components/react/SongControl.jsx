import { usePlayerStore } from "@store/usePlayerStore";
import { Slider } from "@components/react/Slider";

const SongControl = () => {
  const { duration, progress, songPlaying, setProgress } = usePlayerStore();

  const formatTime = (time) => {
    if (time === "0:00") return time;
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleChange = () => {
    console.log(progress);
    songPlaying.seek(progress);
    setProgress(progress);
  };

  return (
    <div className="flex gap-4">
      <span className="text-gray-400">{formatTime(progress)}</span>
      <Slider
        className="w-[400px]"
        value={[progress]}
        min="0"
        max={duration}
        type="range"
        onValueChange={(value) => {
          console.log(value);
        }}
      />
      <span className="text-gray-400">{formatTime(duration)}</span>
    </div>
  );
};

export default SongControl;
