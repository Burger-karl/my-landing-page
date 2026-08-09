import React from 'react'
import Image from 'next/image'


const ROWS = [
  { title: 'Lorem Ipsum', image: '/images/Category.png' },
  { title: 'Quisque a Consequat', image: '/images/Category1.png' },
  { title: 'Aenean Facilisis', image: '/images/Category2.png' },
]

const ExploreCourse = () => {
  return (
    <section className="relative py-16 sm:py-20 px-4 overflow-x-hidden">
      <div className="absolute inset-0 bg-white" />
      {/* background split: light blue panel on the left, white on the right,
          matching the ~81%/19% divide measured off the reference design */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-[81%] bg-[#EBF5FF]" />

      <div className="relative max-w-6xl mx-auto">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#0D0D26]">
          Explore Course
        </h2>
        <p className="mt-3 text-[#5B5B5B]">Ut sed eros finibus, placerat orci id, dapibus.</p>

        <div className="flex flex-col gap-16 sm:gap-20 mt-14 sm:mt-16">
          {ROWS.map((row) => (
            <div key={row.title} className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
              <Image
                src={row.image}
                alt={row.title}
                width={1662}
                height={500}
                className="w-full h-auto min-w-[560px] sm:min-w-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExploreCourse