import { Metadata } from "next"
import { getPayload } from 'payload'
import config from "@payload-config"
import Container from "@/components/Container"
import Link from "next/link"
import Card from "@/components/Card"
import { isExpandedDoc } from "@/util/payload-helpers"
import { Image as ImageType, Post } from "@/payload-types"
import Image from "next/image"

export const metadata: Metadata = {
    title: 'Justin Hu | Blog',
    description: 'Justin Hu is a software engineer based in Seattle, WA. He has over five years of development experience.',
  }

interface BlogPostCardProps {
    post: Post
}

const BlogPostCard = ({post}: BlogPostCardProps) => {
    const thumbNailSrc = isExpandedDoc<ImageType>(post.thumbnail) ? post.thumbnail.url : undefined;

    return (
        <Link href={`/blog/${post.id}`} key={post.id}>
                <Card>
                    {thumbNailSrc ? <Image width={240} height={240} src={thumbNailSrc} alt="test" /> : null}
                    <div className="p-6 text-center">{post.title}</div>
                </Card>
        </Link>
    );
}

export default async function Blog() {
    const payload = await getPayload({ config })
    const posts = await payload.find({
        collection: "posts"
    });
    return (
        <main>
            <Container>
                <div className="grid grid-cols-3 gap-6 justify-center">
                {posts.totalDocs === 0 ?
                <div className="text-center">Coming soon!</div> : 
                posts.docs.map((post) => <BlogPostCard key={post.id} post={post} />
                    )}
                    </div>
            </Container>
        </main>
    )
}