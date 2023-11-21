import { useEffect, useState } from "react";
import { usePlayerStore } from "@store/usePlayerStore";
import { BsVolumeDown } from "react-icons/bs";
import { Slider } from "./Slider";

const Volume = () => {
  const { songPlaying, changeVolume, volume, setVolume } = usePlayerStore();

  const handleChange = (value) => {
    const newVolume = value / 100;
    setVolume(newVolume);
    changeVolume(newVolume);
  };

  useEffect(() => {
    if (songPlaying !== null) {
      setVolume(songPlaying.volume());
    }
  }, [songPlaying]);
  return (
    <div className="flex items-center">
      <button type="button">
        <BsVolumeDown className="text-2xl" />
      </button>
      <Slider
        className="w-[95px]"
        defaultValue={[volume]}
        max={100}
        min={0}
        onValueChange={handleChange}
      />
    </div>
  );
};

export default Volume;