import Image from 'next/image';

const AccommodationGallery = () => {
  const images = [
    '/PanautiBackground.jpg',
    '/beds.jpg',
    '/panauti3.jpg',
    '/PanautiBackground.jpg',
    '/beds.jpg',
    '/Pnauti1.jpg',
  ];

  return (
    <div className="bg-[#fff6ea] w-full py-5">
      <h2 className="text-4xl mb-2 font-catchy text-center text-green-700">Accommodation</h2>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center p-8">
          {images.map((src, index) => (
            <div key={index} className="relative w-full max-w-full aspect-[4/3] mb-0">
              <Image
                src={src}
                alt={`Accommodation image ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccommodationGallery;