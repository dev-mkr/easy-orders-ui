import advantage1 from "../assets/advantige-section/advantages1.webp";
import advantage2 from "../assets/advantige-section/advantages2.webp";
import advantage3 from "../assets/advantige-section/advantages3.webp";
import advantage4 from "../assets/advantige-section/advantages4.webp";

const AdvantagesSection = () => {
  return (
    <section className="container py-[15px] lg:py-8">
      <div className="mb-5 text-center">
        <h2 className="mb-2 text-[28px] font-semibold lg:text-4xl">Choose the Wati advantage</h2>
        <p>Use Wati to engage your prospects through the WhatsApp Business API</p>
      </div>
      <ul className="transition-1 flex flex-col gap-7 text-center lg:flex-row lg:flex-nowrap lg:text-start [&>li>p]:sm:max-lg:px-4 [&>li]:flex-1">
        <li>
          <img
            src={advantage1}
            className="mx-auto w-[200px] duration-[400ms] hover:scale-105 lg:mx-0 lg:w-[250px]"
            alt="advantage1"
          />
          <h3 className="my-[10px] text-[18px] font-semibold lg:text-xl">
            Break engagement <br className="hidden lg:block" /> barriers
          </h3>
          <p>
            Engage using WhatsApp and improve response rates over email, SMS and in-app messaging
            and campaigning.
          </p>
        </li>
        <li>
          <img
            src={advantage2}
            className="mx-auto w-[200px] duration-[400ms] hover:scale-105 lg:mx-0 lg:w-[250px]"
            alt="advantage2"
          />
          <h3 className="my-[10px] text-[18px]  font-semibold lg:text-xl">
            A better way to <br className="hidden lg:block" />
            upscale
          </h3>
          <p>
            Upscale with multiple users on one single number and get a better return on investment
            than alternative WhatsApp BSPs.
          </p>
        </li>
        <li>
          <img
            src={advantage3}
            className="mx-auto w-[200px] duration-[400ms] hover:scale-105 lg:mx-0 lg:w-[250px]"
            alt="advantage3"
          />
          <h3 className="my-[10px] text-[18px]  font-semibold lg:text-xl">
            Communicate at scale <br className="hidden lg:block" /> efficiently
          </h3>
          <p>
            Easily start and manage conversations with thousands of customers and prospects through
            automation, chatbots and custom workflows.
          </p>
        </li>
        <li>
          <img
            src={advantage4}
            className="mx-auto w-[200px] duration-[400ms] hover:scale-105 lg:mx-0 lg:w-[250px]"
            alt="advantage4"
          />
          <h3 className="my-[10px] text-[18px]  font-semibold lg:text-xl">
            Multiple channels <br className="hidden lg:block" /> in one
          </h3>
          <p>
            Nurture leads from Facebook and Instagram and increase ROI 10x by funneling your leads
            to WhatsApp.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default AdvantagesSection;
