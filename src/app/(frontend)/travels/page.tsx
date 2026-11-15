import { PageMain } from "@/components/PageMain"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Justin Hu | Travels',
    description: 'Justin Hu is a software engineer based in Seattle, WA.',
  }

export default function Travels() {
    return (
        <PageMain className="text-center">
            Coming soon!
        </PageMain>
    )
}