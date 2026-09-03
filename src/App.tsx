import AnnouncementBar from "./components/layout/AnnouncementBar";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import Categories from "./components/home/Categories";
import FeaturedProducts from "./components/home/FeaturedProducts";
import About from "./components/home/About";
import WhatsAppCTA from "./components/home/WhatsAppCTA";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main>
        <Hero />
        <Categories />
        <FeaturedProducts />
        <About />
        <WhatsAppCTA />
      </main>

      <Footer />
    </>
  );
}

export default App;
