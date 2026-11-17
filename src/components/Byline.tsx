import { User } from "@/payload-types";
import { DateComponent } from "@/components/DateComponent";

interface Props {
    author: Pick<User, "name" | "profilePicture"> | string
    date?: string | null
    showTime?: boolean
    stackOnMobile?: boolean
}

export const Byline = ({ author, date, showTime, stackOnMobile }: Props) => {
    if (typeof author !== "object" || !author.name) {
        return null;
    }
    const avatar = typeof author.profilePicture === "object" ? author.profilePicture : null;
    const avatarSrc = avatar?.sizes?.thumbnail?.url || avatar?.url;

    return (
        <div className="flex items-center gap-3">
            {avatar && avatarSrc &&
                <img src={avatarSrc} alt={avatar.alt} width={40} height={40} className="size-10 shrink-0 rounded-full object-cover" />
            }
            <span className="text-base">
                <span className="font-semibold">{author.name}</span>
                {date && (stackOnMobile
                    ? <span className="block text-sm opacity-70 sm:inline sm:text-base"><span className="hidden sm:inline"> · </span><DateComponent date={date} showTime={showTime} /></span>
                    : <span className="opacity-70"> · <DateComponent date={date} showTime={showTime} /></span>
                )}
            </span>
        </div>
    );
}
