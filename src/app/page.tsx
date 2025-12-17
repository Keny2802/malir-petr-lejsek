import {
  Fragment
} from "react";

import ContactHeader from "../../components/ContactHeader";
import Header from "../../components/Header";
import Hero from "../../sections/Hero";
import About from "../../sections/About";
import Services from "../../sections/Services";
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
      <References />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default Home;