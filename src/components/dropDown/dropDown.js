import React, { useState } from "react"
import Menus from '../menus/menus';
import { graphql, useStaticQuery } from 'gatsby';
import './dropDown.css';
import '../../images/icons8-menu-filled-50.png';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const menuham = graphql`{
  icon: file(relativePath:{eq: "icons8-menu-filled-50.png"}) {
    childImageSharp {
      gatsbyImageData (
        height: 25,
        width: 25,
        formats: [AUTO, AVIF],
        placeholder: BLURRED
      )
    }
  }
}`

const DropDown = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = (event) => {
    event.preventDefault();
    setShowMenu(true);
    document.addEventListener('click', closeMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
    document.removeEventListener('click', closeMenu);
  };

  const data = useStaticQuery(menuham);
  const icon = getImage(data.icon);
  return (
    <div>
      <button id="nav-btn" onClick={handleShowMenu}>
        <GatsbyImage image={icon} alt="menu" />
      </button>
      {
        showMenu
          ? <div className="dropdown"><Menus menuList={['Main']} /></div>
          : null
      }
    </div>
  )
}

export default DropDown;
