import React, { useState } from 'react';
import './Timeline.css'
import { Suggestions } from '../Suggestions/Suggestions';
import { Post } from './posts/Post';

export const Timeline = () => {
  const [posts,setPosts]=useState([
    {
      user:"Radian_",
      postImage:"https://images.unsplash.com/photo-1575936123452-b67c3203c357?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
      likes:12,
      timespamp:"2d"
    },
    {
      user:"clovy_doe",
      postImage:"https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A=",
      likes:57,
      timespamp:"12h"
    },
    {
      user:"nick_white",
      postImage:"https://media.istockphoto.com/id/1424988699/photo/businessman-contemplating-in-the-office-looking-through-the-window.webp?b=1&s=170667a&w=0&k=20&c=jlF3Ihf5kO3-6dWUGhj8WTuB1Z2tiACre770YowcMTA=",
      likes:30,
      timespamp:"1w"
    }
  ]);
  return (
    <div className='timeline'>
        <div className='timeline_left'>
            <div className='timeline__posts'>
              {
                posts.map((post)=>{
                  return <Post user={post.user} postImage={post.postImage} postlikes={post.likes} posttime={post.timespamp}/>
                })
              }
            </div>
        </div>
        <div className='timeline_right'>
            <Suggestions/>
        </div>
    </div>
  )
}
