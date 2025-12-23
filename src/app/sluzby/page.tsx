import {
    Fragment
} from "react";

import ContactHeader from "../../../components/ContactHeader";
import Header from "../../../components/Header";
import Services from "../../../sections/Services";
import References from "../../../sections/References";
import Contact from "../../../sections/Contact";
import Footer from "../../../components/Footer";

const App = () => {
    return (
        <Fragment>
            <ContactHeader />
            <Header />
            <Services />
            <References />
            <Contact />
            <Footer />
        </Fragment>
    );
};

export default App;