import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Product from "./components/Product.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <div className="banner">
        Prototyp — diese Website befindet sich im Aufbau. Inhalte können sich noch ändern.
      </div>
      <Header />
      <main>
        <Hero />
        <About />
        <Product />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
