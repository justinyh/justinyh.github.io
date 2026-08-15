import { Media, Thought } from "@/payload-types";

export function isExpandedDoc<T>(doc: any): doc is T {
  if (typeof doc === 'object') return true;
  return false;
}

export const isMediaType = (input: string | Media | null | undefined) => {
    return !!input && typeof(input) !== "string";
}