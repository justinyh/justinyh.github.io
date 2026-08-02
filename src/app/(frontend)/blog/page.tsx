import { Metadata } from "next"
import { getPayload } from 'payload'
import config from "@payload-config"
import { Post } from "./Post"
import Container from "@/components/Container"

export const metadata: Metadata = {
    title: 'Justin Hu | Blog',
    description: 'Justin Hu is a software engineer based in Chicago, IL. He has over three years of development experience.',
  }

export default function Blog() {
    // const payload = await getPayload({ config })
    // const posts = await payload.find({
    //     collection: "posts"
    // })
    return (
        <main>
            <Container>
                <div className="text-center">
                    Coming soon!
                </div>
            {/* {
                posts.docs.map((doc) => (<Post key={doc.id} post={doc} />))
            } */}
            </Container>
        </main>
    )
}