import React, { useEffect, useState } from 'react';
import Stories from './Stories';
import MessageSender from './MessageSender';
import CreatePost from './CreatePost';
import './Feed.css';
import db from './firebase';


function Feed() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").orderBy('timestamp','desc')
    .onSnapshot((snapshot) => 
     setPosts(snapshot.docs.map((doc) => ({id: doc.id, data: doc.data() }))) 
     );
  }, []);
  

  return (
    <div className= "feed">
    <Stories />
    <MessageSender/> 
    
    {posts.map((post) => (
    <CreatePost 
    key={post.id}
    profilePic={post.data.profilePic}
    message={post.data.message}
    timestamp={post.data.timestamp}
    username={post.data.username}
    image={post.data.image}
    />
  
    ) )}
    </div>
  );
  }  

export default Feed;