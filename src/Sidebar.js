import React from 'react';
import "./Sidebar.css"; 
import SidebarRow from './SidebarRow';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useStateValue } from './StateProvider';


function Sidebar() {

  const [ { user } , dispatch] = useStateValue();
  
  return (
    <div className="sidebar">
        <SidebarRow src={user.photoURL} title={user.displayName} />
        <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center"/>
        <SidebarRow Icon={MapsUgcIcon} title="Messenger"/>
        <SidebarRow Icon={SportsEsportsIcon} title="Gaming"/>
        <SidebarRow Icon={BookmarkIcon} title="Saved"/>
        <SidebarRow Icon= {CalendarMonthIcon} title="Events"/>
        <SidebarRow Icon= {HelpIcon} title="Help and Support"/>
        <SidebarRow Icon= {SettingsIcon} title="Settings "/>
        <SidebarRow Icon={ExpandMoreIcon} title=" See More" />
    </div>
  )
}

export default Sidebar