import heroSectionManImg from "../assets/herosection-man-img.webp";
import heroSectionImg from "../assets/herosection-img.webp";
import threeLines from "../assets/three-liens.webp";

const HeroSection = () => {
  return (
    <section className="container flex h-[90vh] flex-col text-gray lg:h-[62vh] lg:flex-row [&>div]:flex-1">
      <div className="flex flex-col justify-center gap-y-2 text-center lg:text-start">
        <h1 className="relative px-4 text-[32px] font-bold leading-10 lg:px-0 lg:text-5xl lg:leading-[3.75rem] ">
          Grow your business <br className="hidden lg:block" /> on
          <span className=" block text-green lg:inline">WhatsApp</span>
          <span
            className="absolute -left-[46px] top-0 h-14 bg-contain  bg-center bg-no-repeat lg:w-10"
            style={{ backgroundImage: `url("${threeLines}")` }}
          ></span>
        </h1>
        <p className="mb-3 lg:mb-5 lg:text-[18px] [&>br]:hidden [&>br]:lg:block">
          Personalize communication and sell more with the <br /> WhatsApp Business API platform
          that automates
          <br /> marketing, sales, service and support.
        </p>
        <div className="flex flex-col items-center gap-x-5 lg:flex-row ">
          <a className="button-effect relative min-w-[200px] rounded-10 bg-green px-5 pb-[10px] pt-2 text-base lg:min-w-0">
            Free 7 Day Trail
          </a>
          <a className="p-3 text-[15px]">or Book a Demo Today {">"}</a>
        </div>
      </div>
      <div className="relative flex overflow-hidden">
        <img src={heroSectionManImg} alt="a man holding a phone" className="max-w-full" />
        <img
          src={heroSectionImg}
          alt="a phone with a whatsapp chat"
          className="absolute bottom-0 left-[57%] max-h-[86%] lg:bottom-4 lg:left-[53%]"
        />
      </div>
    </section>
  );
};

export default HeroSection;
