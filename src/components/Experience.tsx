import { Fragment, ReactNode } from "react";
import Image, { StaticImageData } from "../../node_modules/next/image";
import Card from "./Card";
import SideBySide from "./SideBySide";

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
    data: ExperienceInfo,
}

const openModal = () => {
    alert("test");
}

export default function Experience(props: IProps) {
    const { data, children } = props;
    return (
        <Fragment>
                <Card>
                    <SideBySide h={3} >
                        <div className="relative h-80 sm:h-auto sm:w-60 flex-shrink-0">
                            <Image src={data.img.src} alt={data.img.alt} fill sizes="(max-width: 640px) 100vw, 15rem" style={{ objectFit: "cover" }}></Image>
                        </div>
                        <div>
                            <div className="p-6">
                                {/* <Link href={`about/${data.id}`}> */}
                                    <div className="text-2xl font-bold">{data.title}</div>
                                {/* </Link> */}
                                <div className="mt-3 italic">{data.date}</div>
                                <div className="mt-3">
                                    <div className="gap-1 hidden md:block">
                                        <span>Biggest Accomplishment: </span>
                                        <span>{data.accomplishments?.at(0)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SideBySide>
                </Card>
        </Fragment>
    );
  }