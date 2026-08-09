import Hero from "@/Components/Hero";
import OurSuccess from "@/Components/OurSuccess";
import AllInOne from "@/Components/AllInOne";
import WhatIsTOTC from "@/Components/WhatIsTOTC";
import YouCanDoWithTOTC from "@/Components/YouCanDoWithTOTC";
import OurFeatures from "@/Components/OurFeatures";
import ExploreCourse from "@/Components/ExploreCourse";
import Testimonials from "@/Components/Testimonials";
import LatestNews from "@/Components/LatestNews";


export default function Home() {
  return (
    <>
      <Hero />
      <OurSuccess />
      <AllInOne />
      <WhatIsTOTC />
      <YouCanDoWithTOTC />
      <OurFeatures />
      <ExploreCourse />
      <Testimonials />
      <LatestNews />
    </>
  );
}