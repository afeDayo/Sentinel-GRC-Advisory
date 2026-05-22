import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      {/* Main footer body */}
      <div className="bg-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 py-[60px] sm:py-10 lg:py-14 flex flex-col lg:flex-row items-start sm:items-center justify-between gap-[12px] sm:gap-10">
          {/* Logo */}
          <div className="flex justify-center lg:justify-start">
            <img
              src="/Sentinel LOGO 2.png"
              alt="Sentinel GRC Advisory"
              className="h-20 lg:h-auto w-auto"
            />
          </div>

          {/* Links + Branding */}
          <div className="w-full lg:w-auto flex flex-col gap-[20px] sm:gap-8">
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 lg:gap-20 justify-between">
              {/* Quick Links */}
              <div className="flex flex-col items-start">
                <h4 className="px-2.5 py-1 sm:py-2.5 text-[#F39B1F] text-base sm:text-xl lg:text-[26px] font-semibold">
                  Quick Links
                </h4>
                {[
                  { to: "/about", label: "About" },
                  { to: "/services", label: "Services" },
                  { to: "/careers", label: "Careers" },
                  { to: "/contact", label: "Contact" },
                ].map(({ to, label }) => (
                  <Link
                    key={label}
                    to={to}
                    className="px-2.5 py-1 sm:py-2.5 text-[#000000] text-[12px] sm:text-base lg:text-xl font-normal hover:text-[#040B74] transition-colors"
                  >
                    {label}
                  </Link>
                ))}
              </div>

              {/* Privacy */}
              <div className="flex flex-col items-start">
                <h4 className="px-2.5 py-1 sm:py-2.5 text-[#F39B1F] text-base sm:text-xl lg:text-[26px] font-semibold">
                  Privacy
                </h4>
                <Link
                  to="#"
                  className="px-2.5 py-1 sm:py-2.5 text-[#000000] text-xs sm:text-base lg:text-xl font-normal hover:text-[#040B74] transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="#"
                  className="px-2.5 py-1 sm:py-2.5 text-[#000000] text-xs sm:text-base lg:text-xl font-normal hover:text-[#040B74] transition-colors"
                >
                  Terms & Conditions
                </Link>
              </div>

              {/* Connect */}
              <div className="flex flex-col items-start gap-[12px]">
                <h4 className="px-2.5 py-1 text-[#F39B1F] text-base sm:text-xl lg:text-[26px] font-semibold">
                  Connect
                </h4>
                <div className="flex items-center gap-3 px-2.5 py-2">
                  {[
                    {
                      icon: <FaLinkedinIn />,
                      href: "https://www.linkedin.com/company/sentinel-grc-advisory/",
                      label: "LinkedIn",
                    },
                    {
                      icon: <FaFacebookF />,
                      href: "https://www.facebook.com/share/1CdycmaPiA/",
                      label: "Facebook",
                    },
                    {
                      icon: <FaInstagram />,
                      href: "https://www.instagram.com/sentinel_grc_advisory?igsh=MXRvNHo0MDU3Y25oNw==",
                      label: "Instagram",
                    },
                  ].map(({ icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-[30px] h-[30px] lg:w-14 lg:h-14 rounded-full bg-[#18234A] flex items-center justify-center text-[#F5F5DC] text-base sm:text-xl lg:text-2xl hover:bg-[#040B74] transition-colors hover:scale-110 transform duration-200"
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Brand name bottom right */}
            <div className="flex justify-end">
              <h2 className="font-semibold text-[20px] sm:text-2xl lg:text-[36px] text-[#00000040]">
                Sentinel GRC Advisory
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#18234A] text-center py-6 lg:py-8 flex items-center justify-center">
        <p className="text-[#F5F5DC] text-[12px] sm:text-base lg:text-xl xl:text-[22px] font-normal px-4">
          © {new Date().getFullYear()} Sentinel GRC Advisory. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
