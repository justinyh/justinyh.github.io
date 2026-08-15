import { Thought as ThoughtType } from "@/payload-types";
import { RichText } from '@payloadcms/richtext-lexical/react'
import { Heading } from "@/components/Heading";
import { getPayload } from "payload";
import config from "@payload-config"
import Container from "@/components/Container";
import { DefaultNodeTypes } from "@payloadcms/richtext-lexical";
import { RefreshRouteOnSave } from "@/components/RefreshRouteOnSave";
import converters from "./converters"
import { notFound } from "next/navigation";
import { headers as getHeaders } from "next/headers";
import { Metadata } from "next";
import { DateSubHeader } from "./DateSubHeader";

interface PostPreviewProps {
    params: Promise<{slug: string}>,
    searchParams: Promise<{draft: boolean}>,
}

interface BlogHeaderProps {
    post: ThoughtType
}
type NodeTypes =
  | DefaultNodeTypes

const BlogHeader = ({ post }: BlogHeaderProps) => {
    return (
        <div className="border-b">
            <Heading level={2}>{post.title}</Heading>
            <DateSubHeader publishDate={post.publishedAt} updateDate={post.updatedAt} />
        </div>
    );
}

export async function generateMetadata(
  { params }: PostPreviewProps,
): Promise<Metadata> {
    const slug = (await params).slug
    const payload = await getPayload({ config })
    const post = await payload.findByID({
        collection: "thoughts",
        id: slug,
        disableErrors: true,
    });
 
    return {
        title: post?.title,
        description: post?.subheading,
    }
}

export default async function Post({ params, searchParams }: PostPreviewProps) {
    const { slug } = await params
    const { draft } = await searchParams
    const payload = await getPayload({ config })
    let user = null;
    if (draft) {
        const headers = await getHeaders();
        user = (await payload.auth({ headers })).user;
    }
    const post = await payload.findByID({
        collection: "thoughts",
        id: slug,
        disableErrors: true,
        draft: true,
        overrideAccess: false,
        user,
    });
    if (!post) {
        notFound();
    }
    return (
        <main className="text-lg">
            <Container>
                <div className="mt-6 color-green">
                    <BlogHeader post={post} />
                    <div className="my-3">
                        {post.content && <RichText className="space-y-3" data={post.content} converters={converters} /> }
                    </div>
                </div>
            </Container>
            <RefreshRouteOnSave />
        </main>
    );
}