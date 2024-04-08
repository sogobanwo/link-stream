"use client";
import Image from "next/image";
import cardImage from "../../../assests/events/Card Picture.png";
import { UsersRound } from "lucide-react";

export const EventCard = () => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <Image className="rounded-t-lg" src={cardImage} alt="" />
      </a>
      <div className="p-5">
        <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900">
          ESG Data - How to create it
        </h5>
        <p className="mb-3 font-normal text-gray-700 text-sm">
          ESG Regulations, Standards and Disclosure: Who to publish it for and
          how to make it meaningful.
        </p>
        <div className="card-footer flex justify-between mt-8">
          <div>
            <UsersRound className="text-gray-900"/>
          </div>
        </div>
      </div>
    </div>
  );
};
