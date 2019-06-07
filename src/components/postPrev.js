import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import PostInfo from './postInfo';
import './postPrev.css';

const PostPrev = (props) => {
  return (
    <div>
      <h4 dangerouslySetInnerHTML={{ __html: props.title }}></h4>
      <div className="prev-body">
        <p dangerouslySetInnerHTML={{ __html: props.excerpt }}></p>
        {
          props.img
          ? <Img fixed={props.img.localFile.childImageSharp.fixed} />
          : null
        }
        <Link to={`/post/${props.slug}`}>קרא עוד</Link>
      </div>
      <PostInfo author={props.author} date={props.date} />
    </div>
  )
}

export default PostPrev;
