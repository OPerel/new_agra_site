import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import BgImg from 'gatsby-background-image';
import { animated, useSpring, config } from 'react-spring';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Button from '../button';
import './hero.css';

const Hero = () => {
  const animateProps = useSpring({
    config: config.slow,
    transform: 'translateY(0)',
    from: { transform: 'translateY(400%)' }
  })
  return (
    <StaticQuery
      query={graphql`
        {
          wordpressWpMedia(slug:{eq:"home"}) {
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }`
      } render={data => {
        const img = data.wordpressWpMedia.localFile.childImageSharp.fluid;
        return (
          <>
            <BgImg className="hero" fluid={img}>
              <div className="hero-content">
                <animated.h1 style={animateProps}>אגרא יעוץ ותכנון בע"מ</animated.h1>
                <animated.h4 style={animateProps}>ניהול ותכנון – מתארי, פרוגרמטי, פונקציונלי, הנדסי וסביבתי. עשרות שנות ניסיון ביעוץ ותכנון לתעשייה, לוגיסטיקה, משרדי ממשלה, רשויות ממלכתיות ומקומיות, פרויקטים סביבתיים.</animated.h4>
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
      }}
    />
  )
}

export default Hero;
