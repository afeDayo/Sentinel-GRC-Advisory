import { RiCheckboxCircleLine } from "react-icons/ri";
import AboutHero from "../components/HeroSections/AboutHero";

interface CoreValueCardProps {
  icon: string;
  title: string;
  description: string;
}

const CoreValueCard = ({ icon, title, description }: CoreValueCardProps) => (
  <div className="card-hover shadow-[5px_5px_6px_0px_#040B7445] border border-[#040B7445] p-5 rounded-[25px] flex flex-col items-center justify-start">
    <img
      src={icon}
      alt={title}
      className="sm:w-[35px] sm:h-[35px] w-5 h-5 object-contain"
    />
    <h4 className="sm:p-2 p-1.5 text-[#F39B1F] text-[14px] sm:text-[24px] font-semibold">
      {title}
    </h4>
    <p className="p-2 text-[#000000] text-[11px] sm:text-base font-normal leading-[100%] text-center">
      {description}
    </p>
  </div>
);

interface WhyCardProps {
  text: string;
}

const WhyCard = ({ text }: WhyCardProps) => (
  <div className="w-full border border-[#040B7445] rounded-[15px] sm:px-4 sm:h-[81px] sm:gap-3 flex items-center justify-start card-hover px-[15px] h-[42px] gap-[10px]">
    <RiCheckboxCircleLine className="text-[16px] sm:text-2xl text-[#040B74] shrink-0" />
    <p className="font-normal text-[12px] sm:text-[20px] text-[#000000] leading-tight">
      {text}
    </p>
  </div>
);

const About = () => {
  return (
    <div>
      <AboutHero />

      {/* ── Who We Are ───────────────────────────────────────── */}
      <section>
        <div className="max-w-[1440px] px-6 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 py-6 sm:py-16 flex sm:flex-col flex-col-reverse lg:flex-row items-center w-full justify-between mx-auto gap-10 text-start">
          <img
            src="/Rectangle 20.png"
            alt="Sentinel team"
            className="rounded-xl w-[90%] max-w-sm lg:max-w-none lg:w-[40%] object-cover shrink-0 animate-fade-in-left"
          />
          <p className="text-[12px] sm:text-lg lg:text-[20px] font-normal text-[#000000] max-w-2xl animate-fade-in-right">
            Sentinel GRC Advisory is a professional consulting firm dedicated to
            helping organizations navigate governance, risk, and compliance with
            confidence. Built on the values of integrity, resilience, and
            excellence, we support businesses and NGOs in strengthening
            cybersecurity, improving operational efficiency, and achieving
            sustainable, compliant growth.
            <br />
            <br />
            We specialize in Governance, Risk, and Compliance (GRC),
            Cybersecurity, and Digital Transformation, delivering solutions that
            are practical, strategic, and tailored to each client's environment.
            Our team combines technical expertise with industry insight to
            address complex challenges with clarity and precision.
          </p>
        </div>

        <div className="bg-[#18234A] text-start">
          <div className="max-w-[1440px] px-6 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 py-6 sm:py-16 flex flex-col lg:flex-row items-center w-full justify-between mx-auto gap-10">
            <p className="text-[12px] sm:text-lg lg:text-[20px] font-normal text-[#F5F5DC] max-w-2xl animate-fade-in-left sm:pe-[120px]">
              At Sentinel, we go beyond advisory services. We are committed to
              advancing understanding in the GRC space through research,
              continuous learning, and the development of emerging professionals
              who will shape the future of the industry.
            </p>
            <img
              src="/Rectangle 19.png"
              alt="Sentinel advisory"
              className="rounded-xl w-[90%] max-w-sm lg:max-w-none lg:w-[40%] object-cover shrink-0 animate-fade-in-right"
            />
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ─────────────────────────────────── */}
      <section>
        <div className="max-w-[1440px] px-6 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 py-12 sm:py-16 flex flex-col lg:flex-row items-stretch w-full justify-between mx-auto gap-8">
          <div className="flex-1 p-5 sm:p-7 border border-[#040B7445] rounded-[25px] text-start card-hover animate-fade-in-left">
            <div className="flex items-center gap-3">
              <img
                src="/mission.png"
                alt="Mission"
                className="sm:w-12 sm:h-12 w-[24px] h-[24px] object-contain"
              />
              <h3 className="p-2 font-semibold text-2xl sm:text-3xl lg:text-[36px] text-[#040B74]">
                Our Mission
              </h3>
            </div>
            <p className="p-2 font-normal text-[12px] sm:text-lg lg:text-[20px] text-[#000000] leading-snug sm:mt-3">
              Our mission is to deliver accessible, high-quality governance,
              risk, and compliance (GRC) services to businesses and NGOs,
              fostering integrity, sustainability, and growth.
            </p>
          </div>

          <div className="flex-1 p-5 sm:p-7 border border-[#040B7445] rounded-[25px] text-start card-hover animate-fade-in-right">
            <div className="flex items-center gap-3">
              <img
                src="/mage_light-bulb.png"
                alt="Vision"
                className="sm:w-12 sm:h-12 w-[24px] h-[24px] object-contain"
              />
              <h3 className="p-2 font-semibold text-2xl sm:text-3xl lg:text-[36px] text-[#040B74]">
                Our Vision
              </h3>
            </div>
            <p className="p-2 font-normal text-[12px] sm:text-lg lg:text-[20px] text-[#000000] leading-snug sm:mt-3 sm:pe-10">
              To become an outstanding leading GRC advisory hub, empowering
              businesses of all sizes with trusted compliance and governance
              support. We are committed to shaping the next generation of
              professionals through internships, mentorship, and practical
              industry experience while envisioning a future where every
              organization is resilient, sustainable, and prepared for risk.
            </p>
          </div>
        </div>
      </section>

      {/* ── Core Values ──────────────────────────────────────── */}
      <section className="bg-[#FFFFFFC4]">
        <div className="mx-auto max-w-[1440px] py-12 sm:py-16 px-[76px] sm:px-8 lg:px-16 xl:px-20 2xl:px-24 flex flex-col items-center gap-10 sm:gap-12">
          <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl xl:text-[48px] gradient-text animate-fade-in-up">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl">
            <CoreValueCard
              icon="/integrity.png"
              title="Integrity"
              description="We uphold the highest standards of honesty and transparency, building governance structures that promote accountability and effective decision-making."
            />
            <CoreValueCard
              icon="/innovation.png"
              title="Innovation"
              description="We embrace creativity and forward-thinking approaches, leveraging technology and new ideas to solve complex GRC challenges."
            />
            <CoreValueCard
              icon="/collaboration.png"
              title="Collaboration"
              description="We believe in the power of partnerships, working closely with clients, stakeholders, and teams to achieve shared success."
            />
            <CoreValueCard
              icon="/excellence.png"
              title="Excellence"
              description="We are committed to delivering superior solutions and services, ensuring that every engagement reflects professionalism and quality."
            />
            <CoreValueCard
              icon="/empowerment.png"
              title="Empowerment"
              description="We equip students with the tools, confidence, and mentorship to lead in GRC."
            />
            <CoreValueCard
              icon="/services.png"
              title="Service"
              description="We are committed to supporting under-served businesses with affordable, impactful solutions."
            />
          </div>
        </div>
      </section>

      {/* ── Why Choose Sentinel ──────────────────────────────── */}
      <section>
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 py-12 sm:py-16 flex flex-col items-center gap-8 sm:gap-10">
          <div className="text-center flex flex-col items-center gap-4 sm:gap-5 max-w-[964px]">
            <h2 className="font-semibold text-[20px] sm:text-3xl lg:text-4xl xl:text-[48px] gradient-text animate-fade-in-up">
              Why Choose Sentinel?
            </h2>
            <p className="text-[11px] sm:text-base lg:text-[16px] font-normal leading-snug text-[#000000] animate-fade-in-up delay-100 px-6 sm:px-0">
              At Sentinel GRC Advisory, we don't just provide reports; we
              transform compliance requirements into structured, scalable
              solutions that drive resilience and sustainable growth. We bridge
              the gap between regulatory expectations and operational realities.
              By partnering with Sentinel GRC Advisory, organizations gain:
            </p>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-x-[80px] max-w-[1240px] px-[51px] sm:px-0">
            {[
              "Hands-on GRC execution focus",
              "Multi-disciplinary expertise",
              "Strong ethical foundation",
              "Tailored advisory solutions",
              "Strong understanding of global standards",
              "Structured and professional engagement process",
              "Commitment to knowledge development",
              "Clear and structured delivery",
            ].map((item) => (
              <WhyCard key={item} text={item} />
            ))}
          </div>

          <p className="text-center font-semibold text-[11px] sm:text-xl lg:text-[24px] text-[#18234A] w-full animate-fade-in-up delay-200">
            Partner with Sentinel GRC Advisory to strengthen your organization's
            compliance and risk strategy.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
