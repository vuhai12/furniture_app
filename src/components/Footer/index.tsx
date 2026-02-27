import logo from "@assets/Footer/logo.svg";
import facebook from "@assets/Footer/facebook.svg";
import twitter from "@assets/Footer/twitter.svg";
import instar from "@assets/Footer/instar.svg";
import linked from "@assets/Footer/linked.svg";

const dataFooter = [
  {
    title: "Our Service",
    items: [
      "Interior design",
      "Outdoor design",
      "Lighting design",
      "Office design",
    ],
  },
  {
    title: "About Us",
    items: ["Reviews", "Careers", "Pricing", "Press inquiries"],
  },
  {
    title: "Contact Us",
    items: [
      "info@vivadecor.com",
      "Design Avenue Cityville, CA 90210 United States",
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#1F1F1F] text-white relative z-40">
      <div className="container pb-16 pt-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="flex flex-col gap-6">
            <img
              src={logo}
              alt="logo"
              className="w-[160px] object-contain"
              loading="lazy"
            />

            <p className="text-gray-400 text-[16px] leading-relaxed max-w-sm">
              VivaDecor – your premier destination for luxury and modern
              interior design.
            </p>

            <div className="flex gap-4">
              {[facebook, twitter, instar, linked].map((icon, index) => (
                <div
                  key={index}
                  className="w-9 h-9 bg-[#313131] rounded-md flex items-center justify-center hover:bg-white hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <img src={icon} alt="social" className="w-4" loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {dataFooter.map((section, index) => (
            <div key={index}>
              <h5 className="text-lg font-semibold mb-6">{section.title}</h5>

              <ul className="flex flex-col gap-4">
                {section.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer text-sm leading-relaxed"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-[#2C2C2C] mt-16 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} VivaDecor. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
