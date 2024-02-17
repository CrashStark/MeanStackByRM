import React from 'react';
import './Post.css';
import { Avatar } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import TelegramIcon from "@mui/icons-material/Telegram";


export const Post = ({user,postImage,postlikes,posttime}) => {
  return (
    <div className='post'>
        <div className='post_header'>
            <div className='post_headerauthor'>
            <Avatar>{user.charAt(0).toUpperCase()}</Avatar>
            {user} • <span>{posttime}</span>
            </div>
            <MoreHorizIcon></MoreHorizIcon>
        </div>
        <div className='post_image'>
            <img src={postImage} />
        </div>
        <div className='post_footer'>
            <div className='post_footerIcons'>
                <div className='post_iconsMain'>
                    <FavoriteBorderIcon className='postIcon'/>
                    <ChatBubbleOutlineIcon className='postIcon'/>
                    <TelegramIcon className='postIcon'/>
                </div>
                <div className='post_iconsSave'>
                    <BookmarkBorderIcon className='postIcon'/>
                </div>
            </div>
            Liked by {postlikes} people.
        </div>
    </div>
  )
}
