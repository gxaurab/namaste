'use client';

import { useState } from "react";

const Location = () => {
  const [showLocation, setShowLocation] = useState(false);
  const [showHike, setShowHike] = useState(false);
  const [showAttractions, setShowAttractions] = useState(false);

  const handleDropLocation = () => {
    setShowLocation(!showLocation);
  };

  const handleDropHike = () => {
    setShowHike(!showHike);
  };

  const handleDropAttractions = () => {
    setShowAttractions(!showAttractions);
  };

  return (
    <div className="bg-white p-6 flex flex-col lg:flex-row justify-between gap-4">
      <div className="text-[#2a703d] w-full lg:w-1/2">
        <button
          className="w-full text-left py-2 px-4 mb-2 bg-red-200 rounded-lg shadow"
          onClick={handleDropLocation}
        >
          <h1 className="text-4xl font-medium">{"📍↓ How do I reach?"}</h1>
        </button>
        {showLocation && (
          <p className="text-2xl text-amber-800 mb-6 pl-4">
            We are located in Panauti, Kavre. You can reach us by public bus, taxi, or private vehicle.
          </p>
        )}

        <button
          className="w-full text-left py-2 px-4 mb-2 rounded-lg shadow bg-yellow-200"
          onClick={handleDropHike}
        >
          <h2 className="text-4xl font-medium">{"⛰️↓ What about hiking?"}</h2>
        </button>
        {showHike && (
          <div className="text-2xl text-amber-800 mb-6 pl-4">
            <p>Night Stay for Panaut via hiking route:</p>
            <ul className="font-semibold text-[#2a703d] list-disc pl-8 space-y-2">
              <li>Nagarkot to Dhulikhel</li>
              <li>Dhulikhel to Namobuddha</li>
              <li>Namobuddha to Panauti</li>
            </ul>
          </div>
        )}

        <button
          className="w-full text-left py-2 px-4 mb-2 rounded-lg shadow bg-blue-100 "
          onClick={handleDropAttractions}
        >
          <h2 className="text-4xl font-medium">{"🏞️↓ What local attractions can I visit?"}</h2>
        </button>
        {showAttractions && (
          <div className="text-2xl text-amber-800 mb-6 pl-4">
            <p>Here are some local attractions you can visit:</p>
            <ul className="font-semibold text-[#2a703d] list-disc pl-8 space-y-2">
              <li>Panauti Bazaar</li>
              <li>Indreshwar Mahadev Temple</li>
              <li>Namobuddha Monastery</li>
              <li>Local cultural events and festivals</li>
            </ul>
          </div>
        )}
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <div className="relative w-full h-80">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4455.270371740003!2d85.50520871730888!3d27.58886598083134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb0f4407bc10ff%3A0x8bc62d7b45ca1a13!2sNamaste%20Samudayik%20Homestay!5e0!3m2!1sen!2snp!4v1720703736089!5m2!1sen!2snp"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute top-0 left-0 w-full h-full border-2 border-gray-300 rounded-lg shadow"
          ></iframe>
          <h1 className="text-[#2a703d] absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white py-1 px-3 rounded shadow">
            Click for full map
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Location;
