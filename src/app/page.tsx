import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from "react";
import hero from "../../assests/landingpage/Hero.png";
import landingImg2 from "../../assests/landingpage/landingImg2.png";
import landingImg3 from "../../assests/landingpage/landingImg3.png";
import landingImg4 from "../../assests/landingpage/landingImg4.png";
import Image from "next/image";
import { Web3Modal } from "@/connection";
import { NavBar } from "@/components/shared/Navbar";
import { EventCard } from "@/components/events/EventCard";

export default function Component() {
  return (
    <main className="flex-1">
      <NavBar />

      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#141516]">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-10">
            <div className="grid items-center gap-4 sm:gap-6 order-2">
              <Image
                alt="Image"
                className="mx-auto rounded-xl object-cover object-center"
                src={hero}
                // width="550"
              />
            </div>
            <div className="space-y-4 text-white">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-10">
                Reach more people in real time
              </h1>
              <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-x/relaxed ">
                The Screeno ecosystem is designed to help you generate profit.
                Set up complete sales and marketing funnels with ease using the
                Screeno
              </p>

              <div className="flex flex-row gap-6">
                <Button className="rounded-full px-12 py-6 border border-[#006AFF] bg-[#006AFF]">
                  Get started
                </Button>

                <Button className="rounded-full px-12 py-6 border border-[#006AFF] bg-[#141516]">
                  Connect wallet
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            All-in-one platform
          </h1>
          <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-x/relaxed ">
            You take care of the video quality and we take care of everything
            else
          </p>
          <div className="flex flex-row gap-6">
            <Button className="rounded-full px-12 py-6 border border-[#006AFF] bg-[#006AFF]">
              Get started
            </Button>

            <Button className="rounded-full px-12 py-6 border border-[#141516] bg-white text-[#141516] hover:text-white">
              Connect wallet
            </Button>
          </div>
          <div className="grid grid-rows-2 grid-flow-col lg:max-w-[80%] items-center gap-6 container px-6 md:px-8 mt-12">
            <div className="max-w-[250px]">
              <div className="mb-5">
                <p className="font-semibold">Upload & Organize</p>
              </div>
              <p className="text-base">
                Upload in bulk, organize content in categories, add custom
                filters & upload extras.
              </p>
            </div>

            <div className="max-w-[250px]">
              <div className="mb-5">
                <p className="font-semibold">Stream On-Demand</p>
              </div>
              <p className="text-base">
                Showcase your content in a beautiful on-demand video catalog.
              </p>
            </div>

            <div className="max-w-[250px]">
              <div className="mb-5">
                <p className="font-semibold">Stream Live</p>
              </div>
              <p className="text-base">
                Schedule events in advance & build excitement with a countdown
                overlay.
              </p>
            </div>

            <div className="max-w-[250px]">
              <div className="mb-5">
                <p className="font-semibold">Monetization</p>
              </div>
              <p className="text-base">
                Offer subscriptions or one-time purchases. Accept credit cards &
                PayPal.
              </p>
            </div>

            <div className="max-w-[250px]">
              <div className="mb-5">
                <p className="font-semibold">Stream Live</p>
              </div>
              <p className="text-base">
                Schedule events in advance & build excitement with a countdown
                overlay.
              </p>
            </div>

            <div className="max-w-[250px]">
              <div className="mb-4">
                <p className="font-semibold">For all devices</p>
              </div>
              <p className="text-base">Get organized on all devices</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#141516]">
        <h1 className="text-3xl text-center text-white font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 lg:mb-24">
          We help you grow
        </h1>
        <div className="container px-4 md:px-6 mb-48">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-10">
            <div className="grid items-center gap-4 sm:gap-6 order-2">
              <Image
                alt="Image"
                className="mx-auto rounded-xl object-cover object-center"
                src={landingImg2}
                // width="550"
              />
            </div>
            <div className="space-y-4 text-white">
              <h1 className="text-4xl font-bold tracking-tighter mb-4">
                Monetize your way
              </h1>
              <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-x/relaxed ">
                Set up subscriptions, rentals, or one-time buys for access to
                your VOD and live streams. Create exclusive experiences for your
                subscribers with coupons and promotions. One predictable fee,
                transparent pricing, and same-day setup.
              </p>
            </div>
          </div>
        </div>

        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-10">
            <div className="grid items-center gap-4 sm:gap-6 order-last lg:order-first">
              <Image
                alt="Image"
                className="mx-auto rounded-xl object-cover object-center"
                src={landingImg3}
                // width="550"
              />
            </div>
            <div className="space-y-4 text-white">
              <h1 className="text-4xl font-bold tracking-tighter mb-4">
                Optimized for growth
              </h1>
              <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-x/relaxed ">
                The Screeno ecosystem is designed to help you generate profit.
                Set up complete sales and marketing funnels with ease using the
                Screeno built-in marketing tools and integrations. Generate
                leads and convert your audience into paying subscribers, at no
                extra cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="flex flex-col items-center gap-10 text-[#141516]">
          <h1 className="text-3xl text-center font-bold tracking-tighter sm:text-4xl md:text-5xl mb-2">
            Check out ongoing events
          </h1>
          <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-x/relaxed ">
            You take care of the video quality and we take care of everything
            else
          </p>
          
        <div className="flex flex-wrap  gap-6">
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>
        </div>
          {/* <div className="container px-4 md:px-6">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-10">
              <div className="grid items-center gap-4 sm:gap-6 order-2">
                <Image
                  alt="Image"
                  className="mx-auto rounded-xl object-cover object-center"
                  src={hero}
                  // width="550"
                />
              </div>
              <div className="space-y-4 text-white">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-10">
                  Reach more people in real time
                </h1>
                <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-x/relaxed ">
                  The Screeno ecosystem is designed to help you generate profit.
                  Set up complete sales and marketing funnels with ease using
                  the Screeno
                </p>

                <div className="flex flex-row gap-6">
                  <Button className="rounded-full px-12 py-6 border border-[#006AFF] bg-[#006AFF]">
                    Get started
                  </Button>

                  <Button className="rounded-full px-12 py-6 border border-[#006AFF] bg-[#141516]">
                    Connect wallet
                  </Button>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </main>
  );
}
