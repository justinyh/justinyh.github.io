import { User } from "@/payload-types";
import { DateComponent } from "@/components/DateComponent";

interface Props {
    author: Pick<User, "name" | "profilePicture"> | string
    date?: string | null
    showTime?: boolean
    small?: boolean
}

export const Byline = ({ author, date, showTime, small }: Props) => {
    if (typeof author !== "object" || !author.name) {
        return null;
    }
    const avatar = typeof author.profilePicture === "object" ? author.profilePicture : null;
    const avatarSrc = avatar?.sizes?.thumbnail?.url || avatar?.url;

    return (
        <div className={`flex items-center ${small ? "gap-2" : "gap-3"}`}>
            {avatar && avatarSrc &&
                <img src={avatarSrc} alt={avatar.alt} width={40} height={40} className={`${small ? "size-6" : "size-10"} shrink-0 rounded-full object-cover`} />
            }
            <span className={small ? "text-sm" : "text-base"}>
                <span className="font-semibold">{author.name}</span>
                {date && <span className="opacity-70"> · <DateComponent date={date} showTime={showTime} /></span>}
            </span>
        </div>
    );
}
