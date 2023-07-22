import React from 'react';
import './Stories.css';
import './Story';
import Story from './Story';


function Stories() {
  return (
    <div className='storyComponent'>
      <Story
        image="https://media.formula1.com/image/upload/content/dam/fom-website/manual/2023/Testing2023/verstappen.png.transform/6col-retina/image.png"
        profilePic="https://lh3.googleusercontent.com/a/AAcHTtd5ELY4lbZ2M8zGMKj8fHrnlbZZRaS5lx0Mu1tmeA=s432-c-no"
        title="Rhea Sharma"
        />
        <Story
        image="https://cdn-1.motorsport.com/static/img/archive/autosport/news/149449_1009849/s8/1009849.jpg"
        profilePic="https://upload.wikimedia.org/wikipedia/en/2/2a/Alfa_Romeo_logo.png"
        title="Alfa Romeo F1 Team"
        />
        <Story
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Mercedes_F1_Team_Garage%2C_British_GP%2C_Silverstone_2021_%2851350309945%29.jpg/1280px-Mercedes_F1_Team_Garage%2C_British_GP%2C_Silverstone_2021_%2851350309945%29.jpg"
        profilePic="https://upload.wikimedia.org/wikipedia/commons/f/fa/Mercedes-Benz_AMG_Petronas_Formula_One_Team_Logo_Wheelsology.JPG"
        title="Mercedes-AMG Petronas F1 Team"
        />
        <Story
        image="https://cdn-4.motorsport.com/images/mgl/Yv85qXE0/s1200/dennis-hauger-mp-motorsport-1.webp"
        profilePic="https://cdn-1.motorsport.com/images/mgl/Y99JQRbY/s300/red-bull-racing-logo-1.webp"
        title="RedBull Racing"
        />
        <Story
        image="https://motorsportmagazine.b-cdn.net/wp-content/uploads/2023/02/Ferrari-800x450.jpg.webp"
        profilePic="https://wallpapercave.com/dwp2x/wp11420391.png"
        title="Scuderia Ferrari"
        />
      
    </div>
  )
}

export default Stories