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

        {/* Row 1: Video call mockup (5 avatars) + UI copy — asymmetric columns */}
        <div className="mt-24 grid md:grid-cols-[1.4fr_1fr] gap-16 items-center">
          <div className="relative isolate pb-16 pr-10">
            {/* decorative blobs behind the card */}
            <span className="absolute -top-6 left-8 w-20 h-20 rounded-t-full bg-[#1FC8A9]/80 -z-10" />
            <span className="absolute top-4 left-32 size-4 rounded-full bg-[#29B6E8] -z-10" />
            <span
              className="absolute rounded-full hidden bg-[#4B4ACF] -z-10"
              style={{ left: "80%", top: "95%", width: "28%", height: "47%" }}
            />
            <span
              className="absolute size-3 rounded-full bg-[#F14C6D] -z-10"
              style={{ left: "70%", top: "108%" }}
            />

            {/* card, sized off a 783x467 reference so every child % lines up */}
            <div className="relative rounded-2xl bg-[#F4F5FA] shadow-2xl aspect-[783/467]">
              <div className="absolute top-0 left-0 right-0 h-[12%] bg-[#E7E9F3] rounded-t-2xl flex items-center gap-1.5 px-4">
                <span className="size-2 rounded-full bg-red-400" />
                <span className="size-2 rounded-full bg-yellow-400" />
                <span className="size-2 rounded-full bg-green-400" />
              </div>

              {/* Eveny Howard */}
              <div
                className="absolute rounded-xl overflow-hidden shadow-md"
                style={{ left: "11%", top: "17%", width: "32%", height: "52%" }}
              >
                <Image
                  src="/images/Avatar1.png"
                  alt="Eveny Howard"
                  fill
                  className="object-cover"
                />
                <span className="absolute bottom-2 left-2 flex items-center gap-1 bg-black/40 backdrop-blur text-white text-[10px] rounded-full pl-1 pr-2 py-1">
                  <span className="bg-blue-500 font-medium px-1.5 py-0.5 rounded-full">
                    Instructor
                  </span>
                  Eveny Howard
                </span>
              </div>

              {/* Present / Call */}
              <button
                className="absolute bg-[#4B4ACF] text-white text-sm font-medium rounded-full"
                style={{ left: "5%", top: "78%", width: "20%", height: "12%" }}
              >
                Present
              </button>
              <button
                className="absolute flex items-center justify-center gap-1.5 bg-[#F14C6D] text-white text-sm font-medium rounded-full"
                style={{ left: "28%", top: "78%", width: "21%", height: "12%" }}
              >
                <FaPhone className="size-3" /> Call
              </button>

              {/* Tamara Clarke */}
              <div
                className="absolute rounded-xl overflow-hidden shadow-md"
                style={{ left: "58%", top: "17%", width: "21%", height: "34%" }}
              >
                <Image
                  src="/images/Avatar2.png"
                  alt="Tamara Clarke"
                  fill
                  className="object-cover"
                />
                <span className="absolute bottom-1 left-1 bg-black/40 text-white text-[9px] rounded px-1.5 py-0.5">
                  Tamara Clarke
                </span>
              </div>

              {/* white circle decoration between Tamara & Humbert */}
              <span
                className="absolute rounded-full bg-white shadow-md size-9 md:size-11"
                style={{ left: "53%", top: "54%" }}
              />

              {/* Humbert Holland */}
              <div
                className="absolute rounded-xl overflow-hidden shadow-md"
                style={{ left: "58%", top: "56%", width: "21%", height: "36%" }}
              >
                <Image
                  src="/images/Avatar4.png"
                  alt="Humbert Holland"
                  fill
                  className="object-cover"
                />
                <span className="absolute bottom-1 left-1 bg-black/40 text-white text-[9px] rounded px-1.5 py-0.5">
                  Humbert Holland
                </span>
              </div>

              {/* Adam Levin — overflows the card's right/top edge on purpose */}
              <div
                className="absolute rounded-xl overflow-hidden shadow-lg"
                style={{ left: "87%", top: "9%", width: "25%", height: "41%" }}
              >
                <Image
                  src="/images/Avatar3.png"
                  alt="Adam Levin"
                  fill
                  className="object-cover"
                />
                <span className="absolute bottom-1 left-1 bg-black/40 text-white text-[9px] rounded px-1.5 py-0.5">
                  Adam Levin
                </span>
              </div>

              {/* Patricia Mendoza — overflows the card's right/bottom edge on purpose */}
              <div
                className="absolute rounded-xl overflow-hidden shadow-lg"
                style={{ left: "84%", top: "59%", width: "31%", height: "49%" }}
              >
                <Image
                  src="/images/Avatar5.png"
                  alt="Patricia Mendoza"
                  fill
                  className="object-cover"
                />
                <span className="absolute bottom-1 left-1 bg-black/40 text-white text-[9px] rounded px-1.5 py-0.5">
                  Patricia Mendoza
                </span>
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
                src="/images/Lady.png"
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

        {/* Row 3: Quiz card (now with feature.png) + Assessments copy */}
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

              <div className="relative mt-4 aspect-video rounded-xl overflow-hidden">
                <Image
                  src="/images/feature.png"
                  alt="Venice canal"
                  fill
                  className="object-cover"
                />
              </div>

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

        {/* Row 4: Class management copy + Gradebook mockup (4 avatars, staggered) */}
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
            {/* faint backing card peeking out bottom-left, echoing the design's stacked-card look */}
            <span className="absolute bottom-0 left-4 w-2/3 h-2/3 rounded-2xl bg-[#29B6E8]/15 -z-10" />

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

              <div className="p-6 pt-10">
                <div className="grid grid-cols-2 gap-x-6 gap-y-10">
                  {/* 100 — Humbert Holland (Avatar4) */}
                  <div className="flex items-center">
                    <div className="h-2 flex-1 rounded-full bg-[#3EC6E0]" />
                    <div className="relative -ml-6 size-11 rounded-full overflow-hidden ring-4 ring-white shrink-0">
                      <Image
                        src="/images/Avatar4.png"
                        alt=""
                        fill
                        className="object-cover"
                      />
                      <span className="absolute -bottom-1 -right-1 size-4 rounded-full bg-white flex items-center justify-center shadow">
                        <FaStar className="text-yellow-400 size-2.5" />
                      </span>
                    </div>
                    <span className="ml-2 bg-sky-100 text-sky-700 text-xs font-semibold rounded-full px-3 py-1.5">
                      100
                    </span>
                  </div>

                  {/* 9/8 — Adam Levin (Avatar3), staggered down */}
                  <div className="flex items-center mt-6">
                    <div className="h-2 flex-1 rounded-full bg-[#3E7BE0]" />
                    <div className="relative -ml-6 size-11 rounded-full overflow-hidden ring-4 ring-white shrink-0">
                      <Image
                        src="/images/Avatar3.png"
                        alt=""
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="ml-2 text-xs font-semibold text-[#0D0D26] leading-tight">
                      <p>9</p>
                      <p>8</p>
                    </div>
                  </div>

                  {/* 85 — Tamara Clarke (Avatar2) */}
                  <div className="flex items-center">
                    <div className="h-2 flex-1 rounded-full bg-[#4ADE80]" />
                    <div className="relative -ml-6 size-11 rounded-full overflow-hidden ring-4 ring-white shrink-0">
                      <Image
                        src="/images/Avatar2.png"
                        alt=""
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="ml-2 bg-green-100 text-green-700 text-xs font-semibold rounded-full px-3 py-1.5">
                      85
                    </span>
                  </div>

                  {/* 75 — Patricia Mendoza (Avatar5), staggered down */}
                  <div className="flex items-center mt-6">
                    <div className="h-2 flex-1 rounded-full bg-[#F14C6D]" />
                    <div className="relative -ml-6 size-11 rounded-full overflow-hidden ring-4 ring-white shrink-0">
                      <Image
                        src="/images/Avatar5.png"
                        alt=""
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="ml-2 bg-rose-100 text-rose-700 text-xs font-semibold rounded-full px-3 py-1.5">
                      75
                    </span>
                  </div>
                </div>

                <div className="flex justify-end mt-8">
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
