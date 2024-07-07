import Image from "next/image";
import Link from "next/link";
import FooterImage from "@/assets/footer.png";

const Footer = () => {
  return (
    <footer className="text-white py-12 px-4 md:px-8 max-w-[1200px] mx-auto">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Copyright */}
          <div className="space-y-4">
            <Image src={FooterImage} alt="Nexcent" width={120} height={40} />
            <p className="text-sm">Copyright © 2020 Nexcent ltd.</p>
            <p className="text-sm">All rights reserved</p>
            <div className="flex space-x-4 mt-4">
              {["instagram", "dribbble", "twitter", "youtube"].map((social) => (
                <Link
                  key={social}
                  href={`#${social}`}
                  className="text-gray-400 hover:text-white"
                >
                  <span className="sr-only">{social}</span>
                  <i className={`fab fa-${social}`}></i>
                </Link>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {[
                "About us",
                "Blog",
                "Contact us",
                "Pricing",
                "Testimonials",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:text-gray-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {[
                "Help center",
                "Terms of service",
                "Legal",
                "Privacy policy",
                "Status",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:text-gray-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay up to date */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay up to date</h3>
            <div className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-gray-800 text-white rounded-md py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-500 hover:text-green-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
