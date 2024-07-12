const DetailBanner = () => {
    return (
      <div className="text-[#2a703d] flex flex-col bg-[#faf3e0] justify-center text-3xl w-full items-center gap-8 md:flex-row py-14">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-6xl font-bold text-center md:text-left">10+</h1>
          <h2 className="font-bold text-center md:text-left">homes</h2>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-6xl font-bold text-center">500+</h1>
          <h2 className="font-bold text-center md:text-left">International Guests</h2>
        </div>
        <div className="flex flex-col items-center md:items-end">
          <h1 className="text-6xl font-bold text-center md:text-right">3+</h1>
          <h2 className="font-bold text-center md:text-right">packages</h2>
        </div>
      </div>
    )
  }
  
  export default DetailBanner;