import { Post as PostType } from "../../../../payload-types";
import { RichText } from '@payloadcms/richtext-lexical/react'
import { Heading } from "@/components/Heading";


interface PostPreviewProps {
    post: PostType,
}

export const Post = ({ post }: PostPreviewProps) => {
    return (
        <div>
            <Heading>{post.title}</Heading>
            {post.content && <RichText data={post.content} /> }
        </div>
    );
}