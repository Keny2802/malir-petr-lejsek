import {
    Fragment
} from "react";

import Wrapper from "../../../../components/Wrapper";
import Header from "../../../../components/Header";
import Contact from "../../../../sections/Contact";
import Footer from "../../../../components/Footer";

const App = () => {
    return (
        <Fragment>
            <Header />
            <Contact />
            <Footer />
        </Fragment>
    );
};

export default App;