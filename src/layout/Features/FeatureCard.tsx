import { ReactComponent as MegaPhone } from "../../assets/megaphone-outline.svg";

type featureCardProps = {
  title: string;
  description: string;
};

const FeatureCard: React.FC<featureCardProps> = ({ title, description }) => (
  <li className="text-gary feature-card group relative flex flex-col items-center gap-x-6 rounded-[15px] bg-white pb-9 pt-16 text-center lg:flex-row lg:pt-7 lg:text-start">
    <MegaPhone className="-mt-14 ml-3 h-7 w-9 brightness-50 group-hover:filter-none" />
    <div className="mx-5 lg:ml-0">
      <h3 className="mb-3 text-xl font-medium">{title}</h3>
      <p>{description}</p>
    </div>
  </li>
);

export default FeatureCard;
