interface FormatDateParams {
    dateStyle?: Intl.DateTimeFormatOptions["dateStyle"],
    timeStyle?: Intl.DateTimeFormatOptions["timeStyle"],
}

export const formatDate = (date: string, options?: FormatDateParams) => {
    const dateObj = new Date(date);
    return new Intl.DateTimeFormat(undefined, {
        dateStyle: options?.dateStyle || "long",
        timeStyle: options?.timeStyle || "short",
    }).format(dateObj);
}