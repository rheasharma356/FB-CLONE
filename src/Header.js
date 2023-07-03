//rfce +tab creates a snippet (extension es7)
//BEM  (block element modifier) naming convention- double underscore is used for adding a sub-block
import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import StorefrontIcon from '@mui/icons-material/Storefront';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar, IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useStateValue } from "./StateProvider";


function Header() {
    const [ { user } , dispatch] = useStateValue();
  return (
    <div className="header">
      
        <div className="header__left">
            <img src= "https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg"/>
        
            <div className="header__input">
                {/*search icon and an input field*/}
                <SearchIcon />
                <input type="text" placeholder="Search Facebook" />

            </div>
        </div>

        <div className="header__middle">
            <div className="header__option header__option--active">  {/*BEM > BLOCK- header, ELEMENT- option, MODIFIER: --active  */}
            <HomeIcon fontSize="large"/>
            </div>
            
            <div className="header__option">
            <GroupIcon fontSize="large"/>
            </div>

            <div className="header__option">
            <OndemandVideoIcon fontSize="large"/>
            </div>

            <div className="header__option">
            <SubscriptionsIcon fontSize="large"/>
            </div>

            <div className="header__option">
            <StorefrontIcon fontSize="large"/>
            </div>

            <div className="header__option">
            <FlagIcon fontSize="large"/>
            </div>

            {/* <div className="header__option">
            <NotificationsIcon fontSize="large"/>
            </div> */}
        </div>

        <div className="header__right">
            <div className="header__info">
               
                <Avatar src={user.photoURL} />
                <h4>{user.displayName}</h4>

                <IconButton>
                <AddIcon />
                </IconButton>

                <IconButton>
                <ForumIcon />
                </IconButton>

                <IconButton>
                < NotificationsActiveIcon/>
                </IconButton>

                <IconButton>
                < ExpandMoreIcon/>
                </IconButton>

            </div>
            
        </div>


    </div>
  )
}

export default Header