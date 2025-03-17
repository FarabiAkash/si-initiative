import CaseStudies from "@/components/Home/CaseStudies";
import CoreServices from "@/components/Home/CoreServices";
import FAQ from "@/components/Home/FAQ";
import Header from "@/components/Home/Header";
import InnovationCard from "@/components/Home/InnovationCard";
import Innovations from "@/components/Home/Innovations";
import OurPartners from "@/components/Home/OurPartners";
import SpecializedService from "@/components/Home/SpecializedService";
import SuccessStories from "@/components/Home/SuccessStories";
import WhatWeDo from "@/components/Home/WhatWeDo";
import WhyChooseUs from "@/components/Home/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Header />
      <WhatWeDo />
      <WhyChooseUs />
      <OurPartners />
      <CoreServices />
      <SpecializedService />
      <CaseStudies />
      <SuccessStories />
      <InnovationCard />
      <Innovations />
      <FAQ />
    </>
  );
}
