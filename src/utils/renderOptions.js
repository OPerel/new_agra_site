import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const getRenderOptions = () => ({
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
    [BLOCKS.EMBEDDED_ASSET]: node => (
      <GatsbyImage image={getImage(node.data.target)} alt={node.data.target.title} />
    ),
    [INLINES.HYPERLINK]: (node, children) => (
      <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
    [INLINES.ASSET_HYPERLINK]: (node, children) => (
      <a
        href={node.data.target.file.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    [BLOCKS.LIST_ITEM]: item => <li>{item.content[0].content[0].value}</li>
  }
});

export default getRenderOptions;