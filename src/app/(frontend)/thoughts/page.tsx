import { PageMain } from "@/components/PageMain"
import { Metadata } from "next"
import { getPayload } from 'payload'
import config from "@payload-config"
import Container from "@/components/Container"
import Link from "next/link"
import { Heading } from "@/components/Heading"
import { convertLexicalToPlaintext } from '@payloadcms/richtext-lexical/plaintext'
import { isMediaType } from "@/util/payload-helpers"
import { Byline } from "@/components/Byline"
import { DateComponent } from "@/components/DateComponent"
import { Thought } from "@/payload-types"

export const metadata: Metadata = {
    title: 'Justin Hu | Thoughts',
    description: 'Justin Hu is a software engineer based in Seattle, WA. He has over five years of development experience.',
}

const excerpt = (post: Thought) =>
    post.subheading ? post.subheading : post.content && convertLexicalToPlaintext({ data: post.content })

export default async function Blog() {
    const payload = await getPayload({ config })
    const posts = await payload.find({
        collection: "thoughts",
        where: {
            _status: {
                equals: "published"
            }
        },
        sort: "-publishedAt",
    });

    // Newest post marked "featured" in the admin, falling back to the newest post.
    const featured = posts.docs.find((post) => post.featured) ?? posts.docs[0]
    const rest = posts.docs.filter((post) => post.id !== featured?.id)

    return (
        <PageMain className="text-lg">
            <Container>
                {featured &&
                    <>
                        <Link href={`/thoughts/${featured.id}`} className="mt-6 pb-8 flex flex-col gap-6">
                            {isMediaType(featured.hero) && featured.hero.url &&
                                <img
                                    src={featured.hero.url}
                                    width={featured.hero.width ?? undefined}
                                    height={featured.hero.height ?? undefined}
                                    alt={featured.hero.alt}
                                    className="w-full aspect-video object-cover rounded-md"
                                />
                            }
                            <div className="flex flex-col gap-3">
                                <Heading level={2} tag="h1">
                                    {featured.title}
                                </Heading>
                                <Byline author={featured.author} date={featured.publishedAt} showTime={false} />
                                <p className="line-clamp-3 md:line-clamp-4">
                                    {excerpt(featured)}
                                </p>
                            </div>
                        </Link>
                        {rest.length > 0 &&
                            <div className="divide-y divide-background-dk dark:divide-background-lt border-t border-background-dk dark:border-background-lt md:divide-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-6 md:gap-y-12 md:pt-8">
                                {rest.map((post) =>
                                    <Link key={post.id} href={`/thoughts/${post.id}`} className="flex flex-col gap-4 py-8 md:py-0">
                                        {isMediaType(post.hero) &&
                                            <img src={post.hero.sizes?.thumbnail?.url || ''} width={640} height={640} alt={post.hero.alt} className="w-full aspect-video object-cover rounded-md" />
                                        }
                                        <div className="min-w-0 flex flex-col gap-3">
                                            <Heading level={5} tag="h2">
                                                {post.title}
                                            </Heading>
                                            <p className="text-base line-clamp-2 md:line-clamp-3">
                                                {excerpt(post)}
                                            </p>
                                            {typeof post.author === "object" && post.author.name &&
                                                <p className="text-sm">
                                                    <span className="font-semibold">{post.author.name}</span>
                                                    {post.publishedAt && <span className="opacity-70"> · <DateComponent date={post.publishedAt} showTime={false} /></span>}
                                                </p>
                                            }
                                        </div>
                                    </Link>)}
                            </div>
                        }
                    </>
                }
            </Container>
        </PageMain>
    )
}
