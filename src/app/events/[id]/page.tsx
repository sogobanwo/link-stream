/* eslint-disable react/no-unescaped-entities */
'use client'
import { useParams } from 'next/navigation';
import { NavBar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { Event, events } from "../../../DummyData/data";
import EachEventInnerBanner from "@/components/events/EachEventInnerBanner";
import copy from "../../../../assests/events/Copy.svg";
import Facebook from "../../../../assests/events/Facebook.svg";
import Instagram from "../../../../assests/events/Instagram.svg";
import Twitter from "../../../../assests/events/Twitter.svg";

import Image from 'next/image';
import { EventCard } from '@/components/events/EventCard';

interface IdProps {
  event: Event;
}

const Id: React.FC<IdProps> = () => {
  const params = useParams<{ id: string }>();
  const eventId = params.id;
  const lastThreeEvents = events.slice(-3);

  const foundEvent = events.find(event => event.id === eventId);
  console.log(eventId)

  if (!foundEvent) {
    return <div>Event not found</div>;
  }

  const { title, eventHeadline, timestamp, eventType, type, eventImage, attendeesTotal, id, role, description } = foundEvent;

  return (
    <main className="flex-1">
      <NavBar />
      <EachEventInnerBanner caption={title} pageTitle={title} idImage={eventImage} />
      
      <div className="flex mdl:flex-row flex-col bg-gray-100 items-center justify-center">
        <div className="w-screen p-4 mt-8 mdl:w-[58%] mdl:mx-[1%] max-w-[1280px]">
          <div>
            <div className="mb-4">
              <h1 className="text-xl font-bold mb-2">Description</h1>
              <p className="text-base font-normal">
                {description}
              </p>
            </div>
            <div className="mb-4">
              <h1 className="text-xl font-bold mb-2">Hours</h1>
              <p className="text-xl font-normal mb-2">
                Saturday: <span>12:00pm - 3:00pm</span>
              </p>
            </div>
            <div className="mb-4">
              <h1 className="text-xl font-bold mb-2">Share with Friends</h1>
              <div className="flex gap-4">
                <Image src={Facebook} width={32} height={32} alt="facebook" />
                <Image src={Instagram} width={32} height={32} alt="instagram" />
                <Image src={Twitter} width={32} height={32} alt="twitter" />
                <Image src={copy} width={20} height={20} alt="twitter" className="w-[32px] h-[32px] bg-white rounded-full p-1" />
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <section className="w-full py-12 md:py-12 lg:py-12 bg-gray-100">
          <div className="flex flex-col items-center gap-10 text-[#141516]">
            <div>
              <div className="flex flex-wrap gap-6">

                {lastThreeEvents.map((event: Event, index: number) =>
                (
                  <EventCard event={event} key={index} />
                ))}

              </div>
            </div>

          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default Id;
