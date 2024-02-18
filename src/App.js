import React, { useState } from 'react';
import VideoPlayer from './Components/VideoPlayer';
import Playlist from './Components/Playlist';
import './Style/App.css';
import Grid from '@mui/material/Grid';


const  mediaJSON = { "categories" : [ { "name" : "Movies",
"videos" : [ 
{     "sources" : [ "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" ],
      "thumb" : "https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg?w=1060&t=st=1708279310~exp=1708279910~hmac=e9751141158f1064deac47d82a0f9d05314326f24f65aba2c59b4e021b5a7d31",
      "title" : "Dream Land for Creatures"
    },
    { 
      "sources" : [ "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4" ],
      "thumb" : "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/284378_2200-732x549.jpg",
      "title" : "Talk with peoples"
    },
    {
      "sources" : [ "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" ],
      "thumb" : "https://mcgovern.mit.edu/wp-content/uploads/2022/08/dreams_900x600.jpg",
      "title" : "Trailors"
    },
    { 
      "sources" : [ "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" ],
      "thumb" : "https://storage.googleapis.com/gtv-videos-bucket/sample/images/WhatCarCanYouGetForAGrand.jpg",
      "title" : "Bigger Escape"
    },
    { 
      "sources" : [ "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" ],
      "thumb" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGjGMA3RfFDw49raSi0MILURbmD59HjDrPXwrO5NJXxBgjC-z1fnWotmrfBFwWeGB3qfg&usqp=CAU",
      "title" : "Have a Fun"
    },
    {
      "sources" : [ "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" ],
      "thumb" :"https://imageio.forbes.com/specials-images/imageserve/63d1e1b3ab08069e24922d82/Businesswoman-on-roof-showing-importance-of-dream-job/960x0.jpg?format=jpg&width=960",
      "title" : "Joyrides"
    },
    {
      "sources" : [ "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" ],
      "thumb" : "https://cdn.pixabay.com/photo/2023/08/07/16/57/ai-generated-8175498_1280.jpg",
      "title" : "For Bigger Meltdowns"
    },
{ 
      "sources" : [ "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" ],
      "thumb" : "https://cdn.pixabay.com/photo/2023/08/07/16/57/ai-generated-8175498_1280.jpg",
      "title" : "Sintel"
    },
]}]};


const App = () => {
  const [videos, setVideos] = useState(mediaJSON.categories[0].videos);
  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  const handleSelectVideo = (video) => {
    setCurrentVideo(video);
  };

  const handleReorderVideos = (newOrder) => {
    setVideos(newOrder);
  };

  const handleNextVideo = () => {
    const currentIndex = videos.findIndex((video) => video.sources[0] === currentVideo.sources[0]);
    const nextIndex = (currentIndex + 1) % videos.length;
    setCurrentVideo(videos[nextIndex]);
  };

  const Banner =()=>{
     return (<div className='Heading' >
        Video Player 
     </div>)
  
  }

  return (
    <>
    
    <div className='container'>
    <Banner/>
     
     <Grid container spacing={1}>
        <Grid item xs={12} md={8}>
          <VideoPlayer
            src={currentVideo.sources[0]}
            onNextVideo={handleNextVideo}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Playlist
            videos={videos}
            onSelectVideo={handleSelectVideo}
            onReorderVideos={handleReorderVideos}
          />
        </Grid>
      </Grid>
    </div>
    </>
  );
};

export default App;