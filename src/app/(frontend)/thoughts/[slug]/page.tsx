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
import { convertLexicalToPlaintext } from "@payloadcms/richtext-lexical/plaintext";
import { isMediaType } from "@/util/payload-helpers";
import { Byline } from "@/components/Byline";
import { RevealGroup, RevealItem } from "./Reveal";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

interface PostPreviewProps {
    params: Promise<{slug: string}>,
    searchParams: Promise<{draft: boolean}>,
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
    if (post?._status !== "published") {
        return {};
    }

    const text = post.subheading || (post.content ? convertLexicalToPlaintext({ data: post.content }).replace(/\s+/g, " ").trim() : "")
    const description = text.length > 155 ? text.slice(0, 155).trimEnd() + "…" : text
    const image = isMediaType(post.hero) ? post.hero.url : undefined
    const title = post.title ?? undefined

    return {
        metadataBase: new URL("https://justinyh.com"),
        title: title && `${title} | Justin Hu`,
        description,
        openGraph: {
            type: "article",
            title,
            description,
            publishedTime: post.publishedAt ?? undefined,
            images: image ? [image] : undefined,
        },
        twitter: {
            card: image ? "summary_large_image" : "summary",
        },
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
        draft: Boolean(user),
    });
    if (!post || (!user && post._status !== "published")) {
        notFound();
    }
    const hero = typeof post.hero === "object" ? post.hero : null;

    return (
        <main className="text-lg">
            <Container>
                <div className="mt-3 w-full max-w-2xl mx-auto">
                    <Link href="/thoughts" className="group inline-flex items-center gap-2 text-base opacity-70 transition hover:opacity-100 hover:text-primary">
                        <FontAwesomeIcon icon={faArrowLeft} className="size-3.5 transition-transform group-hover:-translate-x-1" />
                        All thoughts
                    </Link>
                </div>
                <RevealGroup className="mt-4 flex flex-col gap-6 color-green">
                    <RevealItem kind="title" className="w-full max-w-2xl mx-auto">
                        <Heading level={2}>{post.title}</Heading>
                    </RevealItem>
                    {hero?.url &&
                        <RevealItem kind="hero">
                            <img
                                src={hero.url}
                                width={hero.width ?? undefined}
                                height={hero.height ?? undefined}
                                alt={hero.alt}
                                className="w-full h-auto max-h-[70vh] object-cover rounded-md"
                            />
                        </RevealItem>
                    }
                    <RevealItem kind="meta" className="w-full max-w-2xl mx-auto">
                        <Byline author={post.author} date={post.publishedAt} />
                    </RevealItem>
                    <RevealItem kind="body" className="mb-3 w-full max-w-2xl mx-auto">
                        {post.content && <RichText className="space-y-3" data={post.content} converters={converters} /> }
                    </RevealItem>
                </RevealGroup>
            </Container>
            {user && <RefreshRouteOnSave />}
        </main>
    );
}