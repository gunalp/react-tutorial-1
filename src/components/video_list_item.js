import React from 'react';

/*
const VideoListItem = (props) => {

  const video = props.video;
  return(
    <li>Video</li>
  )
};
*/

const VideoListItem = ({video,onVideoSelect}) => {
  //const video = props.video;
  //const onVideoSelect = props.onVideoSelect;
  //console.log(video);
  const imageUrl = video.snippet.thumbnails.default.url;

  return(
    <li onClick={()=> onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
      </div>

      <div className="media-body">
        <div className="media-heading">{video.snippet.title}</div>
      </div>

    </li>
  )
};

export default VideoListItem;
