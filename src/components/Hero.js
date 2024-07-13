import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="bg-no-repeat bg-cover bg-center h-screen">
      <Image
        src="/PanautiBackground.jpg"  
        layout="fill"
        objectFit="cover"
        alt="Nepali landscape"
        priority
        />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        <div >
          <h1 className="text-4xl md:text-6xl lg:text-7.2xl text-white font-bold text-center">Namaste Samudayik Homestay</h1>
          <h2 className=' text-2xl bg-black bg-opacity-15 text-white font-medium text-center p-3'>
            Discover Authetic Nepali Hospitality <br/>
            Expericence Traditional Newari <br/> Culture
          </h2>
          <div className=" flex justify-center ">
            <Link href="/contact-book"><button className="bg-green-200 hover:bg-green-400 text-black hover:text-white px-6 py-3 rounded-full text-2xl transition duration-300 "> Check Availability </button>
            </Link>
          </div>
        </div>

        </div>

  </div>
  
  )
}


export default Hero;