import {
    Fragment
} from "react";
import Link from "next/link";

import Wrapper from "../../../components/Wrapper";
import Logo from "../../../components/Logo";
import Heading from "../../../components/Heading";
import Subheading from "../../../components/Subheading";

const Page = () => {
    return (
        <Fragment>
            <Wrapper className="px-5 py-8 md:px-8 md:py-12 lg:px-10 lg:py-14 z-50 fixed inset-0 flex justify-center items-center flex-col gap-2.5 md:gap-3 lg:gap-3.5 w-full h-screen bg-[#ffd24d]/92 shadow-md">
                <Logo />
                <Heading>
                    Mockrát Vám děkujeme za Vaší zprávu.
                </Heading>
                <Subheading>
                    Vaší zprávě / poptávce se začneme věnovat co nějdříve.
                </Subheading>
                <Link
                href="/"
                className="p-3 md:p-4 lg:p-4.5 bg-white text-black text-center w-full md:w-75 rounded-md">
                    Vrátit se zpět domů
                </Link>
            </Wrapper>
        </Fragment>
    );
};

export default Page;