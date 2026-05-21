import { Link } from "react-router-dom";

const ServicesHero = () => {
  return (
    <div
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/9d1e6076e0ea6c5065dedbfd4d998de8f7b6f1f8.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-[#18234AA6]" />

      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 py-16 sm:py-20 lg:py-28 flex items-center justify-center">
        <div className="flex flex-col items-center gap-8 sm:gap-10 lg:gap-[63px] text-center max-w-4xl">
          <h1 className="text-[24px] sm:text-5xl lg:text-[64px] font-semibold text-[#FFFFFF] animate-fade-in-up">
            Our <span className="text-[#F39B1F]">GRC</span> Services
          </h1>
          <p className="text-[#FFFFFF] text-[14px] sm:text-2xl lg:text-[32px] font-medium sm:font-semibold leading-tight sm:leading-normal animate-fade-in-up delay-100 px-10">
            Helping organizations manage risk, ensure compliance, and build
            strong governance systems.
          </p>
          <Link
            to="/contact"
            className="bg-[#F39B1F] w-[163px] sm:w-[319px] h-[35px] sm:h-[65px] flex items-center justify-center text-[#F5F5DC] text-[11px] sm:text-xl lg:text-[24px] font-semibold rounded-[25px] transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 animate-fade-in-up delay-200"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesHero;
