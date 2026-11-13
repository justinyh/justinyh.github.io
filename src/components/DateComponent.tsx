'use client'
import { formatDate } from "@/util/format-date";

export const DateComponent = ({ date, showTime = true }: { date: string, showTime?: boolean }) => {
    return formatDate(date, { showTime });
}
