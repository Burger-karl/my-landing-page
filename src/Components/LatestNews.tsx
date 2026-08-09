import React from "react";
import Image from "next/image";
import { FaImage } from "react-icons/fa";

const BADGE_COLOR = "#5FC3C5";

type NewsRowProps = {
  image: string | null;
  badge: string;
  title: string;
  description: string;
};

const NewsRow = ({ image, badge, title, description }: NewsRowProps) => (
  <div className="flex gap-5 sm:gap-6">
    <div className="relative w-32 sm:w-40 aspect-[4/3] shrink-0 rounded-xl overflow-hidden bg-gray-100">
      {image ? (
        <Image src={image} alt={title} fill className="object-cover" />
      ) : (
        // no source asset for this thumbnail — placeholder
        <div className="w-full h-full flex items-center justify-center">
          <FaImage className="text-gray-300 size-6" />
        </div>
      )}
      <span
        className="absolute bottom-2 right-2 text-white text-[10px] sm:text-xs font-semibold uppercase tracking-wide rounded-full px-2.5 py-1"
        style={{ backgroundColor: BADGE_COLOR }}
      >
        {badge}
      </span>
    </div>

    <div className="min-w-0">
      <h3 className="font-heading font-bold text-base sm:text-lg text-[#0D0D26] leading-snug">
        {title}
      </h3>
      <p className="mt-2 text-sm text-[#5B5B5B] line-clamp-2">{description}</p>
    </div>
  </div>
);

const LatestNews = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center font-heading font-extrabold text-3xl md:text-4xl text-[#2F327D]">
          Lastest News and Resources
        </h2>
        <p className="mt-4 text-center text-[#5B5B5B] text-lg">
          See the developments that have occurred to TOTC in the world
        </p>

        <div className="mt-16 grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Featured article */}
          <div>
            <div className="relative w-full aspect-[640/340] rounded-xl overflow-hidden">
              <Image
                src="/images/Laptop.png"
                alt="Laptop showing a Class for Zoom video call"
                fill
                className="object-cover"
              />
              <span
                className="absolute bottom-4 left-4 text-white text-xs font-semibold uppercase tracking-wide rounded-full px-4 py-1.5"
                style={{ backgroundColor: BADGE_COLOR }}
              >
                News
              </span>
            </div>

            <h3 className="mt-6 font-heading font-bold text-2xl text-[#0D0D26] leading-snug">
              Class adds $30 million to its balance sheet for a Zoom-friendly
              edtech solution
            </h3>

            <p className="mt-4 text-[#5B5B5B]">
              Class, launched less than a year ago by Blackboard co-founder
              Michael Chasen, integrates exclusively…
            </p>

            <a
              href="#"
              className="mt-4 inline-block text-[#0D0D26] font-medium underline underline-offset-4"
            >
              Read more
            </a>
          </div>

          {/* Secondary articles */}
          <div className="flex flex-col gap-10">
            <NewsRow
              image="/images/students.png"
              badge="Press Release"
              title="Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand"
              description="Class Technologies Inc., the company that created Class,…"
            />
            <NewsRow
              image="/images/News1.png"
              badge="News"
              title="Zoom's earliest investors are betting millions on a better Zoom for schools"
              description="Zoom was never created to be a consumer product. Nonetheless, the…"
            />
            <NewsRow
              image="/images/News2.png"
              badge="News"
              title="Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms"
              description="This year, investors have reaped big financial returns from betting on Zoom…"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
