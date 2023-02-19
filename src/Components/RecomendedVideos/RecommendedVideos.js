import React,{ useEffect, useState } from 'react';
import './RecommendedVideos.css';
import VideoCard from '../VideoCard/VideoCard'
import REACT_APP_YOUTUBE_API_KEY from '../../YoutubeApiKey';
//import searchYouTube from './YoutubeAPISearch';
import axios from 'axios';
import {DateTime} from 'luxon';

import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import { Link } from 'react-router-dom';


function RecommendedVideos() {
  const [videoCards, setVideoCards] = useState([]);
  const[isLoading,setIsLoading] = useState(true);
  const[isError, setIsError] = useState(false);

  useEffect(()=>{
    axios
    .get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=9&regionCode=PK&key=${REACT_APP_YOUTUBE_API_KEY}`)
    .then(resposne =>{
      getYoutubeVideos(resposne.data.items);
    })
    .catch(error=>{
      console.log(error);
      setIsError(true);
    })
  },[])
  async function getYoutubeVideos(videoItems){
    let newVideos=[];
    for(const video of videoItems){
      const videoId = video.id;
      const snippet = video.snippet;
      const channelId = snippet.channelId;
     
      const resposne = await axios.get(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${REACT_APP_YOUTUBE_API_KEY}`)
      const channelImage = resposne.data.items[0].snippet.thumbnails.medium.url;
      const title = snippet.title;
        const image = snippet.thumbnails.high.url;
        const views = video.statistics.viewCount;
        const timestamp = DateTime.fromISO(snippet.publishedAt).toRelative();
        const channel = snippet.channelTitle;

      newVideos.push({
        videoId,
        image,
        title,
        channel,
        views,
        timestamp,
        channelImage
      });
    };
    setVideoCards(newVideos);
    setIsLoading(false);
  }
  if(isError){
    return <Alert severity="error" className='loading'>No Results found!</Alert>
  }

  return (
    <div className='recommendedVedios'>
    {/* <div style={{ alignItems: "center", display: "flex", justifyContent: "center" }}> */}
    {!isLoading && null }
    {/* </div> */}
      <div className='recommendedVedios__vedios'>{
        videoCards.map(item => {
            return (
              <Link key={item.videoId} to ={`/video/${item.videoId}`}>
                <VideoCard key={item.videoId}
                    title={item.title}
                    image={item.image}
                    views={item.views}
                    timestamp={item.timestamp}
                    channel={item.channel}
                    channelImage={item.channelImage}
                />
                </Link>
            )
          })
      }
      </div>
    </div>
  )
}

export default RecommendedVideos
