import Link from "next/link";
import Image from "next/image";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import banner from "../../../assests/events/event-banner.png"


interface InnerBannerProps {
    caption: string;
}

const InnerBanner: React.FC<InnerBannerProps> = ({ caption }) => {
    return (
        <div className="relative bg-center">
        <div className="">
                <Image src={banner} alt="Banner" className="w-full"/>
            </div>
            <div className=" bg-white opacity-25" />
            <div className="container mt-28 z-10 absolute inset-0">
                <div className="py-20 text-center flex flex-col items-center justify-center">
                    <h2 className="text-4xl font-bold mb-8 text-white">{caption}</h2>
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink className="text-slate-100 text-xl" href="/">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage className="text-white text-xl">events</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>
        </div>
    );
};

export default InnerBanner;
