import React from 'react'

const stats = [
  { value: '15K', suffix: '+', label: 'Students' },
  { value: '75', suffix: '%', label: 'Total success' },
  { value: '35', suffix: '', label: 'Main questions' },
  { value: '26', suffix: '', label: 'Chief experts' },
  { value: '16', suffix: '', label: 'Years of experience' },
]

const OurSuccess = () => {
  return (
    <section className="py-20 px-4 text-center">
      <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#0D0D26]">
        Our Success
      </h2>

      <p className="mt-4 max-w-2xl mx-auto text-[#5B5B5B] text-base md:text-lg">
        Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec
        nam et pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel nisl orci.
      </p>

      <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-6 max-w-6xl mx-auto">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center">
            <p className="font-heading text-5xl md:text-6xl leading-none">
              <span className="bg-gradient-to-r from-[#1B5DA6] to-[#49BBBD] bg-clip-text text-transparent">
                {stat.value}
              </span>
              {stat.suffix && (
                <span className="text-[#49BBBD]/70">{stat.suffix}</span>
              )}
            </p>
            <p className="mt-2 text-[#5B5B5B] text-lg">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default OurSuccess