import { Media } from "@/payload-types";
import { ComponentProps } from "react";

type SizeName = keyof NonNullable<Media["sizes"]>;

const responsiveSizes: SizeName[] = ["small", "medium", "large", "xlarge"];

interface Props extends Omit<ComponentProps<"img">, "src" | "srcSet" | "alt" | "width" | "height"> {
    media: Media
    sizes: string
    priority?: boolean
}

export const PayloadImage = ({ media, sizes, priority, ...rest }: Props) => {
    const candidates = responsiveSizes
        .map((name) => media.sizes?.[name])
        .filter((size) => size?.url && size.width)
        .map((size) => ({ url: size!.url!, width: size!.width! }));
    const widest = Math.max(0, ...candidates.map((c) => c.width));
    if (!media.sizes?.xlarge?.url && media.url && media.width && media.width > widest) {
        candidates.push({ url: media.url, width: media.width });
    }
    const unique = candidates.filter((c, i) => candidates.findIndex((other) => other.width === c.width) === i);
    const srcSet = unique.length
        ? unique.map((c) => `${c.url} ${c.width}w`).join(", ")
        : undefined;
    const src = media.sizes?.large?.url || media.url;

    if (!src) {
        return null;
    }

    return (
        <img
            {...rest}
            src={src}
            srcSet={srcSet}
            sizes={srcSet ? sizes : undefined}
            width={media.width ?? undefined}
            height={media.height ?? undefined}
            alt={media.alt}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : undefined}
            decoding="async"
        />
    );
}
