import React from "react";
import {data} from "../data/data";
import home from "../icons/home.png";
import subscribe from "../icons/subscribe.png";
import you from "../icons/video.png";
import shorts from "../icons/youtube-shorts-logo-15251.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {

const open = useSelector((e)=>e.app.isMenuOpen);


  return (
    <>
    {open?<div className="shadow-lg p-5 w-80">
      {data?.map((ele) => (
        <>
          <div className="p-2 font-bold font-sans">{ele.title}</div>
          {ele?.hr ? <hr className="h-2"/> :<></>}
          {ele?.sub?.map((subele) => (
            <ul>
              <li className="p-3 pl-4 fontsans font-semibold">{subele.title}</li>
              {subele?.hr ? <hr className="h-2"/> :<></>}
            </ul>
          ))}
        </>
      ))}
    </div>:<div className="shadow-lg p-5 my-4 flex flex-col gap-10 w-20 h-screen">

   
      <div><Link to ={"/"}><img src={home} className="h-8"/><div className="text-xs">Home</div></Link></div>
      <div><Link to ={"/demo"}><img src={home} className="h-8"/><div className="text-xs">Demo</div></Link></div>
      <div><img src={subscribe} className="h-8"/><div className="text-xs -ml-4">Subscriptions</div></div>
      <div><img src={shorts} className="h-8"/><div className="text-xs">Shorts</div></div>
      <div><img src={you} className="h-8"/><div className="text-xs text-center -ml-2">You</div></div>
 
    </div>}

    </>
  );
};

export default Sidebar;
