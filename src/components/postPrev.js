import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import PostInfo from './postInfo';
import './postPrev.css';

const PostPrev = (props) => {
  const { fixed } = props.img.localFile.childImageSharp;
  // const excerpt = props.excerpt.replace(/[p<>/[&helli;\]]/g, '');
  return (
    <div>
      <Link to={`/post/${props.slug}`}>
        <div className="prev-body">
          <div>
            <h4 dangerouslySetInnerHTML={{ __html: props.title }}></h4>
            <p dangerouslySetInnerHTML={{ __html: props.excerpt }}></p>
          </div>
          {
            props.img
            ? <Img fixed={fixed} className="prev-img" />
            : null
          }
        </div>
      </Link>
      <PostInfo author={props.author} date={props.date} />
    </div>
  )
}

export default PostPrev;
