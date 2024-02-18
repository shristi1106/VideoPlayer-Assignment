import React, { useState } from 'react';
import '../Style/Playlist.css';
import { Grid } from '@mui/material';


function reorderVideos(videos, startIndex, endIndex) {
    const result = Array.from(videos);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  }

const Playlist = ({ videos, onSelectVideo, onReorderVideos ,maxPlaylistHeight}) => {
  const [draggingIndex, setDraggingIndex] = useState(null);

  const handleDragStart = (e, index) => {
    e.dataTransfer.effectAllowed = 'move';
    setDraggingIndex(index);
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    if (draggingIndex === null || draggingIndex === index) return;

    onReorderVideos(reorderVideos(videos, draggingIndex, index));
    setDraggingIndex(index);
  };



  return (
    <div>
    <p  className='playlist-title'> <b className='b'>Playlist</b></p>
    <div className='playlist' >
    
      {videos.map((video, index) => ( 
        <div 
          key={video.sources[0]}
          className='draggable'
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDragOver={(e) => handleDragOver(e, index)}
          onClick={() => onSelectVideo(video)}
        >
        <Grid container spacing={2} title={video.title}>
        <Grid item>
          <div className="serial-number" style={{paddingTop: "16px"}}>{index + 1}</div>
        </Grid>
        <Grid item>
          <img src={video.thumb} className="thumbnail" />
        </Grid>
        <Grid item>
          <div className="video-info">
            <div className='video-title'   >
            {video.title}
            </div>
          </div>
        </Grid>
      </Grid>
        </div>
      ))}
    </div>
    </div>
  );
};


export default Playlist;