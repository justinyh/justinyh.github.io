import { Thought as ThoughtType } from "@/payload-types";
import { JSXConvertersFunction, RichText } from '@payloadcms/richtext-lexical/react'
import { Heading } from "@/components/Heading";
import { getPayload } from "payload";
import config from "@payload-config"
import Container from "@/components/Container";
import { DefaultNodeTypes, SerializedBlockNode } from "@payloadcms/richtext-lexical";

interface PostPreviewProps {
    params: Promise<{slug: string}>,
}

interface BlogHeaderProps {
    post: ThoughtType
}
type NodeTypes =
  | DefaultNodeTypes

const BlogHeader = ({ post }: BlogHeaderProps) => {
    return (
        <div className="border-b">
            <Heading>{post.title}</Heading>
            <div className="font-bold py-4">
                By: Justin Hu
            </div>
            
        </div>
    );
}
const jsxConverters: JSXConvertersFunction<NodeTypes> = ({defaultConverters}) => ({
    ...defaultConverters,
    paragraph: ({ node, nodesToJSX }) => (
        <p>{nodesToJSX({ nodes: node.children })}</p>
    )
});

export default async function Post({ params }: PostPreviewProps) {
    const { slug } = await params
    const payload = await getPayload({ config })
    const post = await payload.findByID({
        collection: "thoughts",
        id: slug
    });
    return (
        <main>
            <Container>
                <div className="mt-10 color-green">
                    <BlogHeader post={post} />
                    <div className="my-3">
                        {post.content && <RichText className="space-y-3" data={post.content} converters={jsxConverters} /> }
                    </div>
                </div>
            </Container>
        </main>
    );
}