
import NavBar from "../components/home/navBar";
import HeroSection from "../components/home/heroSection";
import FeaturesSection from "../components/home/featuresSection";   
import QuotesSection from "../components/home/quotesSection";
import Footer from "../components/home/footer";


const Home = () => {
  return (
    <div className="bg-gray-50">
      <NavBar />

      <main className="pt-20">
        <HeroSection />

      <FeaturesSection />

      <QuotesSection />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
