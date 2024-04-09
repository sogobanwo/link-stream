/* eslint-disable react/no-unescaped-entities */
import { NavBar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import InnerBanner from "@/components/events/InnerBanner";
import { events } from "../../DummyData/data";
import { Event } from "../../DummyData/data";
import { EventCard } from "@/components/events/EventCard";

export default function Component() {
  return (
    <main className="flex-1">
      <NavBar />
      <InnerBanner caption="Checkout all our events" />  
      <section className="w-full py-8 md:py-12 lg:py-20 bg-gray-100">
        <div className="flex flex-col items-center gap-10 text-[#141516]">
          <h1 className="text-3xl text-center font-bold tracking-tighter sm:text-4xl md:text-5xl mb-2">
            Discover Events
          </h1>
          <div>
            <div className="flex flex-wrap items-center justify-center gap-10 max-w-[1280px]">
              {events.map((event: Event, index: number) =>
              (
                <EventCard event={event} key={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
