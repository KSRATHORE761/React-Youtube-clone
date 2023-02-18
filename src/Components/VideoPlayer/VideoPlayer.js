import React,{useState,useEffect} from 'react';
import './VideoPlayer.css';
import { useParams } from 'react-router-dom';
import Video from '../Video/Video';
import RecommendedVideos from '../../RecommendedVideos';
import VideoInfo from '../VideoInfo/VideoInfo';
import axios from 'axios';
import { CircularProgress } from '@mui/material';
import Alert from '@mui/material/Alert';
import REACT_APP_YOUTUBE_API_KEY from '../../YoutubeApiKey';

function VideoPlayer() {
  let {videoId} = useParams();
  console.log(`VideoId from url : ${videoId}`);
  const[videoInfo,setVideoInfo] = useState([]);
  const[isLoading,setIsLoading] = useState(true);
  const[isError,setIsError] = useState(false);

  useEffect(()=>{
    setVideoInfo([]);
    setIsLoading(true);
    axios
    .get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2C%20statistics&id=${videoId}&key=${REACT_APP_YOUTUBE_API_KEY}`)
    .then(response =>{
      console.log(response.data)
      createVideoInfo(response.data['items'][0]);
      setIsError(false);
    })
    .catch(error =>{
      console.log(error);
      setIsError(true);
    })
  },videoId)

  async function createVideoInfo (video) {
    const snippet = video.snippet;
    const stats = video.statistics;
    const channelId = snippet.channelId;
    const response = await axios
                          .get(`https://www.googleapis.com/youtube/v3/channels?part=snippet%2C%20statistics&id=${channelId}&key=${REACT_APP_YOUTUBE_API_KEY}`)
    
    const channelImage = response.data.items[0].snippet.thumbnails.medium.url;
    const subs = response.data.items[0].statistics.subscriberCount;
    const publishedDate = new Date(snippet.publishedAt).toLocaleDateString('en-GB', {  
                                                            day : 'numeric',
                                                            month : 'short',
                                                            year : 'numeric'
                                                        });
    const title = snippet.title;
    const description = snippet.description;
    const channelTitle = snippet.channelTitle;
    const viewCount = stats.viewCount;
    const likeCount = stats.likeCount;
    const dislikeCount = stats.dislikeCount;

    setVideoInfo({
        title,
        description,
        publishedDate,
        channelTitle,
        channelImage,
        viewCount,
        likeCount,
        dislikeCount,
        subs
    });
    setIsLoading(false);
}
if(isError) {
    return <Alert severity="error" className='loading'>No Results found!</Alert>
}

  return (
    <div className='videoplayer'>
    <div className='videoplayer__videodetails'>
        <div className='videoplayer__video'>
        {/* <div style={{ alignItems: "center", display: "flex", justifyContent: "center" }}> */}
    {!isLoading &&  <Video videoId={videoId}/> }
      {/* <CircularProgress className='loading' color='secondary'/>: */}
    
    {/* </div> */}
          
        </div>
        <div className='videoplayer__videoinfo'>
            {!isLoading ? <VideoInfo
                            title={videoInfo.snippet}
                            description={videoInfo.description}
                            publishedDate={videoInfo.publishedDate}
                            channelTitle={videoInfo.channelTitle}
                            channelImage={videoInfo.channelImage}
                            viewCount={videoInfo.viewCount}
                            likeCount={videoInfo.likeCount}
                            dislikeCount={videoInfo.dislikeCount}
                            subs={videoInfo.subs}
                          /> : null
            }
        </div>
    </div>
    <div className='videoplayer__suggested'>
        <RecommendedVideos />
    </div>
</div>
)
}

export default VideoPlayer
