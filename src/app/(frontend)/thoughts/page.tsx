import { Metadata } from "next"
import { getPayload } from 'payload'
import config from "@payload-config"
import Container from "@/components/Container"
import Link from "next/link"
import Card from "@/components/Card"
import { isExpandedDoc } from "@/util/payload-helpers"
import { Media, Thought } from "@/payload-types"
import Image from "next/image"
import { Heading } from "@/components/Heading"

export const metadata: Metadata = {
    title: 'Justin Hu | Thoughts',
    description: 'Justin Hu is a software engineer based in Seattle, WA. He has over five years of development experience.',
  }

interface BlogPostCardProps {
    post: Thought
}

const BlogPostCard = ({post}: BlogPostCardProps) => {
    const thumbNail = isExpandedDoc<Media>(post.thumbnail) ? post.thumbnail : undefined;

    return (
        <Link href={`/thoughts/${post.id}`} key={post.id}>
                <Card>
                    {thumbNail?.url ? <Image width={640} height={640} src={thumbNail.url} alt={thumbNail.alt || ""} unoptimized /> : null}
                    <div className="p-6 text-center font-bold text-lg">{post.title}</div>
                </Card>
        </Link>
    );
}

export default async function Blog() {
    const payload = await getPayload({ config })
    const posts = await payload.find({
        collection: "thoughts"
    });
    return (
        <main>
            <Container>
                <Heading>Thoughts</Heading>
                {posts.totalDocs === 0 ?
                    <div className="text-center">Coming soon!</div> : 
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center mt-6">
                        {posts.docs.map((post) => <BlogPostCard key={post.id} post={post} />)}
                    </div>
                }
            </Container>
        </main>
    )
}