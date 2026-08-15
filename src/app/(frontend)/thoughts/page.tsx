import { Metadata } from "next"
import { getPayload } from 'payload'
import config from "@payload-config"
import Container from "@/components/Container"
import Link from "next/link"
import Image from "next/image"
import { Heading } from "@/components/Heading"
import { convertLexicalToPlaintext } from '@payloadcms/richtext-lexical/plaintext'
import { formatDate } from "@/util/format-date"
import { isMediaType } from "@/util/payload-helpers"

export const metadata: Metadata = {
    title: 'Justin Hu | Thoughts',
    description: 'Justin Hu is a software engineer based in Seattle, WA. He has over five years of development experience.',
}

export default async function Blog() {
    const payload = await getPayload({ config })
    const posts = await payload.find({
        collection: "thoughts",
        where: {
            _status: {
                equals: "published"
            }
        }
    });
    return (
        <main className="text-lg">
            <Container>
                {posts.totalDocs === 0 ?
                    <div className="text-center">Coming soon!</div> :
                    <>
                    <Heading>Thoughts</Heading>
                    <div className="gap-6 justify-center">
                        <div className="divide-y divide-background-dk dark:divide-background-lt">
                            {posts.docs.map((post) => 
                                <Link key={post.id} href={`/thoughts/${post.id}`} className="grid md:grid-cols-12 gap-5 py-6">
                                    <div key={post.id} className="md:col-span-4">
                                        {isMediaType(post.hero) && <img src={post.hero.sizes?.thumbnail?.url || ''} width={640} height={640} alt={post.hero.alt} />}
                                    </div>
                                    <div className="md:col-span-8 text-ellipsis space-y-2">
                                        <Heading level={3} tag="h2">
                                            {post.title}
                                        </Heading>
                                        {post.publishedAt && <div className="italic">{formatDate(post.publishedAt)}</div>}
                                        <p className="line-clamp-4 md:line-clamp-5 xl:line-clamp-8">
                                            {post.subheading ? post.subheading : post.content && convertLexicalToPlaintext({data: post.content})}
                                        </p>
                                    </div>
                                </Link>)}
                        </div>
                    </div>
                    </>
                }
            </Container>
        </main>
    )
}