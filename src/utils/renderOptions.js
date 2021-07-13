import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const getRenderOptions = () => ({
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
    [BLOCKS.EMBEDDED_ASSET]: node => (
      <GatsbyImage image={getImage(node.data.target)} alt={node.data.target.title} />
    ),
    [INLINES.HYPERLINK]: link => (
      <a href={link.data.uri} target="_blank" rel="noopener noreferrer">
        {link.content[0].value}
      </a>
    ),
    [BLOCKS.LIST_ITEM]: item => <li>{item.content[0].content[0].value}</li>
  }
});

export default getRenderOptions;