"use client";

import {
  Fragment
} from "react";

import ContactHeader from "../../components/ContactHeader";
import Header from "../../components/Header";
import Hero from "../../sections/Hero";
import About from "../../sections/About";
import Gallery from "../../sections/Gallery";
import Services from "../../sections/Services";
import WhyUs from "../../sections/WhyUs";
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
      <WhyUs />
      <Work />
      <References />
      <Gallery />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default Home;