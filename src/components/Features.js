import Image from "next/image";

const Features = () => {
  return (
    <div className="bg-[#fff6ea] py-10">
      <div className=" flex sm:gap-0 md:gap-80 lg:gap-80 text-center text-3xl text-amber-950 pl-20 mb-10">
        <h1>How it Works?</h1> <h1> Why it Works?</h1>
      </div>
      <div className="container mx-auto px-5 lg:px-20 flex flex-col lg:flex-row justify-between">
        {/* Left Column */}
        <div className="w-full lg:w-1/2 flex flex-col gap-10">
          <div className="flex flex-row gap-5 items-start">
            <Image src="/home.png" width={70} height={50} alt="Home Icon" />
            <div>
              <h1 className="text-2xl text-green-800">Book your stay with a local family</h1>
              <p className="text-amber-950">
                Your host family welcomes you in their home.<br />
                You'll have a private room and a shared/private washroom.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-5 items-start">
            <Image src="/money.png" width={70} height={50} alt="Money Icon" />
            <div>
              <h1 className="text-2xl text-green-800">Your host earns the income in hands</h1>
              <p className="text-amber-950">
                Your host keeps a majority of the payment and also contributes<br />
                a portion back to the Homestay to fund development projects.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-5 items-start">
            <Image src="/love.png" width={70} height={50} alt="Love Icon" />
            <div>
              <h1 className="text-2xl text-green-800">The whole community benefits</h1>
              <p className="text-amber-950">
                Your can feel the real impact of money you paid.<br />
                Hosts spends in the local market connected to the farmers,<br />
                homestay profit fund projects like health camp are conducted.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/2 flex flex-col gap-10 mt-10 lg:mt-0">
          <div className="flex flex-row gap-5 items-start">
            <Image src="/home.png" width={70} height={50} alt="Home Icon" />
            <div>
              <h1 className="text-2xl text-green-800">Book your stay with a local family</h1>
              <p className="text-amber-950">
                Your host family welcomes you in their home.<br />
                You'll have a private room and a shared/private washroom.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-5 items-start">
            <Image src="/money.png" width={70} height={50} alt="Money Icon" />
            <div>
              <h1 className="text-2xl text-green-800">Your host earns the income in hands</h1>
              <p className="text-amber-950">
                Your host keeps a majority of the payment and also contributes<br />
                a portion back to the Homestay to fund development projects.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-5 items-start">
            <Image src="/love.png" width={70} height={50} alt="Love Icon" />
            <div>
              <h1 className="text-2xl text-green-800">The whole community benefits</h1>
              <p className="text-amber-950">
                Your can feel the real impact of money you paid.<br />
                Hosts spends in the local market connected to the farmers,<br />
                homestay profit fund projects like health camp are conducted.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
