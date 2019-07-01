import React, { Component } from 'react';
import Menus from './menus';
import './sidebar.css';

const sidebarMenus = ['שירותים', 'כתבות אחרונות'];

class Sidebar extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     page: props.page
  //   }
  // }
  //
  // sidebarPos = () => {
  //   const side = document.getElementById('sidebar');
  //   const stick = side.getBoundingClientRect().top;
  //   window.pageYOffset > stick * 2.38
  //   ? side.classList.add("sticky")
  //   : side.classList.remove("sticky");
  // }
  //
  // componentDidMount() {
  //   if (this.state.page !== 'post') {
  //     window.addEventListener('scroll', this.sidebarPos)
  //   }
  // }
  //
  // componentWillUnmount() {
  //   window.removeEventListener('scroll', this.sidebarPos);
  // }

  render() {
    return (
      <div id="sidebar" className="sidebar">
        <Menus menuList={sidebarMenus}/>
      </div>
    )
  }
}

export default Sidebar;
