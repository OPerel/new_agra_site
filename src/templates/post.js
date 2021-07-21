import React from 'react';
import { graphql } from 'gatsby';
import Layout from "../components/layout/layout";
import PageLayout from '../components/pageLayout/pageLayout';
import PostInfo from '../components/postInfo';
import './post.css';
import { renderRichText } from "gatsby-source-contentful/rich-text";
import getRenderOptions from "../utils/renderOptions";
import { getImage, GatsbyImage } from "gatsby-plugin-image"

const options = getRenderOptions()

const Post = ({ pageContext, data }) => {
  const { featuredMedia } = data.contentfulPost;
  const img = getImage(featuredMedia);
  const {
    title,
    date,
    content
  } = pageContext;
  return (
    <Layout pageTitle={title}>
      <PageLayout>
        <h1
          className="post-heading"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <PostInfo date={date} />
        {
          featuredMedia ?
          <GatsbyImage
            image={img}
            alt={title}
            className="post-image"
          /> :
          null
        }
        {
          featuredMedia && featuredMedia.description ?
          <p
            className="img-caption"
            dangerouslySetInnerHTML={{ __html: featuredMedia.description }}
          /> : null
        }
        {renderRichText(content, options)}
      </PageLayout>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    contentfulPost(id: { eq: $id }) {
      id
      featuredMedia {
        description
        gatsbyImageData (
          layout: FULL_WIDTH,
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
  }`

export default Post;