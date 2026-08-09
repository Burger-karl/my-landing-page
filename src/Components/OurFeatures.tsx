import React from "react";
import Image from "next/image";
import {
  FaPhone,
  FaTimes,
  FaCheck,
  FaPaperPlane,
  FaStar,
  FaBook,
  FaUsers,
  FaRedo,
} from "react-icons/fa";
import { FiGrid } from "react-icons/fi";

const OurFeatures = () => {
  return (
    <section className="py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl">
            <span className="text-[#0D0D26]">Our </span>
            <span className="text-[#1FC8A9]">Features</span>
          </h2>
          <p className="mt-4 text-[#5B5B5B] text-base md:text-lg">
            This very extraordinary feature, can make learning activities more
            efficient
          </p>
        </div>

        {/* Row 1: Video call mockup + UI copy */}
        <div className="mt-24 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative isolate">
            <span className="absolute -top-6 -left-6 w-20 h-20 rounded-full border-[14px] border-[#1FC8A9]/30 -z-10" />
            <span className="absolute top-4 left-32 size-3 rounded-full bg-[#29B6E8] -z-10" />
            <span className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full bg-[#4B4ACF] -z-10" />
            <span className="absolute bottom-10 left-[38%] size-3 rounded-full bg-[#F14C6D] -z-10" />

            <div className="relative rounded-2xl bg-white shadow-2xl p-4">
              <div className="flex gap-1.5 mb-3">
                <span className="size-2 rounded-full bg-red-400" />
                <span className="size-2 rounded-full bg-yellow-400" />
                <span className="size-2 rounded-full bg-green-400" />
              </div>

              <div className="grid grid-cols-3 grid-rows-2 gap-3 h-72">
                <div className="col-span-2 row-span-2 relative rounded-xl overflow-hidden">
                  <Image
                    src="/images/Avatar1.png"
                    alt="Eveny Howard"
                    fill
                    className="object-cover"
                  />
                  <span className="absolute bottom-2 left-2 flex items-center gap-1 bg-black/40 backdrop-blur text-white text-xs rounded-full pl-1 pr-2 py-1">
                    <span className="bg-blue-500 text-[10px] font-medium px-1.5 py-0.5 rounded-full">
                      Instructor
                    </span>
                    Eveny Howard
                  </span>
                </div>

                <div className="relative rounded-xl overflow-hidden">
                  <Image
                    src="/images/Avatar2.png"
                    alt="Tamara Clarke"
                    fill
                    className="object-cover"
                  />
                  <span className="absolute bottom-1 left-1 bg-black/40 text-white text-[10px] rounded px-1.5 py-0.5">
                    Tamara Clarke
                  </span>
                </div>

                <div className="relative rounded-xl overflow-hidden">
                  <Image
                    src="/images/Avatar3.png"
                    alt="Adam Levin"
                    fill
                    className="object-cover"
                  />
                  <span className="absolute bottom-1 left-1 bg-black/40 text-white text-[10px] rounded px-1.5 py-0.5">
                    Adam Levin
                  </span>
                </div>

                <div className="relative rounded-xl overflow-hidden">
                  <Image
                    src="/images/Avatar4.png"
                    alt="Humbert Holland"
                    fill
                    className="object-cover"
                  />
                  <span className="absolute bottom-1 left-1 bg-black/40 text-white text-[10px] rounded px-1.5 py-0.5">
                    Humbert Holland
                  </span>
                </div>

                <div className="relative rounded-xl overflow-hidden">
                  <Image
                    src="/images/Avatar5.png"
                    alt="Patricia Mendoza"
                    fill
                    className="object-cover"
                  />
                  <span className="absolute bottom-1 left-1 bg-black/40 text-white text-[10px] rounded px-1.5 py-0.5">
                    Patricia Mendoza
                  </span>
                </div>
              </div>

              <div className="flex gap-3 mt-4">
                <button className="bg-[#4B4ACF] text-white text-sm font-medium rounded-full px-5 py-2">
                  Present
                </button>
                <button className="flex items-center gap-1.5 bg-[#F14C6D] text-white text-sm font-medium rounded-full px-5 py-2">
                  <FaPhone className="size-3" /> Call
                </button>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-[#0D0D26]">
              A <span className="text-[#1FC8A9]">user interface</span> designed
              for the classroom
            </h3>

            <ul className="mt-8 space-y-6">
              <li className="flex gap-4">
                {/* placeholder mapped to your rectangle-box.png icon */}
                <span className="shrink-0 size-11 rounded-xl bg-white shadow-md flex items-center justify-center">
                  <Image
                    src="/images/rectangle-box.png"
                    alt=""
                    width={24}
                    height={24}
                  />
                </span>
                <p className="text-[#5B5B5B]">
                  Teachers don&apos;t get lost in the grid view and have a
                  dedicated Podium space.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="shrink-0 size-11 rounded-xl bg-white shadow-md flex items-center justify-center">
                  <Image
                    src="/images/square-box.png"
                    alt=""
                    width={24}
                    height={24}
                  />
                </span>
                <p className="text-[#5B5B5B]">
                  TA&apos;s and presenters can be moved to the front of the
                  class.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="shrink-0 size-11 rounded-xl bg-white shadow-md flex items-center justify-center">
                  <Image
                    src="/images/users.png"
                    alt=""
                    width={24}
                    height={24}
                  />
                </span>
                <p className="text-[#5B5B5B]">
                  Teachers can easily see all students and class data at one
                  time.
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Row 2: Tools copy + Lady image */}
        <div className="mt-32 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="font-heading font-bold text-2xl md:text-3xl">
              <span className="text-[#1FC8A9]">Tools</span>{" "}
              <span className="text-[#0D0D26]">For Teachers And Learners</span>
            </h3>
            <p className="mt-6 text-[#5B5B5B] leading-relaxed">
              Class has a dynamic set of teaching tools built to be deployed and
              used during class. Teachers can handout assignments in real-time
              for students to complete and submit.
            </p>
          </div>

          <div className="relative isolate flex justify-center">
            <span className="absolute top-6 -right-2 size-4 rounded-full bg-[#1FC8A9] -z-10" />
            <span className="absolute bottom-14 left-0 size-4 rounded-full bg-[#F14C6D] -z-10" />
            <span className="absolute bottom-0 right-4 size-4 rounded-full bg-[#6C63FF] -z-10" />
            <span className="absolute top-16 left-1/3 w-56 h-56 rounded-full bg-[#F14C6D]/90 -z-10" />

            <div className="relative w-72">
              <Image
                src="/images/lady-hero.png"
                alt="Student thinking"
                width={700}
                height={620}
                className="w-full h-auto"
              />

              <span className="absolute top-1/3 -left-10 size-12 rounded-xl bg-white shadow-md flex items-center justify-center">
                <Image
                  src="/images/rectangle-box.png"
                  alt=""
                  width={22}
                  height={22}
                />
              </span>

              {/* no matching asset provided for this icon — placeholder */}
              <span className="absolute top-1/2 -right-10 size-12 rounded-xl bg-white shadow-md flex items-center justify-center">
                <FiGrid className="text-[#4B4ACF] size-5" />
              </span>
            </div>
          </div>
        </div>

        {/* Row 3: Quiz card + Assessments copy */}
        <div className="mt-32 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative isolate flex justify-center">
            <span className="absolute -top-4 -left-6 w-16 h-16 rounded-full bg-[#4B4ACF] -z-10" />
            <span className="absolute top-6 right-0 size-3 rounded-full bg-[#F97316] -z-10" />
            <span className="absolute bottom-8 -right-4 size-3 rounded-full bg-[#F14C6D] -z-10" />
            <span className="absolute -bottom-2 left-10 size-3 rounded-full bg-[#1FC8A9] -z-10" />

            <div className="relative w-80 rounded-2xl bg-white shadow-2xl p-5">
              <div className="absolute -top-3 -right-3 flex gap-1">
                <span className="size-7 rounded-full bg-white shadow flex items-center justify-center">
                  <FaTimes className="text-red-500 size-3" />
                </span>
                <span className="size-7 rounded-full bg-white shadow flex items-center justify-center">
                  <FaCheck className="text-green-500 size-3" />
                </span>
              </div>

              <span className="inline-block bg-indigo-100 text-indigo-600 text-xs font-medium rounded-full px-3 py-1">
                Question 1
              </span>

              <p className="mt-3 font-heading font-semibold text-[#0D0D26]">
                True or false? This play takes place in Italy
              </p>

              {/* no source image provided for this photo — placeholder */}
              <div className="mt-4 aspect-video rounded-xl bg-gradient-to-br from-sky-200 to-sky-400" />

              <div className="mt-4 flex items-center gap-2 bg-white rounded-xl shadow-lg p-3 -mb-10 -ml-4 w-[85%]">
                <span className="shrink-0 size-8 rounded-full bg-green-100 flex items-center justify-center">
                  <FaPaperPlane className="text-green-500 size-3.5" />
                </span>
                <p className="text-sm font-medium text-[#0D0D26]">
                  Your answer was sent successfully
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-bold text-2xl md:text-3xl">
              <span className="text-[#0D0D26]">Assessments, </span>
              <span className="text-[#1FC8A9]">Quizzes</span>
              <span className="text-[#0D0D26]">, Tests</span>
            </h3>
            <p className="mt-6 text-[#5B5B5B] leading-relaxed">
              Easily launch live assignments, quizzes, and tests. Student
              results are automatically entered in the online gradebook.
            </p>
          </div>
        </div>

        {/* Row 4: Class management copy + Gradebook mockup */}
        <div className="mt-32 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="font-heading font-bold text-2xl md:text-3xl">
              <span className="text-[#1FC8A9]">Class Management</span>{" "}
              <span className="text-[#0D0D26]">Tools for Educators</span>
            </h3>
            <p className="mt-6 text-[#5B5B5B] leading-relaxed">
              Class provides tools to help run and manage the class such as
              Class Roster, Attendance, and more. With the Gradebook, teachers
              can review and grade tests and quizzes in real-time.
            </p>
          </div>

          <div className="relative isolate flex justify-center">
            <span className="absolute -bottom-6 -left-8 text-4xl text-[#29B6E8]/40 -z-10">
              〜〜〜
            </span>
            <span className="absolute top-4 right-4 size-3 rounded-full bg-[#29B6E8] -z-10" />

            <div className="relative w-96 rounded-2xl bg-white shadow-2xl overflow-hidden">
              <div className="relative bg-[#3E9FE0] flex items-center gap-2 px-4 py-3">
                <span className="absolute -left-3 -top-3 size-9 rounded-full bg-white shadow flex items-center justify-center">
                  <FaStar className="text-yellow-400 size-4" />
                </span>
                <span className="ml-6 text-white font-semibold">GradeBook</span>
                <span className="absolute -right-3 -top-3 size-9 rounded-full bg-white shadow flex items-center justify-center">
                  <FaBook className="text-[#3E9FE0] size-4" />
                </span>
              </div>

              <div className="p-6 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="h-2 flex-1 rounded-full bg-[#3E9FE0]" />
                  <div className="relative size-10 rounded-full overflow-hidden shrink-0">
                    <Image
                      src="/images/Avatar4.png"
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="bg-blue-100 text-blue-600 text-xs font-semibold rounded-full px-2 py-1">
                    100
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-2 flex-1 rounded-full bg-[#F97316]" />
                  <div className="relative size-10 rounded-full overflow-hidden shrink-0">
                    <Image
                      src="/images/Avatar3.png"
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="bg-orange-100 text-orange-600 text-xs font-semibold rounded-full px-2 py-1">
                    9/8
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-2 flex-1 rounded-full bg-[#1FC8A9]" />
                  <div className="relative size-10 rounded-full overflow-hidden shrink-0">
                    <Image
                      src="/images/Avatar5.png"
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="bg-teal-100 text-teal-600 text-xs font-semibold rounded-full px-2 py-1">
                    85
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-2 flex-1 rounded-full bg-[#F14C6D]" />
                  <span className="bg-red-100 text-red-600 text-xs font-semibold rounded-full px-2 py-1">
                    75
                  </span>
                </div>

                <div className="flex justify-end">
                  <button className="bg-[#4B4ACF] text-white text-sm font-medium rounded-full px-6 py-2">
                    Export
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 5: Private discussion mockup + One-on-One copy */}
        <div className="mt-32 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative isolate flex justify-center">
            {/* faded card behind, reusing the same call-grid language from Row 1 */}
            <div className="absolute top-6 -left-6 w-64 h-40 rounded-2xl bg-white shadow-lg opacity-60 -z-10" />
            <span className="absolute -top-4 right-10 size-9 rounded-full bg-white shadow flex items-center justify-center">
              <FaRedo className="text-[#29B6E8] size-4" />
            </span>
            <span className="absolute bottom-6 -right-6 size-3 rounded-full bg-[#F97316] -z-10" />

            <div className="relative w-80 rounded-2xl bg-white shadow-2xl p-4">
              <span className="absolute -top-3 -left-3 size-9 rounded-full bg-[#3E9FE0] shadow flex items-center justify-center">
                <FaUsers className="text-white size-4" />
              </span>

              <div className="grid grid-cols-2 gap-3">
                <div className="relative rounded-xl overflow-hidden aspect-[3/4]">
                  <Image
                    src="/images/Avatar1.png"
                    alt="Eveny Howard"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative rounded-xl overflow-hidden aspect-[3/4]">
                  <Image
                    src="/images/Avatar5.png"
                    alt="Patricia Mendoza"
                    fill
                    className="object-cover"
                  />
                  <span className="absolute bottom-1 left-1 bg-black/40 text-white text-[10px] rounded px-1.5 py-0.5">
                    Patricia Mendoza
                  </span>
                </div>
              </div>

              <div className="mt-3">
                <p className="font-heading font-semibold text-[#0D0D26]">
                  Private Discussion
                </p>
                <p className="text-xs text-[#5B5B5B]">
                  Your video can&apos;t be seen by others
                </p>
              </div>

              <button className="mt-3 w-full bg-[#F14C6D] text-white text-sm font-medium rounded-full px-5 py-2">
                End Discussion
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-bold text-2xl md:text-3xl">
              <span className="text-[#0D0D26]">One-on-One </span>
              <span className="text-[#1FC8A9]">Discussions</span>
            </h3>
            <p className="mt-6 text-[#5B5B5B] leading-relaxed">
              Teachers and teacher assistants can talk with students privately
              without leaving the Zoom environment.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 flex justify-center">
          <button className="rounded-full border border-[#1FC8A9] text-[#1FC8A9] font-medium px-8 py-3 hover:bg-[#1FC8A9] hover:text-white transition-colors">
            See more features
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurFeatures;
