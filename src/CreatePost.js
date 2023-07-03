import React from 'react';
import './CreatePost.css';
import { Avatar } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NearMeIcon from '@mui/icons-material/NearMe';

function CreatePost({profilePic, image, username, timestamp, message}) {
  return (
    <div className="post"> 

      <div className="post__top">
        <Avatar src= {profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p> 
          
          {new Date(timestamp?.toDate()).toUTCString()}
          </p>
        </div>
        </div>

        <div className="post__bottom">
          <p>{message}</p>
        </div>

        <div className="post__image">
          <img src={image} alt="" />
        </div>

        <div className="post__buttons">
          <div className="post__button">
            <ThumbUpIcon />
            <p>Like</p>
          </div>
        
          <div className="post__button">
            <ChatBubbleOutlineIcon />
            <p>Comment</p>
          </div>

          <div className="post__button">
            <NearMeIcon />
            <p>Share</p>
          </div>
        
        
        
        </div>
    </div>
  )
}

export default CreatePost