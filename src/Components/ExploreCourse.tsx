import React from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

const SectionTitle = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h2
    className={`text-center text-2xl font-bold leading-tight text-black md:text-3xl lg:text-[36px] ${className}`}
  >
    {children}
  </h2>
);

const SectionSubtitle = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <p
    className={`mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-[#696984] md:text-base ${className}`}
  >
    {children}
  </p>
);

const BOOKS = [
  "Book.png",
  "Book1.png",
  "Book2.png",
  "Book3.png",
  "Book4.png",
  "Book5.png",
  "Book6.png",
];

const ExploreCourse = () => {
  return (
    <section className="overflow-x-hidden bg-[#EBF5FF] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionTitle>Explore Course</SectionTitle>
        <SectionSubtitle>
          Ut sed eros finibus, placerat orci id, dapibus.
        </SectionSubtitle>

        {/* Row 1 - Lorem Ipsum */}
        <div className="mt-12">
          <div className="mb-6 flex items-center justify-between">
            <h4 className="flex items-center gap-2 text-lg font-bold text-black">
              <span className="text-xl"></span> Lorem Ipsum
            </h4>
            
              <a href="#"
              className="flex items-center gap-1 text-sm font-medium text-[#49BBBD]"
            >
              SEE ALL <FiArrowRight />
            </a>
          </div>

          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="w-full overflow-x-auto md:w-auto">
              <div className="flex w-max items-end justify-center gap-1.5 mx-auto">
                {BOOKS.map((book, index) => (
                  <Image
                    key={index}
                    src={`/images/${book}`}
                    alt="Book"
                    width={460}
                    height={460}
                    className="h-36 w-auto shrink-0 object-contain sm:h-44 md:h-48"
                  />
                ))}
              </div>
            </div>

            <div className="w-full max-w-100 shrink-0">
              <Image
                src="/images/Detail.png"
                alt="Course"
                width={400}
                height={280}
                className="h-auto w-full rounded-2xl shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* Row 2 - Quisque a Consequat */}
        <div className="mt-14">
          <div className="mb-6 flex items-center justify-between">
            <h4 className="flex items-center gap-2 text-lg font-bold text-black">
              <span className="text-xl"></span> Quisque a Consequat
            </h4>
            
              <a href="#"
              className="flex items-center gap-1 text-sm font-medium text-[#49BBBD]"
            >
              SEE ALL <FiArrowRight />
            </a>
          </div>

          <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
            <div className="w-full overflow-x-auto md:w-auto">
              <div className="flex w-max items-end justify-center gap-1.5 mx-auto">
                {["Book.png", "Book1.png", "Book2.png", "Book3.png"].map(
                  (book, index) => (
                    <Image
                      key={index}
                      src={`/images/${book}`}
                      alt="Book"
                      width={460}
                      height={460}
                      className="h-36 w-auto shrink-0 object-contain sm:h-44 md:h-48"
                    />
                  ),
                )}
              </div>
            </div>

            <div className="w-full max-w-100 shrink-0">
              <Image
                src="/images/Detail1.png"
                alt="Course"
                width={400}
                height={280}
                className="h-auto w-full rounded-2xl shadow-sm"
              />
            </div>

            <div className="w-full overflow-x-auto md:w-auto">
              <div className="flex w-max items-end justify-center gap-1.5 mx-auto">
                {["Book4.png", "Book5.png", "Book6.png"].map(
                  (book, index) => (
                    <Image
                      key={index}
                      src={`/images/${book}`}
                      alt="Book"
                      width={460}
                      height={460}
                      className="h-36 w-auto shrink-0 object-contain sm:h-44 md:h-48"
                    />
                  ),
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Row 3 - Aenean Facilisis */}
        <div className="mt-14">
          <div className="mb-6 flex items-center justify-between">
            <h4 className="flex items-center gap-2 text-lg font-bold text-black">
              <span className="text-xl"></span> Aenean Facilisis
            </h4>
            
             <a href="#"
              className="flex items-center gap-1 text-sm font-medium text-[#49BBBD]"
            >
              SEE ALL <FiArrowRight />
            </a>
          </div>

          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="w-full max-w-100 shrink-0">
              <Image
                src="/images/Detail2.png"
                alt="Course"
                width={460}
                height={460}
                className="h-auto w-full rounded-2xl shadow-sm"
              />
            </div>

            <div className="w-full overflow-x-auto md:w-auto">
              <div className="flex w-max items-end justify-center gap-1.5 mx-auto">
                {BOOKS.map((book, index) => (
                  <Image
                    key={index}
                    src={`/images/${book}`}
                    alt="Book"
                    width={500}
                    height={500}
                    className="h-36 w-auto shrink-0 object-contain sm:h-44 md:h-48"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreCourse;