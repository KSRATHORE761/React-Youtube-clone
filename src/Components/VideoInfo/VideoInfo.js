import React from 'react'
import './VideoInfo.css';
import { Avatar, Button } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Sidebar from '../../Sidebar';
import ReplyIcon from '@mui/icons-material/Reply';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import SidebarRow from '../../SidebarRow';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

function VideoInfo({ title, description, publishedDate, channelTitle, channelImage, viewCount, likeCount, dislikeCount, subs }) {
  return (
    <div className='videoInfo'>
      <div className='videoInfo__headline'>
        <h1>{title}</h1>
      </div>
      <div className='videoInfo__channel'>
        <div className='videoInfo__channelInfo'>
          <div>
            <Avatar alt={channelTitle} src={channelImage}></Avatar>
          </div>
          <div className='videoInfo_subsInfo'>
            <h3 className='videoInfo__channelTitle'>{channelTitle}</h3>
            <p className='videoInfo__channelsubs'>{subs} subscribers</p>
          </div>
          {/* <div className='videoInfo__subscribe'>
          <Button color='secondary'>SUBSCRIBE</Button>
        </div> */}
        </div>
      </div>
      <div className='vidoInfo__stats'>
        {/* <p>{viewCount} views 🗡 {publishedDate}</p> */}
        <div className='videoInfo__like'>
          <SidebarRow Icon={ThumbUpIcon} title={likeCount} />
          <SidebarRow Icon={ThumbDownIcon} title={dislikeCount} />
          <SidebarRow Icon={ReplyIcon} title='SHARE' />
          <SidebarRow Icon={PlaylistAddIcon} title='SAVE' />
          <SidebarRow Icon={MoreHorizIcon} title='' />
        </div>
      </div>
      <hr />
      <div className='videoInfo__channeldesc'>
        {/* <p>{description}</p> */}
      </div>
    </div>
  )
}

export default VideoInfo
