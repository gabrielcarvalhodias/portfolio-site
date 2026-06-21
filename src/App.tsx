import { AboutMe } from "./components/AboutMe";
import { Carousel } from "./components/Carousel";
import { Clients } from "./components/Clients";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Videos } from "./components/Videos";
import { PixelParticles } from "./components/pixel-art/PixelParticles";

function App() {
  return (
    <main className="site-world min-h-screen overflow-hidden bg-midnight text-white">
      <PixelParticles />
      <Navbar />
      <Hero />
      <Videos />
      <Carousel />
      <AboutMe />
      <Clients />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
