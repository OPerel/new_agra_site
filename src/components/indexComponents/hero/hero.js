import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { animated, useSpring, config } from 'react-spring';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Button from '../../button/button';
import { convertToBgImage } from "gbimage-bridge";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import BackgroundImage from 'gatsby-background-image';
import './hero.css';

const Hero = () => {
  const animateProps = useSpring({
    config: config.slow,
    transform: 'translateY(0)',
    from: { transform: 'translateY(400%)' }
  });
  const data = useStaticQuery(graphql`{
    contentfulAsset(title:{eq:"home"}) {
      gatsbyImageData(
        layout: FULL_WIDTH,
        placeholder: BLURRED,
        formats: [AUTO, WEBP]
      )
    }
  }`);
  const img = getImage(data.contentfulAsset);
  const bgImage = convertToBgImage(img);
  return (
    <>
      <BackgroundImage className="hero" {...bgImage} >
        <div className="hero-content">
          <animated.h1 style={animateProps}>אגרא יעוץ ותכנון בע"מ</animated.h1>
          <animated.h2 style={animateProps}>
            ניהול ותכנון – מתארי, פרוגרמטי, פונקציונלי, הנדסי וסביבתי. עשרות שנות ניסיון ביעוץ ותכנון לתעשייה, לוגיסטיקה, משרדי ממשלה, רשויות ממלכתיות ומקומיות, פרויקטים סביבתיים.
          </animated.h2>
          <animated.div style={animateProps} className="btns">
            <AnchorLink href="#services" offset="90">
              <Button text="שירותים" />
            </AnchorLink>
            <AnchorLink href="#contact" offset="90">
              <Button classN="btn-c" text="צור קשר" />
            </AnchorLink>
          </animated.div>
        </div>
      </BackgroundImage>
    </>
  )
}

export default Hero;
