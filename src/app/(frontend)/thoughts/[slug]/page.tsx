import { Thought as ThoughtType, User as UserType } from "@/payload-types";
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
import { DateComponent } from "@/components/DateComponent";

interface PostPreviewProps {
    params: Promise<{slug: string}>,
    searchParams: Promise<{draft: boolean}>,
}

interface BlogHeaderProps {
    post: ThoughtType
    author?: Pick<UserType, "name" | "profilePicture"> | null
}

const BlogHeader = ({ post, author }: BlogHeaderProps) => {
    const name = author?.name || "Justin Hu";
    const avatar = typeof author?.profilePicture === "object" ? author.profilePicture : null;
    const avatarSrc = avatar?.sizes?.thumbnail?.url || avatar?.url;
    const hero = typeof post.hero === "object" ? post.hero : null;

    return (
        <div className="flex flex-col gap-6">
            <Heading level={2}>{post.title}</Heading>
            {hero?.url &&
                <img
                    src={hero.url}
                    width={hero.width ?? undefined}
                    height={hero.height ?? undefined}
                    alt={hero.alt}
                    className="w-full aspect-video object-cover rounded-md"
                />
            }
            <div className="flex items-center gap-3">
                {avatar && avatarSrc &&
                    <img src={avatarSrc} alt={avatar.alt} width={40} height={40} className="size-10 shrink-0 rounded-full object-cover" />
                }
                <span className="text-base">
                    <span className="font-semibold">{name}</span>
                    {post.publishedAt && <span className="opacity-70"> · <DateComponent date={post.publishedAt} /></span>}
                </span>
            </div>
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
    const authorId = typeof post.author === "object" ? post.author?.id : post.author;
    const author = authorId
        ? await payload.findByID({
            collection: "users",
            id: authorId,
            depth: 1,
            disableErrors: true,
            select: { name: true, profilePicture: true },
        })
        : null;
    return (
        <main className="text-lg">
            <Container>
                <div className="mt-6 flex flex-col gap-6 color-green">
                    <BlogHeader post={post} author={author} />
                    <div className="mb-3">
                        {post.content && <RichText className="space-y-3" data={post.content} converters={converters} /> }
                    </div>
                </div>
            </Container>
            <RefreshRouteOnSave />
        </main>
    );
}