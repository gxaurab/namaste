const Location = () => {
    return (
      <div className="bg-white p-6 flex flex-col lg:flex-row items-start justify-between">
        <div className="text-[#2a703d] mb-8 lg:mb-0 lg:w-1/2 lg:pr-8">
          <h1 className="text-4xl font-catchy font-medium ">How do I reach?</h1>
          <p className="mb-6 text-2xl text-amber-800" >We are located in Panauti, Kavre. You can reach us by public bus, taxi, or private vehicle.</p>
          <h2 className=" font-catchy font-medium text-4xl ">What about hiking?</h2>
          <p className="mb-4 text-2xl text-amber-800">Night Stay for Panaut via hiking route:</p>
          <ul className="font-medium list-disc pl-8 text-2xl space-y-2">
            <li>Nagarkot to Dhulikhel</li>
            <li>Dhulikhel to Namobuddha</li>
            <li>Namobuddha to Panauti</li>
          </ul>
        </div>
        <div className=" w-[50%] h-80 sm:flex flex-col lg:flex justify-center ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4455.270371740003!2d85.50520871730888!3d27.58886598083134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb0f4407bc10ff%3A0x8bc62d7b45ca1a13!2sNamaste%20Samudayik%20Homestay!5e0!3m2!1sen!2snp!4v1720703736089!5m2!1sen!2snp"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full lg:w-[80%] sm:w-[100%] border-black border-2"
          ></iframe>
          <h1 className="text-[#2a703d]"> Click for full map</h1>
        </div>
      </div>
    )
  }
  
  export default Location;