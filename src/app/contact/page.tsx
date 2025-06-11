"use client"

import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-white tracking-light text-[32px] font-bold leading-tight">
              Get in Touch
            </p>
            <p className="text-[#a1abb5] text-sm font-normal leading-normal">
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions. Feel free to reach out!
            </p>
          </div>
        </div>
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-white text-base font-medium leading-normal pb-2">
              Your Name
            </p>
            <input
              placeholder="Enter your name"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border border-[#3f4750] bg-[#1d2125] focus:border-[#3f4750] h-14 placeholder:text-[#a1abb5] p-[15px] text-base font-normal leading-normal"
             onChange={()=>console.log("Hello")}
             value={""}
            />
          </label>
        </div>
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-white text-base font-medium leading-normal pb-2">
              Your Email
            </p>
            <input
              placeholder="Enter your email"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border border-[#3f4750] bg-[#1d2125] focus:border-[#3f4750] h-14 placeholder:text-[#a1abb5] p-[15px] text-base font-normal leading-normal"
              value=""
               onChange={()=>console.log("Hello")}
            />
          </label>
        </div>
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-white text-base font-medium leading-normal pb-2">
              Subject
            </p>
            <input
              placeholder="Enter the subject"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border border-[#3f4750] bg-[#1d2125] focus:border-[#3f4750] h-14 placeholder:text-[#a1abb5] p-[15px] text-base font-normal leading-normal"
              value=""
               onChange={()=>console.log("Hello")}
            />
          </label>
        </div>
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-white text-base font-medium leading-normal pb-2">
              Message
            </p>
            <textarea
              placeholder="Enter your message"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border border-[#3f4750] bg-[#1d2125] focus:border-[#3f4750] min-h-36 placeholder:text-[#a1abb5] p-[15px] text-base font-normal leading-normal"
            ></textarea>
          </label>
        </div>
        <div className="flex px-4 py-3 justify-start">
          <Button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#327fcc] text-white text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Send Message</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
