const CareersHero = () => {
  return (
    <div
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/unsplash_QBpZGqEMsKg.png')" }}
    >
      <div className="absolute inset-0 bg-[#18234AA6]" />

      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 py-16 sm:py-24 lg:pt-32 flex items-center justify-center lg:pb-20">
        <div className="flex flex-col items-center gap-[24px] sm:gap-10 text-center max-w-[1105px]">
          <h1 className="text-[20px] sm:text-4xl lg:text-[64px] font-semibold text-[#FFFFFF] sm:leading-tight animate-fade-in-up leading-normal">
            Build Your Career in <br />
            <span className="text-[#F39B1F]">
              Governance, Risk, and Compliance
            </span>
          </h1>
          <p className="text-[#FFFFFF] text-[12px] sm:text-xl lg:text-[36px] font-semibold leading-tight sm:leading-normal animate-fade-in-up delay-100 px-10">
            Join us and gain hands-on experience helping organizations navigate
            complex regulatory environments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareersHero;
