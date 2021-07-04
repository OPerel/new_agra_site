import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BgImg from 'gatsby-background-image';
import { animated, useSpring, config } from 'react-spring';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Button from '../../button/button';
import './hero.css';

const Hero = () => {
  const animateProps = useSpring({
    config: config.slow,
    transform: 'translateY(0)',
    from: { transform: 'translateY(400%)' }
  });
  const data = useStaticQuery(graphql`{
    contentfulAsset(title:{eq:"home"}) {
      fluid {
        ...GatsbyContentfulFluid
      }
    }
  }`);
  const { fluid } = data.contentfulAsset;
  return (
    <>
      <BgImg className="hero" fluid={fluid}>
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
      </BgImg>
    </>
  )
}

export default Hero;
