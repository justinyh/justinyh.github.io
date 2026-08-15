export const isEnum = <T>(item: any, enumObj: Record<string, any>): item is T => {
    return Object.values(enumObj).includes(item as T);
}