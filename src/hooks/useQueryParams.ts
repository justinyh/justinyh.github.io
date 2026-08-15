import { ReadonlyURLSearchParams, usePathname, useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"

export default function useQueryParams(): [searchParams: ReadonlyURLSearchParams, (searchParams: URLSearchParams) => void] {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams();

    return [
        searchParams,
        (searchParams: URLSearchParams) => {
            router.push(pathname + '?' + searchParams)
        }
    ];
}