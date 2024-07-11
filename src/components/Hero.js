import Image from 'next/image';
import './hero.css';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <Image
        src="/PanautiBackground.jpg"  
        layout="fill"
        objectFit="cover"
        alt="Nepali landscape"
        priority
        />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        </div>
  </div>
  
  )
}


export default Hero;