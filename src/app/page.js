import Accomodation from "@/components/Accomodation";
import DetailBanner from "@/components/DetailBanner";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Location from "@/components/Location";
import Reviews from "@/components/Reviews";
import WhyHomestay from "@/components/WhyHomestay";

export default function Home() {
  return (
    <>
    <Hero/>
    <DetailBanner/>
    <Location/>
    <Reviews/>
    <Accomodation/>
    <WhyHomestay/>
    <Features/>
    </>
  );
}
