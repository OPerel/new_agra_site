import React, { Component } from 'react';
import Menus from './menus';
import { graphql, StaticQuery } from 'gatsby';
import './dropDown.css';
import Img from 'gatsby-image';
import '../images/menuham.png';

const menuham = graphql`{
  icon: file(relativePath:{eq: "menuham.png"}) {
    childImageSharp {
      fixed (width: 45, height: 45) {
        ...GatsbyImageSharpFixed_tracedSVG
      }
    }
  }
}`

class DropDown extends Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
    };
  };

  showMenu = (event) => {
    event.preventDefault();
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  };

  closeMenu = () => {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  };

  render () {
    return (
      <StaticQuery query={menuham}
        render={data => {
          const { fixed } = data.icon.childImageSharp;
          return (
            <div>
              <button id="nav-btn" onClick={this.showMenu}>
                <Img fixed={fixed} />
              </button>
              {
                this.state.showMenu
                ? <div className="dropdown"><Menus menuList={['Main']} /></div>
                : null
              }
            </div>
          );
        }
      }/>
    )
  }
}

export default DropDown;
