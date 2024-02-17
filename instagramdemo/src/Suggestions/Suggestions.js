import React from 'react';
import './Suggestion.css'
import { Avatar } from "@mui/material";
export const Suggestions = () => {
  return (
   <div className='suggestions'>
    <div className='suggestions_title'>
        Suggestions for you
    </div>
    <div className='suggestions_usernames'>
        <div className='suggestion_username'>
          
          <div className='username_left'>
            <span className='avatar'>
              <Avatar>R</Avatar>
            </span>
            <div className='username_info'>
              <span className='username'>radian_</span>
              <span className='relation'>New to Instagram</span>
            </div>
          </div>
          <button className='follow_button'>Follow</button>
        </div>
        <div className='suggestion_username'>
          
          <div className='username_left'>
            <span className='avatar'>
              <Avatar>B</Avatar>
            </span>
            <div className='username_info'>
              <span className='username'>Batman</span>
              <span className='relation'>New to Instagram</span>
            </div>
          </div>
          <button  className='follow_button'>Follow</button>
        </div>
        <div className='suggestion_username'>
          
          <div className='username_left'>
            <span className='avatar'>
              <Avatar>S</Avatar>
            </span>
            <div className='username_info'>
              <span className='username'>Spiderman</span>
              <span className='relation'>New to Instagram</span>
            </div>
          </div>
          <button  className='follow_button'>Follow</button>
        </div>
        <div className='suggestion_username'>
          
          <div className='username_left'>
            <span className='avatar'>
              <Avatar>I</Avatar>
            </span>
            <div className='username_info'>
              <span className='username'>Ironman</span>
              <span className='relation'>New to Instagram</span>
            </div>
          </div>
          <button className='follow_button'>Follow</button>
        </div>
        <div className='suggestion_username'>
          
          <div className='username_left'>
            <span className='avatar'>
              <Avatar>G</Avatar>
            </span>
            <div className='username_info'>
              <span className='username'>GipsyDanger</span>
              <span className='relation'>New to Instagram</span>
            </div>
          </div>
          <button className='follow_button'>Follow</button>
        </div>
    </div>
   </div>
  )
}
