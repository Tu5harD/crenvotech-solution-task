import React, { useRef, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();

  const handlePlayPause = () => {
    setPlayVideo((prevPlayVideo) => {
      const newPlayVideo = !prevPlayVideo;
      if (newPlayVideo) {
        vidRef.current.play();
      } else {
        vidRef.current.pause();
      }
      return newPlayVideo;
    });
  };

  return (
    <div className="relative h-screen w-full">
      <video
        ref={vidRef}
        src="/assets/meal.mp4"
        type="video/mp4"
        className="w-full h-full object-cover"
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black bg-opacity-65 flex items-center justify-center">
        <button
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border border-yellow-600 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-yellow-600 hover:bg-opacity-30"
          onClick={handlePlayPause}
          aria-label={playVideo ? "Pause video" : "Play video"}
        >
          {playVideo ? (
            <BsPauseFill className="text-white text-2xl sm:text-3xl md:text-4xl" />
          ) : (
            <BsFillPlayFill className="text-white text-2xl sm:text-3xl md:text-4xl" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Intro;
