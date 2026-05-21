const AboutHero = () => {
  return (
    <div
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/unsplash_PhYq704ffdA.png')" }}
    >
      <div className="absolute inset-0 bg-[#18234AA6]" />

      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 pt-6 pb-10 sm:pt-12 sm:pb-32 lg:pt-14 lg:pb-44">
        <div className="flex flex-col items-start gap-10 sm:gap-14 lg:gap-20 text-start">
          <h3 className="text-[12px] sm:text-2xl lg:text-[32px] font-semibold text-[#FFFFFF] animate-fade-in">
            Sentinel <span className="text-[#A37637]">GRC</span> Advisory
          </h3>
          <h2 className="text-[20px] sm:text-4xl lg:text-5xl xl:text-[64px] font-semibold text-[#FFFFFF] max-w-4xl leading-tight animate-fade-in-up delay-100 text-center sm:text-start px-2 sm:px-0">
            Building Trust Through{" "}
            <span className="text-[#F39B1F]">
              Governance, Risk, and Compliance
            </span>{" "}
            Excellence.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
