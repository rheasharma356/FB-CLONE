import React, { useState } from 'react';
import './MessageSender.css';
import { Avatar } from '@mui/material';
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { useStateValue } from './StateProvider';
import db from './firebase';
import firebase from "firebase/compat/app";




function MessageSender() {

    const [ { user } , dispatch] = useStateValue();
    //states (declaring variables in react) useState hook
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    
    //this function will create an event e that prevents the page from refreshing (default behavior on clicking button)
    const handleSubmit = (e) =>  {
        e.preventDefault();

        db.collection("posts").add({
            message: input,
            timestamp: firebase.firestore.FieldValue. 
            serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl,
        });

        setInput("");
        setImageUrl("");
};

return (
    <div className="messageSender">
        <div className="messageSender__top">
            <Avatar src= {user.photoURL}/>
            <form> 
                <input 
                value ={input} //mapping input value here
                onChange={e => setInput(e.target.value)} //Sets an event for typing in the value
                className="messageSender__input"
                placeholder={`What's on your mind, ${user.displayName}?`} />

                <input 
                value={imageUrl}
                onChange={e => setImageUrl(e.target.value)}
                placeholder="Image URL (Optional)"/>

                <button onClick={handleSubmit} type="submit">
                    Hidden Submit
                </button>

            </form>
        </div>   

        <div className="messageSender__bottom">
            <div  className="messageSender__option">
                <VideocamIcon style={{color: "Crimson"}} />
                <h3>Live video</h3>
            </div>  
            <div  className="messageSender__option">
                <PhotoLibraryIcon style={{color: "LimeGreen"}} />
                <h3>Photo/video</h3>
            </div> 
            <div  className="messageSender__option">
                <InsertEmoticonIcon style={{color: "Gold "}} />
                <h3>Feeling/activity</h3>
            </div> 

        </div>

    </div>
  )
}

export default MessageSender