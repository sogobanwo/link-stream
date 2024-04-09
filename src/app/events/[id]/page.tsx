/* eslint-disable react/no-unescaped-entities */
import { NavBar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { Event } from "../../../DummyData/data";
import EachEventInnerBanner from "@/components/events/EachEventInnerBanner";

interface IdProps {
    event: Event;
}

const Id: React.FC<IdProps> = ({ event }) => {
    const { title, eventHeadline, timestamp, eventType, type, eventImage, attendeesTotal, id, role, description } = event;

    return (
        <main className="flex-1">
            <NavBar />
            <EachEventInnerBanner caption="Checkout all our events" pageTitle={title} idImage={eventImage} />
            <section className="w-full py-8 md:py-12 lg:py-20 bg-gray-100">
                <div className="flex flex-col items-center gap-10 text-[#141516]">
                   
                </div>
            </section>
            <Footer />
        </main>
    );
};

export default Id;
