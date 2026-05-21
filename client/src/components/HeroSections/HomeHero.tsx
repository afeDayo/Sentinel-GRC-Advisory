import { Link } from "react-router-dom";

const HomeHero = () => {
  return (
    <header
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat min-h-[294px] sm:min-h-[560px] lg:min-h-[640px]"
      style={{ backgroundImage: "url('/unsplash_B7PClvzYtkU.png')" }}
    >
      <div className="absolute inset-0 bg-[#18234AA6]" />

      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 py-16 sm:py-20 lg:py-[82px]">
        <div className="flex flex-col items-start gap-6 sm:gap-8 lg:gap-[45px] text-start max-w-4xl">
          <div className="flex flex-col items-start gap-6 sm:gap-8 animate-fade-in-up lg:gap-[45px]">
            <h1 className="text-[20px] sm:text-4xl lg:text-[56px] font-bold leading-tight lg:leading-[64px] text-white w-[263px] sm:w-full">
              Guarding Your <span className="text-[#F39B1F]">Future,</span>{" "}
              <br className="hidden sm:inline" /> Guiding Your{" "}
              <span className="text-[#F39B1F]">Success</span>
            </h1>

            <p className="text-[12px] font-medium sm:text-lg lg:text-[24px] sm:font-semibold leading-tight sm:leading-normal text-[#FFFFFF] max-w-[700px] animate-fade-in-up delay-100">
              Regulations are increasing. Risks are evolving. Staying compliant
              shouldn't slow your business down. <br />
              <span className="text-[#A37637]">Sentinel GRC Advisory</span>{" "}
              helps you manage risk, meet compliance requirements, and build
              systems you can rely on.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-[12px] sm:gap-6 items-start sm:items-center animate-fade-in-up delay-200">
            <Link
              to="/services"
              className="inline-flex w-[129px] sm:w-60 items-center justify-center rounded-[25px] border border-[#F39B1F] py-2.5 sm:py-4 font-semibold text-[#FFFFFF] transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 text-[12px] sm:text-lg lg:text-xl"
              style={{
                background:
                  "linear-gradient(90deg,#F39B1F 15.87%,#18234A 81.25%,#110341 100%)",
              }}
            >
              Explore Services
            </Link>
            <Link
              to="/contact"
              className="inline-flex w-[129px] sm:w-48 items-center justify-center rounded-[25px] border border-[#F39B1F] py-2.5 sm:py-4 font-semibold text-[#F39B1F] transition-all duration-300 hover:scale-105 hover:bg-white/5 active:scale-95 text-[12px] sm:text-lg lg:text-xl"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomeHero;
