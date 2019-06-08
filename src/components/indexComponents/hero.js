import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import BgImg from 'gatsby-background-image';
import Button from './button';
import './hero.css';

const Hero = () => {
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
                <h1>אגרא יעוץ ותכנון בע"מ</h1>
                <h4>ניהול ותכנון – מתארי, פרוגרמטי, פונקציונלי, הנדסי וסביבתי. עשרות שנות ניסיון ביעוץ ותכנון לתעשייה, לוגיסטיקה, משרדי ממשלה, רשויות ממלכתיות ומקומיות, פרויקטים סביבתיים.</h4>
                <Button text="שירותים" />
                <Button classN="btn-c" text="צור קשר" />
              </div>
            </BgImg>
          </>
        )
      }}
    />
  )
}

export default Hero;
