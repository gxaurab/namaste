import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-green-800 text-white py-6">
      <div className="container mx-auto px-5 lg:px-20">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          {/* Social Media */}
          <div className="mb-6 lg:mb-0">
            <h1 className="text-lg font-semibold mb-2">Follow us on:</h1>
            <div className="flex items-center gap-2">
              <Image src="/facebook.jpg" width={24} height={24} alt="Facebook Icon" />
              <a href="www.facebook.com">Facebook</a>
            </div>
          </div>

          {/* Location */}
          <div className="mb-6 lg:mb-0">
            <h1 className="text-lg font-semibold">Location:</h1>
            <p className="text-white">
              Panauti-4, Taukhal<br />
              Next to Samudayik Boarding School
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h1 className="text-lg font-semibold">Contact:</h1>
            <p className="text-white">
              Name: +977 9841111111<br />
              Name: +977 9841111111
            </p>
            <h2 className="text-lg font-semibold mt-2">Email us at:</h2>
            <p className="text-white">
              oe.gaurab@gmail.com<br />
              oe.gaurab@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
