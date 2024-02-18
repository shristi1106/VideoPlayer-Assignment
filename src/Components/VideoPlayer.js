import React, { useState, useEffect, useRef } from "react";
const VideoPlayer = ({
  src,
  onPlay,
  onPause,
  onNextVideo,
  onVideoHeightChange
}) => {
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = src;
    }
  }, [src,]);

  const handleEnded = () => {
    onNextVideo();
  };

  return (
    <div className="">
      <video
        ref={videoRef}
        controls
        autoPlay
        onPlay={onPlay}
        onPause={onPause}
        onEnded={handleEnded}
      ></video>
    </div>
  );
};

export default VideoPlayer;
