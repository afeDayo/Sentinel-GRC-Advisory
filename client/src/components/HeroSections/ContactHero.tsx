const ContactHero = () => {
  return (
    <div
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/unsplash_-0xCCPIbl3M.png')" }}
    >
      <div className="absolute inset-0 bg-[#18234AA6]" />

      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 pt-20 sm:pt-28 lg:pt-[145px] pb-14 sm:pb-20 lg:pb-[145px]">
        <div className="flex flex-col items-start gap-6 sm:gap-8 lg:gap-10 text-start max-w-4xl">
          <h1 className="text-[32px] sm:text-4xl lg:text-[75px] font-semibold text-[#FFFFFF] leading-tight sm:leading-[100%] animate-fade-in-up">
            Get in Touch with <br />
            <span className="text-[#F39B1F] text-[28px] lg:text-[64px]">
              Our GRC Experts
            </span>
          </h1>
          <h2 className="text-[#FFFFFF] font-semibold text-[14px] sm:text-xl lg:text-[32px] max-w-[737px] leading-snug animate-fade-in-up delay-100 pe-8 sm:leading-normal">
            Have questions or need guidance? <br />
            We're here to help you navigate compliance and risk with confidence.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
