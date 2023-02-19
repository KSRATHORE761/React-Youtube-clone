import React, { useEffect, useState } from 'react';
import './SearchPage.css';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import ChannelRow from '../ChannelRow/ChannelRow';
import VideoRow from '../VideoCard/VideoCard'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import REACT_APP_YOUTUBE_API_KEY from '../../YoutubeApiKey';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import { DateTime } from 'luxon';
import queryString from 'query-string';
import { Link } from 'react-router-dom';

function SearchPage({search}) {
  // let { searchQuery } = useParams();
  const url = window.location.pathname;
  const searchParam = url.slice(url.indexOf('/search/') + ('/search/').length);
  const searchQuery = searchParam;
  const [channelRow, setChannelRow] = useState('');
  const [videoRows, setVideoRows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setChannelRow('');
    setVideoRows([]);

    axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&type=channel&q=${searchQuery}&safeSearch=none&key=${REACT_APP_YOUTUBE_API_KEY}`)
      .then(res => {
        console.log(res.data['items'][0]);
        createChannelRow(res.data['items'][0]);
      });
    axios
      .get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=9&type=video&q=${searchQuery}&safeSearch=none&key=${REACT_APP_YOUTUBE_API_KEY}`)
      .then(res => {
        createVideoRows(res.data['items']);
      })
      .catch(error => {
        console.log(error);
        setIsError(true);
        setIsLoading(false);
      })
  }, [searchQuery])

  async function createChannelRow(channel) {
    const channelId = channel.id.channelId;
    const response = await axios.get(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${REACT_APP_YOUTUBE_API_KEY}`);
    const noOfVedios = response.data.items[0].statistics.videoCount;
    const subs = response.data.items[0].statistics.subscriberCount;
    const snippet = channel.snippet;
    const title = snippet.title;
    const description = snippet.description;
    const image = snippet.thumbnails.high.url;
    setChannelRow({
      channelId,
      image,
      title,
      subs,
      noOfVedios,
      description
    })
  }

  async function createVideoRows(videos) {
    let newVideoRows = [];
    for (const video of videos) {
      const videoId = video.id.videoId;
      const response = await axios
        .get(`https://www.googleapis.com/youtube/v3/videos?part=statistics%2C%20snippet&id=${videoId}&key=${REACT_APP_YOUTUBE_API_KEY}`)
      const views = response.data.items[0].statistics.viewCount;
      const snippet = video.snippet;
      const title = snippet.title;
      const timestamp = DateTime.fromISO(snippet.publishedAt).toRelative();
      const channel = snippet.channelTitle;
      const description = snippet.description;
      const image = snippet.thumbnails.medium.url;

      newVideoRows.push({
        videoId,
        title,
        image,
        views,
        timestamp,
        channel,
        description
      });
    };
    setVideoRows(newVideoRows);
    setIsLoading(false);
  }

  return (
    <div className='searchPage'>
      <div className='searchPage__filter'>
        <TuneOutlinedIcon></TuneOutlinedIcon>
        <h2>Filters</h2>
      </div>
      
      {isLoading ? <CircularProgress className='loading' color='secondary' /> : null}
      <hr></hr>
      {!isLoading ?
        <ChannelRow
          key={channelRow.channelId}
          image={channelRow?.image}
          Channel={channelRow?.title}
          verified={true}
          subs={channelRow?.subs}
          noOfVedio={channelRow?.noOfVedios}
          description={channelRow?.description}
        /> : null}
      <hr />
      {
        videoRows.map(item => (
          <Link key={item.videoId} to ={`/video/${item.videoId}`}>
          <VideoRow
            views={item?.views}
            subs='240k'
            description={item?.decription}
            timestamp={item?.timestamp}
            channel={item?.channel}
            title={item?.title}
            image={item?.image}
          />
          </Link>
        ))
      }
      {/* <VideoRow
        views='1.4M'
        subs='659K'
        description='Do you want a free one hour traning...Check this out'
        timestamp='59 sec ago'
        channel='Clever Programmer'
        title='Lets build a youtube clone with React js for Beginners'
        image='https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBV8F8lciYfqvqqejRzPIFjS6PpUQ'
      />
      <VideoRow
        views='1.4M'
        subs='659K'
        description='Do you want a free one hour traning...Check this out'
        timestamp='59 sec ago'
        channel='Clever Programmer'
        title='Lets build a youtube clone with React js for Beginners'
        image='https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBV8F8lciYfqvqqejRzPIFjS6PpUQ'
      />
      <VideoRow
        views='1.4M'
        subs='659K'
        description='Do you want a free one hour traning...Check this out'
        timestamp='59 sec ago'
        channel='Clever Programmer'
        title='Lets build a youtube clone with React js for Beginners'
        image='https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBV8F8lciYfqvqqejRzPIFjS6PpUQ'
      />
      <VideoRow
        views='1.4M'
        subs='659K'
        description='Do you want a free one hour traning...Check this out'
        timestamp='59 sec ago'
        channel='Clever Programmer'
        title='Lets build a youtube clone with React js for Beginners'
        image='https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBV8F8lciYfqvqqejRzPIFjS6PpUQ'
      />
      <VideoRow
        views='1.4M'
        subs='659K'
        description='Do you want a free one hour traning...Check this out'
        timestamp='59 sec ago'
        channel='Clever Programmer'
        title='Lets build a youtube clone with React js for Beginners'
        image='https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBV8F8lciYfqvqqejRzPIFjS6PpUQ'
      />
      <VideoRow
        views='1.4M'
        subs='659K'
        description='Do you want a free one hour traning...Check this out'
        timestamp='59 sec ago'
        channel='Clever Programmer'
        title='Lets build a youtube clone with React js for Beginners'
        image='https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBV8F8lciYfqvqqejRzPIFjS6PpUQ'
      />
      <VideoRow
        views='1.4M'
        subs='659K'
        description='Do you want a free one hour traning...Check this out'
        timestamp='59 sec ago'
        channel='Clever Programmer'
        title='Lets build a youtube clone with React js for Beginners'
        image='https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBV8F8lciYfqvqqejRzPIFjS6PpUQ'
      />
      <VideoRow
        views='1.4M'
        subs='659K'
        description='Do you want a free one hour traning...Check this out'
        timestamp='59 sec ago'
        channel='Clever Programmer'
        title='Lets build a youtube clone with React js for Beginners'
        image='https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBV8F8lciYfqvqqejRzPIFjS6PpUQ'
      />
      <VideoRow
        views='1.4M'
        subs='659K'
        description='Do you want a free one hour traning...Check this out'
        timestamp='59 sec ago'
        channel='Clever Programmer'
        title='Lets build a youtube clone with React js for Beginners'
        image='https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBV8F8lciYfqvqqejRzPIFjS6PpUQ'
      />
      <VideoRow
        views='1.4M'
        subs='659K'
        description='Do you want a free one hour traning...Check this out'
        timestamp='59 sec ago'
        channel='Clever Programmer'
        title='Lets build a youtube clone with React js for Beginners'
        image='https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBV8F8lciYfqvqqejRzPIFjS6PpUQ'
      /> */}
    </div>
  )
}

export default SearchPage
