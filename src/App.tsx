import Header from "./components/Header";
import AdvantagesSection from "./layout/AdvantagesSection";
import Features from "./layout/Features/Features";
import HeroSection from "./layout/HeroSection";
import TrustedClients from "./layout/TrustedClients";

function App() {
  return (
    <main>
      <Header />
      <HeroSection />
      <TrustedClients />
      <AdvantagesSection />
      <Features />
    </main>
  );
}

export default App;
