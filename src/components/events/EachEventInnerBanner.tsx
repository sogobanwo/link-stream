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

interface InnerBannerProps {
    caption: string;
    pageTitle: string;
    idImage: StaticImageData;
}

const EachEventInnerBanner: React.FC<InnerBannerProps> = ({ caption, pageTitle, idImage}) => {
    return (
        <div className="relative bg-center">
            <div className="">
                <Image src={idImage} alt="Banner" className="w-full max-h-[45vh]"/>
            </div>
            <div className="bg-white opacity-25" />
            <div className="container mt-28 z-10 absolute inset-0">
                <div className="py-16 text-center flex flex-col items-center justify-center">
                    <h2 className="text-4xl font-bold mb-8 text-white">{caption}</h2>
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/" className="text-white text-xl">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/events" className="text-white text-xl">events</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage className="text-xl">{pageTitle}</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>
        </div>
    );
};

export default EachEventInnerBanner;
