
'use client';
import { useEffect, useState } from "react";
import { carouselSlides } from "../../constants";
import Image from "next/image";

const WhyHomestay = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselSlides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselSlides.length - 1 : prev - 1));
  };

  return (
    <div className="bg-[#fff6ea]">
      <div className="text-left">
        <h1 className="text-3xl ml-20 text-amber-950">Why our Homestay?</h1>
      </div>
      <div className="flex items-center justify-center mt-10 pb-10">
        <button onClick={prevSlide} className="text-xl px-4 py-2 bg-yellow-300 text-black rounded-full">
          {"<"}
        </button>
        <div className="sm:flex sm:w-full lg:w-1/2 h-96 items-center justify-center shadow-lg rounded-lg overflow-hidden">
          <div className="p-5">
            <h1 className="text-2xl text-green-800">{carouselSlides[currentSlide].text}</h1>
            <h2 className="text-1/2xl">{carouselSlides[currentSlide].text2}</h2>
          </div>
          <div className="w-full h-full relative">
            <Image
              src={carouselSlides[currentSlide].image}
              alt={carouselSlides[currentSlide].text}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
        <button onClick={nextSlide} className="text-xl px-4 py-2 bg-yellow-300 text-black rounded-full">
          {">"}
        </button>
      </div>
    </div>
  );
};

export default WhyHomestay;
