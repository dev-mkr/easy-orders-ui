import club from "../assets/trusted-clients/club.svg";
import edureka from "../assets/trusted-clients/edureka.svg";
import welspun from "../assets/trusted-clients/welspun.svg";
import wllend from "../assets/trusted-clients/wllend.svg";
import yip from "../assets/trusted-clients/yip.svg";
import zainsure from "../assets/trusted-clients/zainsure.svg";

const TrustedClients = () => {
  return (
    <section className="flex flex-col items-center bg-pink py-[15px] lg:py-8">
      <h2 className="container pb-7 text-center text-lg font-semibold text-gray lg:text-2xl">
        Trusted by the <span className="text-green">fastest growing brands</span> in rapidly
        developing economies
      </h2>
      <ul className="container mx-4 flex justify-center gap-10 overflow-auto [&>li]:min-w-fit">
        <li>
          <img src={club} alt="club"></img>
        </li>
        <li>
          <img src={edureka} alt="edureka"></img>
        </li>
        <li>
          <img src={welspun} alt="welspun"></img>
        </li>
        <li>
          <img src={wllend} alt="wllend"></img>
        </li>
        <li>
          <img src={yip} alt="yip"></img>
        </li>
        <li>
          <img src={zainsure} alt="zainsure"></img>
        </li>
      </ul>
    </section>
  );
};

export default TrustedClients;
