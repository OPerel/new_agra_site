import React from 'react';
import Menus from './menus';
import './sidebar.css';

const sidebarMenus = ['שירותים', 'כתבות אחרונות'];

const Sidebar = () => (
  <div className="sidebar">
    <Menus menuList={sidebarMenus}/>
  </div>
)

export default Sidebar;
