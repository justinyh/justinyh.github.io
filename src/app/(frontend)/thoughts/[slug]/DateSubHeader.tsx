'use client'
import { formatDate } from "@/util/format-date";

const MS_PER_DAY = 1000 * 60 * 60 * 24;

export const DateSubHeader = ({ publishDate, updateDate }: 
    {
        publishDate?: string | null,
        updateDate?: string | null
    },
) => {
    if (!publishDate || !updateDate) {
        return (
            <div className="py-3">
                Posted by: Justin Hu
            </div>
        );
    }
    const showUpdateDate = new Date(updateDate).getTime() - new Date(publishDate).getTime() > MS_PER_DAY;
    return (
        <div className="py-3">
            <div>
                Posted by: Justin Hu {publishDate && `on ${formatDate(publishDate)}`}
            </div>
            { showUpdateDate &&
                <div>
                    Updated at: {formatDate(updateDate)}
                </div>
            }
        </div>
    );
}