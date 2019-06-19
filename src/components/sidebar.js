import React, { Component } from 'react';
import Menus from './menus';
import './sidebar.css';

const sidebarMenus = ['שירותים', 'כתבות אחרונות'];

class Sidebar extends Component {
  sidebarPos = () => {
    const side = document.getElementById('sidebar');
    const stick = side.getBoundingClientRect().top;
    window.pageYOffset > stick * 2.38
    ? side.classList.add("sticky") 
    : side.classList.remove("sticky");
  }

  componentDidMount() {
    window.addEventListener('scroll', this.sidebarPos)
  }

  render() {
    return (
      <div id="sidebar" className="sidebar">
        <Menus menuList={sidebarMenus}/>
      </div>
    )
  }
}

export default Sidebar;
