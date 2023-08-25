import FeatureCard from "./FeatureCard";

const featureData = [
  {
    title: "Broadcast Communication",
    description: "Push out your campaigns and engage with high response WhatsApp messages.",
  },
  {
    title: "Chatbots",
    description: "Create no-code chatbots to provide instant responses to common requests.",
  },
  {
    title: "Multiple agents",
    description:
      "Share the Wati inbox across your team with support for an unlimited number of agents.",
  },
  {
    title: "Low-Code Automations",
    description: "Simplify mass communication and personalized responses with automated tools.",
  },
  {
    title: "1-2-1 Communication",
    description:
      "Tag contacts, categorize and target them in groups using personalized communications.",
  },
  {
    title: "Easy integrations",
    description:
      "Pre-built integrations let you integrate with your tech stack and configure in a few clicks.",
  },
];

const Features = () => {
  return (
    <section className="container my-8 rounded-[20px] border-b-[5px] border-r-[5px] border-blue bg-mint py-[15px] lg:py-8">
      <div className="mb-14 text-center">
        <h2 className="mb-2 text-[28px] font-semibold lg:text-4xl">Features</h2>
        <p>Use Wati to engage your prospects through the WhatsApp Business API</p>
      </div>
      <ul className="grid gap-x-20 gap-y-10 px-2 md:grid-cols-2 lg:px-10">
        {featureData.map((feature, index) => (
          <FeatureCard key={index} title={feature.title} description={feature.description} />
        ))}
      </ul>
      <div className="my-10 flex flex-col items-center justify-center gap-x-5 lg:flex-row">
        <a className="button-effect relative min-w-[200px] rounded-10 bg-green px-5 pb-[10px] pt-2 text-base lg:min-w-0">
          Free 7 Day Trail
        </a>
        <a className="p-3 text-[15px]">or Book a Demo Today {">"}</a>
      </div>
    </section>
  );
};

export default Features;
