//https://www.freecodecamp.org/news/build-portfolio-website-react/

import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import FadeInSection from "./components/FadeInSection";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />

      <FadeInSection>
        <Projects />
      </FadeInSection>

      <FadeInSection>
        <Skills />
      </FadeInSection>

      {/* <FadeInSection>
        <Testimonials />
      </FadeInSection> */}

      <FadeInSection>
        <Contact />
      </FadeInSection>

      <FadeInSection>
        <Footer />
      </FadeInSection>
    </main>
  );
}
