"use client";
import Image from "next/image";
import cardImage from "../../../assests/events/Card Picture.png";
import { UsersRound } from "lucide-react";

export const EventCard = () => {
  return (
    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow relative">
        <span className="bg-white rounded-md px-3 py-1 text-xs font-semibold absolute left-3 top-3">Free</span>
      <Image className="rounded-t-lg" src={cardImage} alt="" />
      <div className="p-5 px-3">
        <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900">
          ESG Data - How to create it
        </h5>
        <p className="mb-3 font-normal text-gray-700 text-sm">
          ESG Regulations, Standards and Disclosure: Who to publish it for and
          how to make it meaningful.
        </p>
        <div className="card-footer flex justify-between items-center mt-8  border-t pt-3">
          <div>
           <span className="flex items-center text-sm"> <UsersRound className="text-gray-900 mr-2 text-xs" /> 20</span>
          </div>
          <span className="rounded-full bg-green-400 px-3 py-1 text-xs text-white font-semibold">Live</span>
        </div>
      </div>
    </div>
  );
};
