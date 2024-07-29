import { Flowbite } from "flowbite-react";
import "./App.css";
import About from "./components/AboutUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServiceSection from "./components/ServiceSection";
import AppComingSoon from "./components/AppComingSoon";
import HowWeWork from "./components/HowWeWork";

function App() {
  return (
    <Flowbite>
      <Header />
      <HeroSection />
      <ServiceSection />
      <About />
      <HowWeWork/>
      <AppComingSoon/>
      <Footer />
    </Flowbite>
  );
}

export default App;
