import React from 'react';

const VideoDetail = ({video}) => {

  // null kontrol
  if(!video){
    return <div> Loading... </div>;
  }

  const videoId = video.id.videoId;
  //const viodeUrl = 'https://www.youtube.com/embed/'+videoId; ES5
  const videoUrl = `https://www.youtube.com/embed/${videoId}`; //ES6

  return(
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={videoUrl}></iframe>
      </div>

      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  )
}

export default VideoDetail;
