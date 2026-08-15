'use client'
import { formatDate } from "@/util/format-date";

export const DateComponent = ({date}: {date: string}) => {
    return formatDate(date);
}