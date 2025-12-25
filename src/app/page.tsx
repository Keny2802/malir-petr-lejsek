import {
  Fragment
} from "react";

import ContactHeader from "../../components/ContactHeader";
import Header from "../../components/Header";
import Hero from "../../sections/Hero";
import About from "../../sections/About";
import Services from "../../sections/Services";
import Calculator from "../../sections/Calculator";
import Work from "../../sections/Work";
import References from "../../sections/References";
import Contact from "../../sections/Contact";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <Fragment>
      <ContactHeader />
      <Header />
      <Hero />
      <About />
      <Services />
      <Calculator />
      <Work />
      <References />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default Home;