import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { NavBar } from "@/components/shared/Navbar"
import { CircleUserRound } from "lucide-react"

export default function Component() {
  return (
    <>
    <NavBar/>
    <div className=" bg-[#141516]">
    <div className="container lg:max-w-[75%] text-white grid items-start w-full min-h-screen gap-4 px-4 pb-4 md:px-6 md:gap-8 ">
      <div className=" flex flex-col gap-2 mt-24">
        {/* <header className="flex items-center justify-between">
          <Link className="flex items-center gap-2 text-xl font-semibold" href="#">
            <PlayIcon className="w-6 h-6" />
            Watch Party
          </Link>
          <Button size="sm" variant="outline">
            Join the Chat
          </Button>
        </header> */}
        <div className="grid gap-2">
          <div className="grid gap-2 ml-[10%]">
            <h1 className="text-3xl font-bold tracking-tighter">The Future of Jamstack</h1>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Session with Chris on the latest trends in Jamstack architecture.
            </p>
          </div>
          <div className="flex items-center gap-2 lg:w-[80%] mx-auto mt-8">
            <Image
              alt="Avatar"
              className="rounded-full"
              height="50"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaXJjbGUtdXNlci1yb3VuZCI+PHBhdGggZD0iTTE4IDIwYTYgNiAwIDAgMC0xMiAwIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMCIgcj0iNCIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIi8+PC9zdmc+"
              style={{
                aspectRatio: "50/50",
                objectFit: "cover",
              }}
              width="50"
            />
            <div className="flex flex-col">
              <h3 className="font-semibold">Chris</h3>
              <p className="text-xs leading-none">Host</p>
            </div>
            <div className="ml-auto grid gap-1">
              {/* <Button size="sm" variant="ghost">
                Follow
              </Button>
              <Button size="sm" variant="ghost">
                View Profile
              </Button> */}
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-lg border border-gray-200 lg:w-[80%] mx-auto aspect-video overflow-hidden">
        <div className="w-full h-1/3" />
      </div>
      <div className="flex flex-col lg:w-[80%] mx-auto gap-4">
        <div className="grid gap-2">
          <h2 className="text-2xl font-bold">Live Chat</h2>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Ask questions and interact with the host and other viewers.
          </p>
        </div>
        <div className="grid gap-4">
          <div className="flex items-start gap-4">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
              {/* <CircleUserRound /> */}
              <Image
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaXJjbGUtdXNlci1yb3VuZCI+PHBhdGggZD0iTTE4IDIwYTYgNiAwIDAgMC0xMiAwIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMCIgcj0iNCIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIi8+PC9zdmc+"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
                <div className="flex items-center gap-1">
                  <h4 className="font-semibold">Sarah</h4>
                  <time className="text-sm text-gray-500 dark:text-gray-400">2:14pm</time>
                </div>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Excited to be here! Looking forward to the session. 👋
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
              
              <Image
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaXJjbGUtdXNlci1yb3VuZCI+PHBhdGggZD0iTTE4IDIwYTYgNiAwIDAgMC0xMiAwIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMCIgcj0iNCIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIi8+PC9zdmc+"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />

                <div className="flex items-center gap-1">
                  <h4 className="font-semibold">Mark</h4>
                  <time className="text-sm text-gray-500 dark:text-gray-400">2:16pm</time>
                </div>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Hey everyone! Quick question for the host: What are the key benefits of using Jamstack in an e-commerce
                setting?
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <Input className="flex-1 min-w-0 bg-transparent" placeholder="Type your message..." type="text" />
          <Button
            className="h-10"
            style={{
              aspectRatio: "1.5",
            }}
          >
            Send
          </Button>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

function PlayIcon(props: any) {
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
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  )
}