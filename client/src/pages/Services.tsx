import { Link } from "react-router-dom";
import { GoArrowRight, GoArrowDown } from "react-icons/go";
import ServicesHero from "../components/HeroSections/ServicesHero";

// ── Process steps data ───────────────────────────────────────────────────────
const steps = [
  {
    icon: "/assessment.png",
    title: "Assessment",
    description:
      "We begin by evaluating your current structures, policies, and compliance status. This helps us identify gaps, risks, and opportunities for improvement.",
  },
  {
    icon: "/strategy.png",
    title: "Strategy Development",
    description:
      "Based on the assessment, we design a tailored compliance and governance strategy that aligns with your business goals and regulatory requirements.",
  },
  {
    icon: "/implementation.png",
    title: "Implementation",
    description:
      "We put the strategy into action by developing policies, setting up frameworks, and embedding compliance practices into your daily operations.",
  },
  {
    icon: "/monitoring.png",
    title: "Monitoring & Support",
    description:
      "We provide continuous monitoring, regular check-ins, and timely updates to ensure your business remains resilient and prepared for change.",
  },
];

// ── Process step card ─────────────────────────────────────────────────────────
interface StepCardProps {
  icon: string;
  title: string;
  description: string;
  showArrow?: boolean;
}

const StepCard = ({
  icon,
  title,
  description,
  showArrow = true,
}: StepCardProps) => (
  <div className="flex items-center gap-2">
    <div className="card-hover p-4 sm:p-5 border border-[#040B7445] shadow-[5px_5px_6px_0px_#040B7445] flex flex-col items-center rounded-[25px] flex-1 min-h-[220px] justify-center sm:max-w-[311px]">
      <img
        src={icon}
        alt={title}
        className="sm:w-[35px] sm:h-[35px] object-contain p-1"
      />
      <h4 className="text-[#F39B1F] font-semibold text-base sm:text-[20px] py-2 text-center">
        {title}
      </h4>
      <p className="text-sm sm:text-base font-normal text-[#000000] leading-tight text-center">
        {description}
      </p>
    </div>
    {showArrow && (
      <GoArrowRight className="text-2xl text-[#040B7445] shrink-0 lg:block" />
    )}
  </div>
);

// ── Service offering card ─────────────────────────────────────────────────────
interface ServiceOfferCardProps {
  image: string;
  title: string;
  description: string;
}

const ServiceOfferCard = ({
  image,
  title,
  description,
}: ServiceOfferCardProps) => (
  <div className="card-hover flex flex-col items-start text-start bg-[#040B7408] border border-[#040B7445] rounded-[20px] overflow-hidden">
    <img
      src={image}
      alt={title}
      className="w-full h-40 sm:h-[251px] object-cover"
    />
    <div className="p-4 sm:p-5 flex flex-col gap-2 sm:gap-[10px]">
      <h4 className="font-semibold text-base sm:text-2xl lg:text-[32px] text-[#040B74]">
        {title}
      </h4>
      <p className="font-normal text-[11px] sm:text-base text-[#000000] leading-snug pb-2">
        {description}
      </p>
    </div>
  </div>
);

// ── Who We Serve card ─────────────────────────────────────────────────────────
interface WhoCardProps {
  icon: string;
  title: string;
  description: string;
}

const WhoCard = ({ icon, title, description }: WhoCardProps) => (
  <div className="card-hover border border-[#040B7445] rounded-[25px] shadow-[5px_5px_6px_0px_#040B7445] py-2.5 px-[12px] sm:p-5 text-start sm:h-[246px]">
    <img
      src={icon}
      alt={title}
      className="w-[20px] sm:w-12 sm:h-12 object-contain"
    />
    <h4 className="py-2 font-semibold text-[14px] sm:text-[24px] text-[#F39B1F] leading-tight">
      {title}
    </h4>
    <p className="font-normal text-[10px] sm:text-base leading-tight text-[#000000]">
      {description}
    </p>
  </div>
);

const Services = () => {
  return (
    <div>
      <ServicesHero />

      {/* ── Four-Stage Process ───────────────────────────────── */}
      <section>
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-[52px] py-6 sm:py-14 text-center flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-3 sm:gap-[15px]">
            <h2 className="text-center font-medium text-[20px] sm:text-3xl lg:text-[40px] gradient-text animate-fade-in-up">
              Our Services Follow a Four-Stage Process
            </h2>
            <p className="font-normal text-[12px] sm:text-lg lg:text-[20px] text-[#000000B0] animate-fade-in-up delay-100 px-10">
              Explore our full range of services designed to drive your digital
              transformation
            </p>
          </div>

          {/* Desktop: row | Mobile: 2x2 grid */}
          <div className="hidden lg:flex items-center w-full justify-between">
            <StepCard
              icon="/assessment.png"
              title="Assessment"
              description="We begin by evaluating your current structures, policies, and compliance status. This helps us identify gaps, risks, and opportunities for improvement."
            />
            <StepCard
              icon="/strategy.png"
              title="Strategy Development"
              description="Based on the assessment, we design a tailored compliance and governance strategy that aligns with your business goals and regulatory requirements."
            />
            <StepCard
              icon="/implementation.png"
              title="Implementation"
              description="We put the strategy into action by developing policies, setting up frameworks, and embedding compliance practices into your daily operations."
            />
            <StepCard
              icon="/monitoring.png"
              title="Monitoring & Support"
              description="We provide continuous monitoring, regular check-ins, and timely updates to ensure your business remains resilient and prepared for change."
              showArrow={false}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-6 sm:w-full lg:hidden w-[234px]">
            {steps.map((s, idx) => (
              <div key={s.title} className="w-full flex flex-col items-center">
                <div className="card-hover p-5 border border-[#040B7445] shadow-[5px_5px_6px_0px_#040B7445] flex flex-col items-center rounded-[25px] w-full">
                  <img
                    src={s.icon}
                    alt={s.title}
                    className="w-6 h-6 sm:w-14 sm:h-14 object-contain"
                  />
                  <h4 className="text-[#F39B1F] font-semibold text-[14px] sm:text-lg py-2 text-center">
                    {s.title}
                  </h4>
                  <p className="text-[11px] font-normal text-[#000000] leading-snug text-center">
                    {s.description}
                  </p>
                </div>

                {idx !== steps.length - 1 && (
                  <GoArrowDown className="text-2xl text-[#040B7445]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services We Offer ────────────────────────────────── */}
      <section>
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-[170px] py-12 sm:py-10 text-center flex flex-col items-center gap-10 sm:gap-[54px]">
          <div className="flex flex-col items-center gap-4 sm:gap-[24px]">
            <h2 className="text-center font-medium text-2xl sm:text-3xl lg:text-4xl xl:text-[48px] gradient-text animate-fade-in-up">
              Services We Offer
            </h2>
            <p className="font-normal text-[12px] sm:text-xl lg:text-[24px] text-[#000000B0] animate-fade-in-up delay-100">
              Explore our full range of services designed to drive your digital
              transformation
            </p>
          </div>

          <div className="w-[342px] sm:w-full grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-x-[100px] sm:gap-y-[70px]">
            <ServiceOfferCard
              image="/governance_img.png"
              title="Governance Advisory"
              description="We help organizations establish strong governance structures, define roles and responsibilities, and ensure effective decision-making processes."
            />
            <ServiceOfferCard
              image="/risk_management.png"
              title="Risk Management"
              description="Our team identifies, assesses, and mitigates risks that could impact your business operations, ensuring resilience and sustainability."
            />
            <ServiceOfferCard
              image="/compliance.png"
              title="Compliance Advisory"
              description="We provide guidance on regulatory requirements, helping SMEs stay compliant with tax, corporate, and industry-specific obligations."
            />
            <ServiceOfferCard
              image="/internal.png"
              title="Internal Audit & Controls"
              description="We design and implement internal control systems, conduct audits, and strengthen accountability across your operations."
            />
            <ServiceOfferCard
              image="/GRC.png"
              title="GRC Technology Advisory"
              description="We support businesses in adopting Governance, Risk, and Compliance (GRC) technology solutions to automate monitoring and reporting."
            />
            <ServiceOfferCard
              image="/TRAINING.png"
              title="Training & Professional Mentorship"
              description="We equip teams with the knowledge and skills to manage compliance and governance effectively while mentoring professionals to grow in their careers."
            />
          </div>
        </div>
      </section>

      {/* ── Who We Serve ─────────────────────────────────────── */}
      <section>
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-[198.5px] py-12 sm:py-16 text-center flex flex-col items-center gap-10 sm:gap-[50px]">
          <h2 className="text-center font-medium text-2xl sm:text-3xl lg:text-[48px] gradient-text animate-fade-in-up">
            Who We Serve
          </h2>
          <p className="font-normal text-[11px] sm:text-xl lg:text-[24px] text-[#000000B0] max-w-5xl animate-fade-in-up delay-100 px-8 sm:px-0">
            At Sentinel, we provide governance, risk, and compliance solutions
            to a wide range of organizations such as:
          </p>

          <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-[15px] sm:gap-x-[50px] sm:gap-y-[50px]">
            <WhoCard
              icon="/house.png"
              title="Businesses"
              description="SMEs and established companies seeking stronger structures, accountability, and compliance frameworks."
            />
            <WhoCard
              icon="/NGOs.png"
              title="NGOs"
              description="Non-profits that require transparency, regulatory compliance, and effective governance to maintain credibility and donor confidence."
            />
            <WhoCard
              icon="/clients.png"
              title="International Clients"
              description="Global organizations operating in or with Nigeria, needing localized expertise to navigate regulatory requirements."
            />
            <WhoCard
              icon="/fintech.png"
              title="Fintech"
              description="Fast-growing innovators balancing agility with strict regulatory obligations in a highly dynamic sector."
            />
            <WhoCard
              icon="/startups.png"
              title="Startups"
              description="Emerging businesses that need to build solid governance and compliance foundations early to scale sustainably."
            />
            <WhoCard
              icon="/coperate.png"
              title="Corporate Organizations"
              description="Large enterprises requiring robust governance systems, risk management, and internal controls to maintain resilience."
            />
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────── */}
      <div
        className="px-4 sm:px-8 lg:px-16 py-16 sm:py-20 flex flex-col items-center text-center gap-10 sm:gap-[64px]"
        style={{
          background:
            "linear-gradient(98.84deg,rgba(24,35,74,0.92) 78.42%,rgba(243,155,31,0.92) 116.44%)",
        }}
      >
        <div className="flex flex-col items-center sm:gap-[29px] gap-3 max-w-4xl">
          <h3 className="font-medium text-[20px] sm:text-3xl lg:text-[48px] text-[#F5F5DC] px-10 sm:px-0 leading-tight">
            Ready to Transform Your Business?
          </h3>
          <p className="font-normal text-[#F5F5DC] text-[12px] sm:text-lg lg:text-[24px]">
            Let's strengthen your organization's compliance and risk strategy.
          </p>
        </div>
        <Link
          to="/contact"
          className="w-[156px] h-[35px] sm:w-[301px] sm:h-[65px] flex items-center justify-center border border-[#F39B1F] rounded-[25px] text-[#FFFFFF] font-semibold text-[12px] sm:text-[24px] transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
          style={{
            background:
              "linear-gradient(90deg,#F39B1F 15.87%,#18234A 81.25%,#110341 100%)",
          }}
        >
          Book a Consultation
        </Link>
      </div>
    </div>
  );
};

export default Services;
