import React from 'react'
import YouTube from 'react-youtube'
function Video({videoId}) {
  return (
    <div className='video'>
      <YouTube width={740} videoId={videoId}/>
    </div>
  )
}

export default Video
