import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import banner from "../../../assests/events/banner.jpg"


interface InnerBannerProps {
    caption: string;
    pageTitle: string;
    idImage: StaticImageData;
}

const EachEventInnerBanner: React.FC<InnerBannerProps> = ({ caption, pageTitle, idImage}) => {
    return (
        <div className="relative bg-center">
            <div className="">
                <Image src={banner} alt="Banner" />
            </div>
            <div className="bg-white opacity-25" />
            <div className="container mt-28 z-10 absolute inset-0">
                <div className="py-16 text-center flex flex-col items-center justify-center">
                    <h2 className="text-4xl font-bold mb-8">{caption}</h2>
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/events">events</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>{pageTitle}</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>
        </div>
    );
};

export default EachEventInnerBanner;
