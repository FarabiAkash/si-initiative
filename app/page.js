import Blogs from "../components/Home/Blogs";
import CaseStudies from "../components/Home/CaseStudies";
import ContactUs from "../components/Home/ContactUs";
import CoreServices from "../components/Home/CoreServices";
import FAQ from "../components/Home/FAQ";
import Header from "../components/Home/Header";
import InnovationCard from "../components/Home/InnovationCard";
import Innovations from "../components/Home/Innovations";
import OurPartners from "../components/Home/OurPartners";
import SpecializedService from "../components/Home/SpecializedService";
import SuccessStories from "../components/Home/SuccessStories";
import WhatWeDo from "../components/Home/WhatWeDo";
import WhyChooseUs from "../components/Home/WhyChooseUs";

export default function Home() {
  return (
    <div className="">
      <Header />
      <WhatWeDo />
      <WhyChooseUs />
      <OurPartners />
      <CoreServices />
      <SpecializedService />
      <CaseStudies />
      <SuccessStories pageName={'home'} />
      <InnovationCard />
      <Innovations />
      <FAQ />
      <ContactUs />
      <Blogs />
    </div>
  );
}
