import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"
import landing from "../../assests/placeholder.jpg";
import Image from "next/image";

export default function Component() {
  return (
    
      <main className="flex-1">
        <section className="w-full h-[calc(100vh-56px)]">
          <div className="relative w-full aspect-video overflow-hidden">
            <Image
              alt="Hero"
              className="object-cover object-center h-[calc(100vh-56px)]"
              src={landing}
              style={{
                aspectRatio: "1920/1080",
                objectFit: "cover",
              }}
              width="1920"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 px-4 text-center md:px-6">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Unlimited Entertainment</h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Watch anywhere. Cancel anytime. All for one low monthly price.
                </p>
              </div>
              <Button className="mx-auto" size="lg">
                Connect Wallet
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-10">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Watch on any device</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Enjoy on your TV. Watch on your laptop. Indulge on your tablet. All without a single ad.
                </p>
              </div>
              <div className="grid items-center gap-4 sm:gap-6">
                <Image
                  alt="Image"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="310"
                  src={landing}
                  width="550"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-10">
              <div className="grid items-center gap-4 sm:gap-6 lg:order-2">
                <Image
                  alt="Image"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="310"
                  src={landing}
                  width="550"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Family movie night. Movie marathon.
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  We have the perfect lineup. Classic movies. Latest releases. Hidden gems. All curated for you.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-10">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Binge-worthy TV shows</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Addictive dramas. Hilarious comedies. Edge-of-your-seat thrillers. Your next obsession is just a click
                  away.
                </p>
              </div>
              <div className="grid items-center gap-4 sm:gap-6">
                <Image
                  alt="Image"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="310"
                  src={landing}
                  width="550"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Experience the workflow the best frontend teams love.
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Let your team focus on shipping features instead of managing infrastructure with automated CI/CD.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                <Button type="submit">Sign Up</Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Sign up to get notified when we launch.
                <Link className="underline underline-offset-2" href="#">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
    
    
  )
}

function MountainIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
