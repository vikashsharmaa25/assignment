import Image from "next/image";
import Link from "next/link";
import TestImage from "@/assets/image 9.png";
import Logo from "@/assets/Logo.png";

const Testimonial = ({ darkMode }: any) => {
  return (
    <div
      className={`max-w-[1200px] mx-auto px-4 py-8 sm:py-12 ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`}
    >
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image Section */}
        <div className="w-full lg:w-1/3">
          <div
            className={`aspect-square rounded-lg overflow-hidden max-w-[326px] mx-auto ${darkMode ? "bg-gray-800" : "bg-gray-900"}`}
          >
            <Image
              src={TestImage}
              alt="Tesla Logo"
              width={326}
              height={326}
              layout="responsive"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-2/3">
          <p
            className={`mb-6 text-sm sm:text-base ${darkMode ? "text-gray-300" : "text-gray-600"}`}
          >
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>

          <h3 className="text-green-500 font-bold text-lg mb-1">Tim Smith</h3>
          <p
            className={`mb-6 text-sm sm:text-base ${darkMode ? "text-gray-50" : "text-gray-500"}`}
          >
            British Dragon Boat Racing Association
          </p>

          <div className="flex justify-between items-center">
            <div className="flex flex-wrap items-center gap-4">
              {Array(7)
                .fill(Logo)
                .map((logo, index) => (
                  <Image
                    key={index}
                    src={logo}
                    alt={`Logo ${index + 1}`}
                    width={100}
                    height={100}
                    className="w-4 h-4 sm:w-12 sm:h-12 mx-2"
                  />
                ))}
            </div>

            <Link
              href="/customers"
              className="text-green-500 font-semibold flex items-center text-sm sm:text-base"
            >
              Meet all customers
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 sm:h-5 sm:w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
