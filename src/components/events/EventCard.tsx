"use client";
import Image from "next/image";
import { UsersRound } from "lucide-react";
import { Event } from "../../DummyData/data"; 
import Link from "next/link";

interface Props {
  event: Event;
}

export const EventCard = ({ event }: Props) => {
  return (
    <Link href={`/events/${event.id}`} className="max-w-xs bg-white border border-gray-200 rounded-lg shadow relative">
        <span className="bg-white rounded-md px-3 py-1 text-xs font-semibold absolute left-3 top-3">{event.type}</span>
        <Image className="rounded-t-lg" src={event.eventImage} alt="event-image" width={"320"}/>
      <div className="p-5 px-3">
        <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900">
          {event.title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 text-sm">
          {event.eventHeadline}
        </p>
        <div className="card-footer flex justify-between items-center mt-8  border-t pt-3">
          <div>
           <span className="flex items-center text-sm"> <UsersRound className="text-gray-900 mr-2 text-xs" /> {event.attendeesTotal}</span>
          </div>
          <span className="rounded-full bg-green-400 px-3 py-1 text-xs text-white font-semibold">{event.eventType}</span>
        </div>
      </div>
    </Link>
  );
};
