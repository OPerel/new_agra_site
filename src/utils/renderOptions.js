import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Img from "gatsby-image";
import React from "react";

const getRenderOptions = () => ({
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
    [BLOCKS.EMBEDDED_ASSET]: node => <Img {...node.data.target} />,
    [INLINES.HYPERLINK]: link => (
      <a href={link.data.uri} target="_blank" rel="noopener noreferrer">
        {link.content[0].value}
      </a>
    ),
    [BLOCKS.LIST_ITEM]: item => <li>{item.content[0].content[0].value}</li>
  }
});

export default getRenderOptions;