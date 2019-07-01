import React from 'react';
import Menus from './menus';
import './sidebar.css';

const sidebarMenus = ['שירותים', 'כתבות אחרונות'];

const Sidebar = () => (
  <div id="sidebar" className="sidebar">
    <Menus menuList={sidebarMenus}/>
  </div>
)

export default Sidebar;
