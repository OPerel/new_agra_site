import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import PostInfo from '../postInfo';
import './postPrev.css';

const PostPrev = (props) => {
  return (
    <div>
      <Link to={`/post/${props.slug}`}>
        <div className="prev-body">
          <div>
            <h4 dangerouslySetInnerHTML={{ __html: props.title }} />
            <p dangerouslySetInnerHTML={{ __html: props.excerpt }} />
          </div>
          {
            props.img
              ? <Img fixed={props.img} className="prev-img" />
              : null
          }
        </div>
      </Link>
      <PostInfo date={props.date} />
    </div>
  )
}

export default PostPrev;