import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { RiCheckboxCircleLine } from "react-icons/ri";
import HomeHero from "../components/HeroSections/HomeHero";
import Ready from "../components/Ready";

// ── Service / Who-we-serve card ──────────────────────────────────────────────
interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  alt: string;
  className?: string;
}

const ServiceCard = ({
  icon,
  title,
  description,
  alt,
  className = "",
}: ServiceCardProps) => (
  <div
    className={`card-hover border rounded-[25px] w-[240px] sm:w-[305px] border-[#040B7445] shadow-[5px_5px_6px_0px_#040B7445] p-5 ${className}`}
  >
    <div className="flex flex-col sm:items-start items-center">
      <img
        src={icon}
        alt={alt}
        className="p-1 sm:w-10 sm:h-10 w-10 object-contain"
      />
      <h3 className="text-[#F39B1F] font-semibold text-[16px] sm:text-xl py-1.5 sm:py-2.5">
        {title}
      </h3>
    </div>
    <p className="font-normal text-[12px] sm:text-base leading-snug text-[#000000] sm:text-start text-center sm:leading-tight sm:py-2">
      {description}
    </p>
  </div>
);

// ── Value card ───────────────────────────────────────────────────────────────
interface ValueCardProps {
  title: string;
  description: string;
}

const ValueCard = ({ title, description }: ValueCardProps) => (
  <div className="card-hover border border-[#040B7445] shadow-[5px_5px_5px_0px_#00000040] sm:py-2.5 sm:px-5 flex flex-col items-start rounded-[25px] gap-1.5 p-5">
    <div className="flex items-center gap-1.5">
      <RiCheckboxCircleLine className="text-2xl sm:text-[30px] text-[#18234A] shrink-0" />
      <h5 className="text-[#000000] font-semibold text-[16px] sm:text-[20px] p-1.5 sm:p-2.5">
        {title}
      </h5>
    </div>
    <p className="font-normal text-[12px] sm:text-base text-[#000000B0] leading-tight">
      {description}
    </p>
  </div>
);

const Home = () => {
  return (
    <div>
      <HomeHero />

      {/* ── About Us ─────────────────────────────────────── */}
      <section>
        <div className="mx-auto flex flex-col items-center gap-[12px] sm:gap-10 pt-[24px] pb-[12px] sm:py-16 lg:py-20 max-w-[1440px] px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24">
          <h2 className="text-center font-medium text-[24px] sm:text-3xl lg:text-4xl gradient-text animate-fade-in-up">
            About Us
          </h2>
          <p className="font-normal leading-[18px] sm:leading-7 text-[#000000] text-[12px] sm:text-lg lg:text-[20px] text-start max-w-[1100px] animate-fade-in-up delay-100">
            Sentinel GRC Advisory is a professional consulting firm operating at
            the intersection of governance, risk, and compliance, helping
            organizations navigate complexity with clarity and confidence. We
            partner with businesses and NGOs to strengthen internal controls,
            enhance cybersecurity posture, and build resilient systems that
            support sustainable growth. <br /> In an environment where
            regulatory demands are increasing and risks are constantly evolving,
            we help organizations stay ahead, compliant and prepared. Our
            approach combines technical expertise with strategic insight to
            deliver solutions that are practical, structured, and tailored to
            each organization's needs. We focus on translating complex
            requirements into clear, actionable frameworks that reduce exposure,
            improve accountability, and support confident decision-making.{" "}
            <br /> With a strong emphasis on professionalism, transparency, and
            client-focused delivery, we work closely with organizations to solve
            real challenges and implement systems that remain effective in a
            dynamic landscape.
          </p>
        </div>
      </section>

      {/* ── Our Services ─────────────────────────────────── */}
      <section className="bg-[#FFFFFF85]">
        <div className="pt-[30px] pb-[15px] sm:py-[50px] flex flex-col items-center sm:gap-[50px] px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 max-w-[1440px] mx-auto gap-[20px]">
          <h2 className="text-center font-medium text-[24px] sm:text-3xl lg:text-4xl gradient-text animate-fade-in-up">
            Our Services
          </h2>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 gap-5 sm:max-w-[1040px] max-w-[240px]">
            <ServiceCard
              icon="/governance.png"
              alt="Governance icon"
              title="Governance"
              description="We help organizations build strong governance foundations that promote transparency, accountability, and effective decision-making."
            />
            <ServiceCard
              icon="/risk.png"
              alt="Risk Management icon"
              title="Risk Management"
              description="We help organizations identify, assess, and mitigate strategic, operational, financial, and compliance risks."
            />
            <ServiceCard
              icon="/gcp_web-risk.png"
              alt="Compliance Advisory icon"
              title="Compliance Advisory"
              description="We support organizations in navigating regulatory landscapes and strengthening compliance systems."
            />
          </div>

          <Link
            to="/services"
            className="flex items-center gap-4 rounded-[20px] bg-[#18234A] px-[25.5px] sm:px-[53px] h-[36px] sm:h-16 justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 animate-fade-in-up delay-200"
          >
            <p className="font-medium text-[12px] sm:text-xl lg:text-[22px] text-[#F5F5DC]">
              View All Services
            </p>
            <FaArrowRightLong className="text-[12px] sm:text-xl text-[#F5F5DC]" />
          </Link>
        </div>
      </section>

      {/* ── Who We Serve ─────────────────────────────────── */}
      <section>
        <div className="pt-[30px] pb-[15px] sm:py-14 flex flex-col items-center sm:gap-10 px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 max-w-[1440px] mx-auto gap-[20px]">
          <h2 className="text-center font-medium text-[24px] sm:text-3xl lg:text-4xl xl:text-[48px] gradient-text animate-fade-in-up">
            Who We Serve
          </h2>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 gap-5 sm:max-w-[1043px] max-w-[240px]">
            <ServiceCard
              icon="/business.png"
              alt="Businesses icon"
              title="Businesses"
              description="SMEs and established companies seeking stronger structures, accountability, and compliance frameworks."
            />
            <ServiceCard
              icon="/NGOs.png"
              alt="NGOs icon"
              title="NGOs"
              description="Non-profits that require transparency, regulatory compliance, and effective governance to maintain credibility and donor confidence."
            />
            <ServiceCard
              icon="/clients.png"
              alt="International Clients icon"
              title="International Clients"
              description="Global organizations operating in or with Nigeria, needing localized expertise to navigate regulatory requirements."
            />
          </div>
        </div>
      </section>

      {/* ── The Principles That Guide Us ─────────────────── */}
      <section>
        <div className="py-[30px] sm:py-14 flex flex-col items-center gap-[12px] sm:gap-14 px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 max-w-[1440px] mx-auto">
          <div className="flex flex-col items-center gap-2.5 sm:gap-3 text-center">
            <h2 className="font-medium text-[20px] sm:text-3xl lg:text-4xl gradient-text animate-fade-in-up">
              The Principles That Guide Us
            </h2>
            <p className="font-normal text-[12px] sm:text-lg lg:text-[20px] text-[#000000B0] animate-fade-in-up delay-100 w-[308px] sm:w-full">
              Our values are the foundation of our company and the way we do
              business:
            </p>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 sm:gap-x-[53px] sm:gap-y-[36px] sm:max-w-[1093px] text-start max-w-[300px] gap-[12px]">
            <ValueCard
              title="Integrity"
              description="We uphold the highest standards of honesty and transparency in all our actions, ensuring trust and credibility in every engagement."
            />
            <ValueCard
              title="Confidentiality"
              description="We safeguard sensitive information with the utmost care, protecting client data and maintaining strict discretion at all times."
            />
            <ValueCard
              title="Accountability"
              description="We take responsibility for our commitments and outcomes, ensuring our work is reliable, auditable, and aligned with global best practices."
            />
            <ValueCard
              title="Customer-Centricity"
              description="We place our clients at the heart of everything we do, tailoring solutions to their unique needs and striving to exceed expectations."
            />
          </div>
        </div>
      </section>

      {/* ── Training & Internship ─────────────────────────── */}
      <section className="bg-[#040B7408]">
        <div className="py-[30px] px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 sm:py-[50px] max-w-[1440px] mx-auto flex flex-col items-center gap-[12px] sm:gap-[45px]">
          <div className="flex flex-col items-center text-center gap-2.5 sm:gap-4 max-w-3xl sm:max-w-[850px]">
            <h2 className="font-semibold sm:font-medium text-[20px] sm:text-3xl lg:text-4xl gradient-text animate-fade-in-up">
              Training &amp; Internship Program
            </h2>
            <p className="sm:font-normal text-[12px] font-light sm:text-base text-[#000000] animate-fade-in-up delay-100 px-6 sm:px-0">
              Beyond advisory services, Sentinel GRC Advisory invests in
              developing the next generation of GRC professionals. Our Training
              and Internship Program provides hands-on experience, practical
              knowledge, and <br className="hidden sm:inline" /> career-building
              opportunities for students and young professionals.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 w-full max-w-[1060px]">
            {/* Image grid */}
            <div className="relative grid grid-cols-2 gap-4 sm:gap-20 w-full max-w-[310px] lg:max-w-none lg:w-[45%] shrink-0">
              <img
                src="/Rectangle 28.png"
                alt="Training program"
                className="rounded-lg w-full object-cover card-hover"
              />
              <img
                src="/Rectangle 29.png"
                alt="Training program"
                className="rounded-lg w-full object-cover card-hover"
              />
              <img
                src="/Rectangle 30.png"
                alt="Training program"
                className="rounded-lg w-full object-cover card-hover"
              />
              <img
                src="/Rectangle 31.png"
                alt="Training program"
                className="rounded-lg w-full object-cover card-hover"
              />

              <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none w-full">
                <img
                  src="/Rectangle 32.png"
                  alt="Training program"
                  className="rounded-lg object-cover card-hover w-[145px] h-[170px] sm:h-[235px] sm:w-[200px]"
                />
              </div>
            </div>

            {/* Text content */}
            <div className="flex flex-col items-center sm:items-start text-start gap-[12px] sm:gap-5 w-full">
              <div className="flex flex-col items-start gap-3">
                <h5 className="font-semibold text-base sm:text-xl text-[#000000]">
                  Program Highlights
                </h5>
                <ul className="flex flex-col items-start gap-3 list-disc pl-5">
                  {[
                    "Structured Learning: Participants gain exposure to real-world GRC and cybersecurity challenges through guided training modules.",
                    "Mentorship: Interns work alongside experienced consultants who provide coaching, feedback, and career guidance.",
                    "Practical Experience: Engage in live projects, research assignments, and case studies that strengthen technical and analytical skills.",
                    "Career Development: Build professional networks, enhance employability, and gain certifications that add value to your career journey.",
                    "Inclusive Opportunities: Both physical and virtual formats are available to ensure accessibility for diverse participants.",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="font-normal text-[11px] sm:text-base text-[#000000] leading-snug"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to="/careers"
                className="bg-[#F39B1F] px-[22px] h-[35px] sm:px-[34px] sm:h-12 rounded-[25px] text-[#18234A] font-semibold text-[12px] sm:text-base flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
              >
                Apply for Internship
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Ready />
    </div>
  );
};

export default Home;
