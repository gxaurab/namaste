'use client';
import { useState, useEffect } from 'react';

const reviews = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "John Doe",
    image: "/path-to-review-image-1.jpg"
  },
  {
    id: 2,
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Jane Smith",
    image: "/path-to-review-image-2.jpg"
  },
  {
    id: 3,
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    author: "Bob Johnson",
    image: "/path-to-review-image-3.jpg"
  },
  {
    id: 4,
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    author: "Bob Johnson",
    image: "/path-to-review-image-3.jpg"
  }
];

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextReview();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentReview]);

  const nextReview = () => {
    setCurrentReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <div className="bg-[#fff6ea] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-medium text-center text-green-800 mb-12">What Our Guests Say</h2>
        
        <div className="relative">
          <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden">
            <div className=" w-1/2 h-1/2 p-8">
              <p className="text-lg text-black mb-4">{reviews[currentReview].text}</p>
              <p className="text-green-600 font-semibold">{reviews[currentReview].author}</p>
            </div>
          </div>
          
          <button 
            onClick={prevReview} 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-yellow-300 text-black rounded-full p-2"
          >
            {'<'}
          </button>
          <button 
            onClick={nextReview} 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-yellow-300 text-black rounded-full p-2"
          >
            {'>'}
          </button>
        </div>

        <div className="flex justify-center mt-6">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentReview(index)}
              className={`h-3 w-3 rounded-full mx-1 ${
                currentReview === index ? 'bg-green-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;