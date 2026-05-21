import { Link } from "react-router-dom";

const Ready = () => {
  return (
    <section
      className="py-[50px] sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-16 flex flex-col items-center text-center gap-[30px] sm:gap-10 lg:gap-14"
      style={{
        background:
          "linear-gradient(98.84deg, rgba(24,35,74,0.92) 78.42%, rgba(243,155,31,0.92) 116.44%)",
      }}
    >
      <div className="flex flex-col items-center gap-[12px] sm:gap-4 lg:gap-6 max-w-2xl">
        <h2 className="sm:font-medium leading-tight font-semibold text-[20px] sm:text-3xl lg:text-[40px] text-[#F5F5DC] animate-fade-in-up sm:w-full w-[250px]">
          Ready to Transform Your Business?
        </h2>
        <p className="font-normal text-[#F5F5DC] text-[12px] sm:text-lg lg:text-[20px] animate-fade-in-up delay-100">
          Let's strengthen your organization's compliance and risk strategy.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-[12px] sm:gap-8 lg:gap-10 animate-fade-in-up delay-200">
        <Link
          to="/contact"
          className="w-[156px] h-[35px] sm:w-60 sm:h-14 flex items-center justify-center border border-[#F39B1F] rounded-[25px] text-[#FFFFFF] font-semibold text-[12px] sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
          style={{
            background:
              "linear-gradient(90deg,#F39B1F 15.87%,#18234A 81.25%,#110341 100%)",
          }}
        >
          Get Started Today
        </Link>
        <Link
          to="/about"
          className="w-[156px] h-[35px] sm:w-60 sm:h-14 flex items-center justify-center border border-[#F39B1F] rounded-[25px] text-[#F39B1F] font-semibold text-[12px] sm:text-lg transition-all duration-300 hover:scale-105 hover:bg-white/5 active:scale-95"
        >
          Learn More About Us
        </Link>
      </div>
    </section>
  );
};

export default Ready;
