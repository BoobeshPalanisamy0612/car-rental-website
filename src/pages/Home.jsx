import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchCard from "../components/SearchCard";
import FeaturedCars from "../components/FeaturedCars";
import WhyChooseUs from "../components/WhyChooseUs";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-slate-950 text-white">

      <Navbar />

      <Hero />

      <SearchCard />

      <FeaturedCars />

      <WhyChooseUs />

      <Stats />

      <Testimonials />

      <Footer />

    </div>
  );
}