import { Fragment, ReactNode } from "react";
import Image from "../../node_modules/next/image";
import Card from "./Card";
import SideBySide from "./SideBySide";
import { Manrope } from "next/font/google";
import Button from "./buttons/Button";

const manrope = Manrope({ subsets: ["latin"] });

interface ImageMetadata {
    src: string,
    alt: string,
};

interface ExperienceInfo {
    title: string,
    date: string,
    learnings?: string[],
    accomplishments?: string[],
    img: ImageMetadata
};

interface IProps {
    children?: ReactNode,
    imgSrc: string,
    imgAlt: string,
    title: string,
    date: string,
    onMoreClick?: () => void,
}

export default function Experience(props: IProps) {
    const { title, date, children, imgSrc, imgAlt, onMoreClick } = props;
    return (
        <Fragment>
                <Card>
                    <SideBySide h={3} >
                        <div className="relative flex items-center h-full w-full aspect-square sm:h-64 sm:w-64">
                            <Image src={imgSrc} alt={imgAlt} fill sizes="(max-width: 640px) 100vw, 15rem" style={{ objectFit: "cover" }}></Image>
                        </div>
                            <div className="p-6">
                                {/* <Link href={`about/${data.id}`}> */}
                                    <div className={`text-2xl font-bold ${manrope.className}`}>{title}</div>
                                {/* </Link> */}
                                <div className="mt-3 italic">{date}</div>
                                <div className="mt-3">
                                    <div className="gap-1 hidden md:block">
                                        {children}
                                        {/* <span>Biggest Accomplishment: </span>
                                        <span>{data.accomplishments?.at(0)}</span> */}
                                    </div>
                                    {onMoreClick && <Button onClick={onMoreClick}>Learn more</Button> }
                                </div>
                        </div>
                    </SideBySide>
                </Card>
        </Fragment>
    );
  }