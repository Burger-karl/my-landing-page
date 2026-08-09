import React from 'react'
import Image from 'next/image'

const WhatIsTOTC = () => {
  return (
    <section className="py-20 px-4 text-center">
      <h2 className="font-heading font-semibold text-2xl md:text-4xl">
        <span className="text-[#0D0D26]">What is </span>
        <span className="text-[#1FC8A9]">TOTC?</span>
      </h2>

      <p className="mt-4 max-w-3xl mx-auto text-[#5B5B5B] text-base md:text-lg">
        TOTC is a platform that allows educators to create online classes whereby they can
        store the course materials online; manage assignments, quizzes and exams; monitor
        due dates; grade results and provide students with feedback all in one place.
      </p>

      <div className="mt-14 grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
        {/* For Instructors */}
        <div className="relative rounded-2xl overflow-hidden h-72 md:h-80">
          <Image
            src="/images/instructor.png"
            alt="Instructor teaching a class"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start gap-6 px-8">
            <h3 className="text-white font-heading font-bold text-2xl md:text-3xl">
              FOR INSTRUCTORS
            </h3>
            <button className="rounded-full border border-white text-white font-medium px-8 py-3 hover:bg-white hover:text-[#25243D] transition-colors">
              Start a class today
            </button>
          </div>
        </div>

        {/* For Students */}
        <div className="relative rounded-2xl overflow-hidden h-72 md:h-80">
          <Image
            src="/images/students.png"
            alt="Students studying together"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start gap-6 px-8">
            <h3 className="text-white font-heading font-bold text-2xl md:text-3xl">
              FOR STUDENTS
            </h3>
            <button className="rounded-full bg-[#29B6E8] text-white font-medium px-8 py-3 shadow-lg hover:bg-[#1fa3d4] transition-colors">
              Enter access code
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatIsTOTC