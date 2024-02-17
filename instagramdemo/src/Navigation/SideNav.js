import React from 'react';
import './SideNav.css';
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";

export const SideNav = () => {
  return (
    <div className='sidenav'>
      <img   className="sidenav__logo" 
      src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
      alt='Instagram Logo'/>
      <div className='side_button'>
        <div className='side_button'>
          <button className='sidenav_button'><HomeIcon/>
            <span>Home</span></button>
        
        </div>

        <div className='side_button'>
          <button className='sidenav_button'><SearchIcon/>
            <span>Search</span></button>
        
        </div>

        <div className='side_button'>
          <button className='sidenav_button'>
          <ExploreIcon/>
            <span>Explore</span>
          </button>
        
        </div>

        <div className='side_button'>
          <button className='sidenav_button'>
          <SlideshowIcon/>
            <span>Reels</span>
          </button>
      
        </div>
        
        <div className='side_button'>
          <button className='sidenav_button'>
          <ChatIcon/>
            <span>Messages</span>
          </button>
        
        </div>

        <div className='side_button'>
          <button className='sidenav_button'><FavoriteBorderIcon/>
            <span>Notification</span></button>
        
        </div>

        <div className='side_button'>
          <button className='sidenav_button'>
          <AddCircleOutlineIcon/>
            <span>Create</span>
          </button>
       
        </div>
      </div>
      <div className='sidenav_more'>
          <button className='sidenav_button'>
          <MenuIcon/>
          <span>More</span>
          </button>
          
      </div>
    </div>
  )
}
