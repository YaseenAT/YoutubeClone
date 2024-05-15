import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants';
import VideoCard, { Adcard } from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const [videos,setvideos] = useState([]);

  useEffect(() =>{
getvideos();
  },[])

  const getvideos = async()=>{
    const data = await fetch (YOUTUBE_VIDEO_API);
    const json = await data.json();
    setvideos(json.items);
  }
  return (
    <div className='flex flex-wrap pl-4'>
  
   {/* {videos[0] && <Adcard info={videos[0]}/>} */}
{
  videos.map((vd)=>(
   
   
    <Link to={`/watch?v=${vd.id}`}  key={vd.id}><VideoCard info = {vd} /></Link>
    
  ))
}
   
    </div>
  )
}

export default VideoContainer