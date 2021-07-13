import React from 'react';
import { Link } from 'gatsby';
import PostInfo from '../postInfo';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import './postPrev.css';

const PostPrev = (props) => {
  const img = getImage(props.img);
  return (
    <div>
      <Link to={`/post/${props.slug}`}>
        <div className="prev-body">
          <div>
            <h4 dangerouslySetInnerHTML={{ __html: props.title }} />
            <p dangerouslySetInnerHTML={{ __html: props.excerpt }} />
          </div>
          {
            img
              ? <GatsbyImage image={img} alt={props.title} className="prev-img" />
              : null
          }
        </div>
      </Link>
      <PostInfo date={props.date} />
    </div>
  )
}

export default PostPrev;
