import { Avatar } from '@mui/material';
import React from 'react';
import './ChannelRow.css';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';

function ChannelRow({image,Channel,verified,subs,noOfVedio,description}) {
  return (
    <div class='channelRow'>
    <Avatar className='channelRow__avatar' src = {image} alt={Channel}/>
    <div className='channelRow__info'>
        <h4>{Channel} </h4>
        <p>{subs} subscribers &#9679; {noOfVedio} videos </p>
        <p>{description}</p>
    </div>
    </div>
  )
}

export default ChannelRow
