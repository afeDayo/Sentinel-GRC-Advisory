import { GoArrowRight } from "react-icons/go";
import { FiMail } from "react-icons/fi";
import { IoIosWarning, IoIosSend } from "react-icons/io";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import CareersHero from "../components/HeroSections/CareersHero";

// ── Application step card ─────────────────────────────────────────────────────
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
    <div className="card-hover p-4 border border-[#040B7445] shadow-[5px_5px_6px_0px_#040B7445] flex flex-col items-center rounded-[25px] flex-1 min-h-[200px] sm:max-w-[280px] sm:h-[220px] justify-center">
      <img
        src={icon}
        alt={title}
        className="w-[30px] h-[30px] object-contain p-1"
      />
      <h4 className="text-[#F39B1F] font-semibold text-base sm:text-[20px] py-2 text-center">
        {title}
      </h4>
      <p className="text-sm sm:text-base font-normal text-[#000000] leading-snug text-center">
        {description}
      </p>
    </div>
    {showArrow && (
      <GoArrowRight className="text-2xl text-[#040B7445] shrink-0 hidden lg:block" />
    )}
  </div>
);

// ── Volunteer row ─────────────────────────────────────────────────────────────
interface VolunteerRowProps {
  title: string;
}

const VolunteerRow = ({ title }: VolunteerRowProps) => (
  <div className="px-4 sm:px-5 h-[38px] sm:h-[66px] flex justify-between items-center w-full bg-[#040B7414] sm:rounded-[20px] card-hover rounded-[10px]">
    <p className="font-normal text-[10px] sm:text-base text-[#000000] pr-4">
      {title}
    </p>
    <Link to="/contact" className="flex items-center gap-1 shrink-0">
      <span className="text-[10px] sm:text-base font-medium text-[#F39B1F]">
        Apply
      </span>
      <IoIosSend className="text-[#F39B1F] text-[9px] sm:text-[16px]" />
    </Link>
  </div>
);

// ── Environment check item ────────────────────────────────────────────────────
interface CheckItemProps {
  text: string;
}

const CheckItem = ({ text }: CheckItemProps) => (
  <div className="px-4 h-[38px] sm:h-[81px] flex justify-start gap-3 items-center w-full border border-[#040B7445] sm:rounded-[20px] card-hover rounded-[10px]">
    <RiCheckboxCircleLine className="text-[15px] sm:text-2xl text-[#040B74] shrink-0" />
    <p className="font-normal text-[11px] sm:text-base lg:text-[18px] text-[#000000]">
      {text}
    </p>
  </div>
);

const Careers = () => {
  return (
    <div>
      <CareersHero />

      {/* ── Why Work With Us ─────────────────────────────────── */}
      <section className="bg-white">
        <div className="max-w-[1440px] px-4 sm:px-8 lg:px-[156px] py-12 sm:py-14 flex flex-col lg:flex-row items-center w-full justify-between mx-auto gap-8 lg:gap-12">
          <div className="max-w-2xl text-start flex flex-col items-center sm:items-start gap-[15px] animate-fade-in-left">
            <h2 className="font-medium text-[20px] sm:text-3xl lg:text-[36px] gradient-text">
              Why Work With Us?
            </h2>
            <p className="text-[12px] sm:text-base text-[#000000] leading-relaxed sm:pe-10">
              At Sentinel GRC Advisory, you'll gain hands-on experience in
              governance, risk, and compliance by working on real projects that
              impact businesses and NGOs.
              <br />
              <br />
              We create an environment where you can build practical skills,
              grow your expertise, and gain exposure to both local and
              international compliance standards.
            </p>
          </div>
          <img
            src="/work.png"
            alt="Work environment"
            className="rounded-xl w-[90%] max-w-sm lg:max-w-none lg:w-[42%] object-cover shrink-0 animate-fade-in-right card-hover"
          />
        </div>
      </section>

      {/* ── Application Process ──────────────────────────────── */}
      <section className="bg-[#9C92920D]">
        <div className="mx-auto max-w-[1440px] py-6 sm:py-[50px] px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 text-center flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-3">
            <h2 className="text-center font-medium text-[20px] sm:text-3xl lg:text-[36px] gradient-text animate-fade-in-up">
              Application Process
            </h2>
            <p className="font-normal text-[12px] sm:text-base text-[#000000] animate-fade-in-up delay-100 px-8 sm:px-0">
              We aim to make the process smooth and respectful of your time.
            </p>
          </div>

          {/* Desktop row */}
          <div className="hidden lg:flex items-center w-full gap-2">
            <StepCard
              icon="/application.png"
              title="Submit Your Application"
              description="Send your application through our website or via email, including your CV and any relevant information."
            />
            <StepCard
              icon="/application.png"
              title="Application Review"
              description="Our team carefully reviews your submission to assess your skills, interests, and fit for the role."
            />
            <StepCard
              icon="/application.png"
              title="Interview Stage"
              description="Shortlisted candidates will be contacted for a conversation to discuss their experience, goals, and potential contribution."
            />
            <StepCard
              icon="/application.png"
              title="Final Selection"
              description="Successful candidates will receive an offer and further details on the next steps."
              showArrow={false}
            />
          </div>

          {/* Mobile grid */}
          <div className="grid grid-cols-2 gap-6 w-full lg:hidden">
            {[
              {
                title: "Submit Your Application",
                desc: "Send your application through our website or via email, including your CV and any relevant information.",
              },
              {
                title: "Application Review",
                desc: "Our team carefully reviews your submission to assess your skills, interests, and fit for the role.",
              },
              {
                title: "Final Selection",
                desc: "Successful candidates will receive an offer and further details on the next steps.",
              },
              {
                title: "Interview Stage",
                desc: "Shortlisted candidates will be contacted for a conversation to discuss their experience, goals, and potential contribution.",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="card-hover p-4 border border-[#040B7445] shadow-[5px_5px_6px_0px_#040B7445] flex flex-col items-center rounded-[25px] h-[134px]"
              >
                {/* <img
                  src="/application.png"
                  alt={s.title}
                  className="w-12 h-12 object-contain"
                /> */}
                <h4 className="text-[#F39B1F] font-semibold text-[11px] py-2 text-center">
                  {s.title}
                </h4>
                <p className="text-[10px] font-normal text-[#000000] leading-snug text-center">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-4 sm:gap-[24px]">
            <div className="bg-[#18234A] py-3 px-6 sm:py-[15px] sm:px-[25px] flex items-center gap-2.5 rounded-[25px] card-hover">
              <FiMail className="text-[15px] sm:text-xl text-[#F39B1F]" />
              <a
                href="mailto:sentinel.grcadvisory@gmail.com?subject=Application&body=Please attach your CV and Cover Letter"
                className="text-[10px] sm:text-base font-semibold text-[#F39B1F]"
              >
                Email Your CV &amp; Cover Letter
              </a>
            </div>
            <div className="flex items-start gap-1 w-[282px] sm:w-full">
              <IoIosWarning className="text-[#B00606] text-[10px] sm:text-lg shrink-0 mt-[2px] sm:mt-0" />
              <p className="text-[10px] sm:text-base font-normal text-[#000000]">
                Applications without both CV and cover letter will not be
                reviewed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Internship Program ───────────────────────────────── */}
      <section
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/section career.png')" }}
      >
        <div className="absolute inset-0 bg-[#18234AA6]" />
        <div className="relative mx-auto max-w-[1440px] py-6 sm:py-16 px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 flex items-center justify-center">
          <div className="flex flex-col items-center gap-[15px] sm:gap-8 text-center max-w-4xl animate-fade-in-up">
            <h2 className="font-bold text-[20px] sm:text-3xl lg:text-[36px] text-[#FFFFFF]">
              Internship <span className="text-[#F39B1F]">Program</span>
            </h2>
            <p className="text-start font-medium text-[9px] sm:text-base leading-relaxed text-[#F5F5DC]">
              Our internship program is designed for students and early
              professionals who want to gain practical experience in governance,
              risk, and compliance. At Sentinel GRC Advisory, interns are given
              the opportunity to work on real projects across businesses and
              NGOs, gaining hands-on exposure that goes beyond theoretical
              learning.
              <br />
              <br />
              You will develop practical skills in risk assessment, compliance
              processes, and governance frameworks, while gaining insight into
              both local and international standards. Throughout the program,
              you'll work in a structured and supportive environment that
              encourages learning, growth, and professional development.
              <br />
              <br />
              If you're looking to build real-world experience and take a
              meaningful step into the GRC field, we encourage you to apply.
            </p>
            <div className="flex flex-col items-center gap-4 sm:gap-[25px]">
              <Link
                to="/contact"
                className="bg-[#F39B1F] px-6 h-8 sm:px-10 sm:h-[59px] flex items-center rounded-[25px] text-[10px] sm:text-base font-semibold text-[#18234A] transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
              >
                Apply for Internship
              </Link>
              <p className="text-[10px] sm:text-base font-medium text-[#FFFFFF]">
                📌 Important: Please attach your CV and cover letter when
                applying.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Volunteering ─────────────────────────────────────── */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] py-12 sm:py-14 px-4 sm:px-8 lg:px-[170px] text-center flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-3 max-w-3xl">
            <h2 className="text-center font-medium text-[20px] sm:text-3xl lg:text-[36px] gradient-text animate-fade-in-up">
              Volunteering Opportunities
            </h2>
            <p className="font-normal text-[11px] sm:text-base text-[#000000] leading-snug animate-fade-in-up delay-100 px-6 sm:px-0">
              We welcome passionate individuals looking to apply their existing
              skills in a real-world environment. Volunteers support ongoing
              work across different departments while gaining practical
              experience in governance, risk, and compliance.
            </p>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-[10px] sm:gap-x-[50px] sm:gap-y-[31px] text-start">
            <VolunteerRow title="Risk & Compliance Support Volunteer (Remote)" />
            <VolunteerRow title="GRC Research Volunteer (Remote)" />
            <VolunteerRow title="Operations / Virtual Assistant Support Volunteer (Remote)" />
            <VolunteerRow title="Content & Communications Volunteer (Remote)" />
            <VolunteerRow title="Business Development Volunteer (Remote)" />
            <VolunteerRow title="Visual Design & Brand Support Volunteer (Remote)" />
          </div>
        </div>
      </section>

      {/* ── Work Environment ─────────────────────────────────── */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] py-6 sm:py-14 px-4 sm:px-8 lg:px-[120px] text-center flex flex-col items-center sm:gap-10 gap-5">
          <div className="flex flex-col items-center gap-3 sm:gap-[20px] max-w-4xl">
            <h2 className="text-center font-medium text-[20px] sm:text-3xl lg:text-[36px] gradient-text animate-fade-in-up">
              Our Work Environment
            </h2>
            <p className="font-normal text-[11px] sm:text-base text-[#000000] leading-snug max-w-[823px] animate-fade-in-up delay-100 px-2 sm:px-0">
              At Sentinel GRC Advisory, we operate in a structured and
              learning-focused environment where individuals gain real exposure
              to governance, risk, and compliance work. Our focus is on
              delivering practical solutions while creating opportunities for
              growth and professional development.
            </p>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-[10px] sm:gap-x-[40px] sm:gap-y-[25px] text-start">
            <CheckItem text="Real-world GRC project experience" />
            <CheckItem text="Exposure to compliance frameworks and standards" />
            <CheckItem text="Practical skill development in risk and governance" />
            <CheckItem text="Structured professional work environment" />
            <CheckItem text="Mentorship and guided learning" />
            <CheckItem text="Exposure to both local and international practices" />
          </div>

          <div className="flex flex-col items-center gap-5 animate-fade-in-up delay-200">
            <h3 className="font-semibold text-[11px] sm:text-xl lg:text-[24px] text-[#18234A] italic">
              Start your journey in governance, risk, and compliance with
              Sentinel GRC Advisory...
            </h3>
            <div className="flex flex-col sm:flex-row items-center sm:gap-5 gap-[15px]">
              <Link
                to="/contact"
                className="sm:w-[190px] sm:h-[55px] w-[220px] h-[40px] flex items-center justify-center font-semibold text-xs sm:text-[20px] text-[#FFFFFF] bg-[#18234A] rounded-[25px] transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
              >
                Apply Now
              </Link>
              <Link
                to="/contact"
                className="sm:w-[190px] sm:h-[55px] w-[220px] h-[40px] flex items-center justify-center font-semibold text-xs sm:text-[20px] text-[#18234A] border border-[#18234A] rounded-[25px] transition-all duration-300 hover:scale-105 hover:bg-[#18234A]/5 active:scale-95"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
