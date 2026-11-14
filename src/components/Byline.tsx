import { User } from "@/payload-types";
import { DateComponent } from "@/components/DateComponent";

interface Props {
    author?: Pick<User, "name" | "profilePicture"> | string | null
    date?: string | null
    showTime?: boolean
}

export const Byline = ({ author, date, showTime }: Props) => {
    const profile = typeof author === "object" ? author : null;
    const name = profile?.name || "Justin Hu";
    const avatar = typeof profile?.profilePicture === "object" ? profile.profilePicture : null;
    const avatarSrc = avatar?.sizes?.thumbnail?.url || avatar?.url;

    return (
        <div className="flex items-center gap-3">
            {avatar && avatarSrc &&
                <img src={avatarSrc} alt={avatar.alt} width={40} height={40} className="size-10 shrink-0 rounded-full object-cover" />
            }
            <span className="text-base">
                <span className="font-semibold">{name}</span>
                {date && <span className="opacity-70"> · <DateComponent date={date} showTime={showTime} /></span>}
            </span>
        </div>
    );
}
