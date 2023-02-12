import React from 'react';
import './RecommendedVideos.css';
import VideoCard from './VideoCard';

function RecommendedVideos() {
  return (
    <div className='recommendedVedios'>
      <h2>Recommended</h2>
      <div className='recommendedVedios__vedios'>
        <VideoCard
          title='Top 5 Programming Languages to Learn in 2023 to Get a Job Without a College Degree'
          views='25k'
          timestamp='7 days ago'
          channelImage='https://yt3.googleusercontent.com/ytc/AL5GRJXoWnTXp_oljCbsD07kYmc6Vktj3J0Vs64ALooxgA=s176-c-k-c0x00ffffff-no-rj-mo'
          channel='Clever Programmer'
          image='https://i.ytimg.com/an_webp/_6Zhfts2iao/mqdefault_6s.webp?du=3000&sqp=CPbJnJ8G&rs=AOn4CLAXf_4FEdl-TVAXw1qrCLME-ScoIw' />


        <VideoCard
          title='ASMR | Build Disney+ with React JS (Firebase + Styled Components + Redux)'
          views='247k'
          timestamp='1 year ago'
          channelImage='https://yt3.googleusercontent.com/ytc/AL5GRJXoWnTXp_oljCbsD07kYmc6Vktj3J0Vs64ALooxgA=s176-c-k-c0x00ffffff-no-rj-mo'
          channel='Clever Programmer'
          image='https://i.ytimg.com/an_webp/R_OERlafbmw/mqdefault_6s.webp?du=3000&sqp=CIyknJ8G&rs=AOn4CLDTcTDd51uyXd4k8hwcdXjC_GZlvA' />

        <VideoCard
          title='Build LinkedIn with React JS (Firebase + Styled Components + Redux)'
          views='188k'
          timestamp='1 year ago'
          channelImage='https://yt3.googleusercontent.com/ytc/AL5GRJXoWnTXp_oljCbsD07kYmc6Vktj3J0Vs64ALooxgA=s176-c-k-c0x00ffffff-no-rj-mo'
          channel='Clever Programmer'
          image='https://i.ytimg.com/an_webp/xP3cxbDUtrc/mqdefault_6s.webp?du=3000&sqp=CNXbnJ8G&rs=AOn4CLCZzc58kMSnkzENAzHeTYXCHYjJbw' />

        <VideoCard
          title='Build Clubhouse with React JS & Styled Components'
          views='49k'
          timestamp='1 year'
          channelImage='https://yt3.googleusercontent.com/ytc/AL5GRJXoWnTXp_oljCbsD07kYmc6Vktj3J0Vs64ALooxgA=s176-c-k-c0x00ffffff-no-rj-mo'
          channel='Clever Programmer'
          image='https://i.ytimg.com/an_webp/cuR9R1Hj1Ug/mqdefault_6s.webp?du=3000&sqp=CIjfnJ8G&rs=AOn4CLDTJsiS8Ob-M8UYpTgPCx2vxKz49A' />

        <VideoCard
          title='React JS Crash Course for Beginners - Build 4 Apps in 12 Hours (Redux, Firebase, Auth + More) [2022]'
          views='464k'
          timestamp='1 year ago'
          channelImage='https://avatars.githubusercontent.com/u/24712956?v=4'
          channel='Sonny Sangha'
          image='https://i.ytimg.com/an_webp/tbvguOj8C-o/mqdefault_6s.webp?du=3000&sqp=CK7pnJ8G&rs=AOn4CLDi4TwG5TbTzIbhjr_mITGxoaFo6A' />

        <VideoCard
          title='Learn the React useEffect Hook in 24 minutes (for beginners)'
          views='126k'
          timestamp='1 year ago'
          channelImage='https://avatars.githubusercontent.com/u/24712956?v=4'
          channel='Sonny Sangha'
          image='https://i.ytimg.com/vi/UVhIMwHDS7k/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAlTT6HHVhHxP6cnvoLrPH09AFihg' />

        <VideoCard
          title='Learn how to create Custom Hooks in React in 24 minutes (+ useRef Tutorial for beginners)'
          views='43k'
          timestamp='1 year ago'
          channelImage='https://avatars.githubusercontent.com/u/24712956?v=4'
          channel='Sonny Sangha'
          image='https://i.ytimg.com/an_webp/nshyjApIovo/mqdefault_6s.webp?du=3000&sqp=COTynJ8G&rs=AOn4CLDSQO0AurawNuu0Y8DAao1AHB7seA' />

        <VideoCard
          title='React Native Crash Course for Beginners - Build 4 Apps in 14 Hours (Redux, Tailwind + More) [2022]'
          views='252k'
          timestamp='1 year ago'
          channelImage='https://avatars.githubusercontent.com/u/24712956?v=4'
          channel='Sonny Sangha'
          image='https://i.ytimg.com/an_webp/AkEnidfZnCU/mqdefault_6s.webp?du=3000&sqp=CJjUnJ8G&rs=AOn4CLDJIfXxFW5yvbwLCzoyAfEvPRUKHg' />


        <VideoCard
          title='Top 3 Chest Exercises for Muscle Gain | (Guru Mann top 3 choices)'
          views='950k'
          timestamp='6 year ago'
          channelImage='https://yt3.googleusercontent.com/bJqTYerwxsBAme_ll_Hdxk-f-xO4F5Dm54AfTd0CYZQp4lTODtfOlVBN4GSWYB4xlYJ2SCZw=s176-c-k-c0x00ffffff-no-rj-mo'
          channel='Guru Mann Fitness'
          image='https://i.ytimg.com/an_webp/b4fNr03orxA/mqdefault_6s.webp?du=3000&sqp=CODdnJ8G&rs=AOn4CLCB3VlkrMGaSTMqyykm1uf_sRTTyw' />

        <VideoCard
          title='Top 3 Exercises for KILLER BICEPS | Full Explanation with Muscle Anatomy by Guru Mann'
          views='1.4M'
          timestamp='6 year ago'
          channelImage='https://yt3.googleusercontent.com/bJqTYerwxsBAme_ll_Hdxk-f-xO4F5Dm54AfTd0CYZQp4lTODtfOlVBN4GSWYB4xlYJ2SCZw=s176-c-k-c0x00ffffff-no-rj-mo'
          channel='Guru Mann Fitness'
          image='https://i.ytimg.com/an_webp/DD5oEcN_VOM/mqdefault_6s.webp?du=3000&sqp=CKHunJ8G&rs=AOn4CLA2-KLeWdxywPro6Jm8qpMXnfpPew' />

        <VideoCard
          title='Top 3 ABS Exercises Not to Miss | (Guru Mann top 3 choices)'
          views='1.1M'
          timestamp='6 year ago'
          channelImage='https://yt3.googleusercontent.com/bJqTYerwxsBAme_ll_Hdxk-f-xO4F5Dm54AfTd0CYZQp4lTODtfOlVBN4GSWYB4xlYJ2SCZw=s176-c-k-c0x00ffffff-no-rj-mo'
          channel='Guru Mann Fitness'
          image='https://i.ytimg.com/an_webp/FIRBV0EkEzY/mqdefault_6s.webp?du=3000&sqp=CNb3nJ8G&rs=AOn4CLBEsi8uLvKsnzpI4a_4A5nbpaKr2w' />

        <VideoCard
          title='Size or Definition || Which One is Good - Guru Mann'
          views='950k'
          timestamp='6 year ago'
          channelImage='https://yt3.googleusercontent.com/bJqTYerwxsBAme_ll_Hdxk-f-xO4F5Dm54AfTd0CYZQp4lTODtfOlVBN4GSWYB4xlYJ2SCZw=s176-c-k-c0x00ffffff-no-rj-mo'
          channel='Guru Mann Fitness'
          image='https://i.ytimg.com/an_webp/EbRB0dhqrNo/mqdefault_6s.webp?du=3000&sqp=CN72nJ8G&rs=AOn4CLA7IJ3_cqpwfPsQ3q-N_7Wr9B-Dhw' />
      </div>
    </div>
  )
}

export default RecommendedVideos
