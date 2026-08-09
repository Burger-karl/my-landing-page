import React from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

const YouCanDoWithTOTC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text column */}
        <div className="relative isolate">
          <span className="absolute -top-4 -left-4 size-14 rounded-full bg-[#1FC8A9]/80 -z-10" />

          <h2 className="font-heading font-semibold text-2xl md:text-4xl leading-snug">
            <span className="text-[#0D0D26]">
              Everything you can do in a physical classroom,{" "}
            </span>
            <span className="text-[#1FC8A9]">you can do with TOTC</span>
          </h2>

          <p className="relative mt-6 text-[#5B5B5B] text-base md:text-lg leading-relaxed">
            TOTC&apos;s school management software helps traditional and online
            schools manage scheduling, attendance, payments and virtual
            classrooms all in one secure cloud- based system.
            <span className="absolute right-0 top-[3.2em] size-4 rounded-full bg-[#1FC8A9]" />
          </p>

          <a
            href="#"
            className="inline-block mt-6 text-[#0D0D26] font-medium underline underline-offset-4"
          >
            Learn more
          </a>
        </div>

        {/* Image column */}
        <div className="relative isolate">
          <span className="absolute -top-4 -left-4 w-24 h-24 rounded-3xl bg-[#29B6E8] -z-10" />
          <span className="absolute -bottom-4 -right-4 w-24 h-24 rounded-3xl bg-[#1FC8A9] -z-10" />

          <div className="relative rounded-3xl overflow-hidden aspect-[720/540]">
            <Image
              src="/images/class.png"
              alt="Teacher with students in a classroom using laptops"
              fill
              className="object-cover"
            />

            <button
              type="button"
              aria-label="Play video"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-16 rounded-full bg-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
            >
              <FaPlay className="text-[#29B6E8] ml-1 size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouCanDoWithTOTC;
