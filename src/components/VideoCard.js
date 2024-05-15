import React from 'react';
import { useSelector } from 'react-redux';
import {format} from "timeago.js"

const VideoCard = ({info}) => {
    
    const open = useSelector((store)=>store.app.isMenuOpen)

    function convertToK(number) {
        return Math.round(number / 1000);
      }
      
    const {snippet,statistics}  = info;

    const {channelTitle,title,thumbnails,publishedAt} = snippet;

  return (
    <div className={`p-2 shadow-lg ${open ? "w-96 m-5":"m-4 w-80"}`}>
        <img src={thumbnails.medium.url} alt="thumbnails" className='rounded-lg w-96' />
        <div>
            <div className='font-bold font-sans py-2'>{title}</div>
            <div className="font-semibold">{channelTitle}</div>
            <div className='flex gap-3'>
            <div>{convertToK(statistics.viewCount)}K views</div>
            <div>{format(publishedAt)}</div>
            </div>
          
        </div>
    </div>
  )
}


// HOC TAKES IN A COMPONENT SAY VIDEOCARD AND MODIFIES IT A LIL .
export const Adcard = ({info})=>{
   return( <div className='p-1 m-1 border border-red-900'>
  
        <VideoCard info={info}/>
    </div>
   )
}

export default VideoCard;