import React from 'react';
import { Avatar } from '@mui/material';
import "./SidebarRow.css";


// src, Icon and title are props (properties of an object)
//while passing a component as a prop use capital letter i.e Icon
function SidebarRow({src, Icon, title}) {
  return (
    <div className="sidebarRow">
      
        {src && <Avatar src= {src} />}
        {Icon && <Icon />}
        <h4>{title}</h4>
    </div>
  )
}

export default SidebarRow