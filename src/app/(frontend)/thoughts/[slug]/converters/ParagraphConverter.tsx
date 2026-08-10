import { SerializedParagraphNode } from "@payloadcms/richtext-lexical";
import { JSXConverter } from "@payloadcms/richtext-lexical/react";

export const ParagraphConverter: JSXConverter<SerializedParagraphNode>  = ({ node, nodesToJSX }) => (
    <p>{nodesToJSX({ nodes: node.children })}</p>
);