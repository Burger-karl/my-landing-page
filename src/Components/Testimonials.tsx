import React from 'react'
import Image from 'next/image'
import { FaArrowRight, FaChevronRight, FaStar } from 'react-icons/fa'

const Testimonials = () => {
  return (
    <section className="py-24 px-4 overflow-x-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* Left: copy */}
        <div>
          <div className="flex items-center gap-3">
            <span className="w-10 h-px bg-[#6B6FA0]/40" />
            <span className="uppercase text-xs tracking-[0.2em] text-[#6B6FA0] font-medium">
              Testimonial
            </span>
          </div>

          <h2 className="mt-4 font-heading font-extrabold text-4xl md:text-5xl text-[#2F327D]">
            What They Say?
          </h2>

          <p className="mt-6 text-[#5B5B5B] text-lg leading-relaxed">
            TOTC has got more than 100k positive ratings from our users around the world.
          </p>
          <p className="mt-4 text-[#5B5B5B] text-lg leading-relaxed">
            Some of the students and teachers were greatly helped by the Skilline.
          </p>
          <p className="mt-6 text-[#5B5B5B] text-lg">
            Are you too? Please give your assessment
          </p>

          <div className="mt-8 inline-flex items-center rounded-full border border-[#49BBBD] pl-8 pr-1.5 py-1.5">
            <span className="text-[#49BBBD] font-medium">Write your assessment</span>
            <span className="ml-6 size-11 rounded-full border border-[#49BBBD] flex items-center justify-center shrink-0">
              <FaArrowRight className="text-[#49BBBD] size-4" />
            </span>
          </div>
        </div>

        {/* Right: image + floating chevron + overlapping testimonial card.
            The image is deliberately narrower than this column (w-[85%]) so
            there's real room for the card to extend past its right edge —
            matching the design — without the card ever exceeding the
            column's own width (card spans 6%–98%, so it never overflows). */}
        <div className="relative mt-10 lg:mt-0 pb-32 sm:pb-28">
          <div className="relative w-[85%] rounded-[2rem] overflow-hidden aspect-[4/5] bg-[#9AD4FA]">
            <Image
              src="/images/Testimonial.png"
              alt="Happy TOTC student holding notebooks"
              fill
              className="object-cover object-top"
            />

            <button
              type="button"
              aria-label="Next testimonial"
              className="absolute top-[38%] -translate-y-1/2 -right-6 md:-right-8 size-14 md:size-16 rounded-full bg-white shadow-xl flex items-center justify-center z-20"
            >
              <FaChevronRight className="text-[#1EA4CE] size-4 " />
            </button>
          </div>

          <div className="absolute left-[6%] w-[92%] top-[70%] bg-white rounded-2xl shadow-2xl border-l-4 border-[#F67766] px-6 sm:px-8 py-6 sm:py-8 z-10">
            <p className="text-[#5B5B5B] leading-relaxed border-l border-gray-200 pl-4">
              &quot;Thank you so much for your help. It&apos;s exactly what I&apos;ve been
              looking for. You won&apos;t regret it. It really saves me time and effort.
              TOTC is exactly what our business has been lacking.&quot;
            </p>

            <div className="mt-6 flex items-end justify-between gap-4">
              <p className="font-heading font-semibold text-[#2F327D]">Gloria Rose</p>
              <div className="text-right shrink-0">
                <div className="flex gap-1 text-amber-400 justify-end">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} className="size-3.5" />
                  ))}
                </div>
                <p className="mt-1 text-xs text-gray-400 whitespace-nowrap">
                  12 reviews at Yelp
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials