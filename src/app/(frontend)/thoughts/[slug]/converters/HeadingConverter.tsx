import { Heading, HeadingLevels } from "@/components/Heading";
import { SerializedHeadingNode } from "@payloadcms/richtext-lexical";
import { JSXConverter } from "@payloadcms/richtext-lexical/react";

type HeaderTags =  "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type TagLevelMap = {
    [Key in HeaderTags]: HeadingLevels
}
const tagToLevelMap: TagLevelMap = {
        "h1": 1,
        "h2": 2,
        "h3": 3,
        "h4": 4,
        "h5": 5,
        "h6": 6
};

export const HeadingConverter: JSXConverter<SerializedHeadingNode> = ({ node, nodesToJSX }) => {
    const level = tagToLevelMap[node.tag];
    return (<Heading level={level} tag={node.tag}>{nodesToJSX({ nodes: node.children })}</Heading>)
};