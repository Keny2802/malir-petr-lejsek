import {
    Fragment
} from "react";
import {
    MapIcon,
    EnvelopeIcon,
    DevicePhoneMobileIcon,
    PhoneIcon
} from "@heroicons/react/24/solid";
import Link from "next/link";

import Wrapper from "./Wrapper";
import Logo from "./Logo";

const ContactInfo = () => {
    return (
        <Fragment>
            <Wrapper>
                <Wrapper className="flex flex-col gap-2 md:gap-3 lg:gap-4">
                    <h3
                    // className="text-xl md:text-[22px] lg:text-2xl font-semibold"
                    className="mt-2 md:mt-2.5 lg:mt-3 text-xl md:text-[22px] lg:text-[25px] text-[#a11106] font-bold uppercase"
                    >
                        Kontakt
                    </h3>
                    <Logo />
                    <p className="text-[15px] md:text-base lg:text-lg font-medium">
                        PROFI MALBY - Lejska Petr
                    </p>
                </Wrapper>
                <ul className="mt-4 md:mt-6 lg:mt-8 flex flex-col gap-2 md:gap-3 lg:gap-4">
                    <li className="relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.75 after:w-full after:bg-[#a11106] after:scale-[0_1] after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-[1_1] header-item">
                        <Link
                        href="https://mapy.com/cs/zakladni?source=firm&id=594523&x=16.5614992&y=49.1658025&z=17"
                        rel="noopener noreffer"
                        target="_blank"
                        className="flex items-center gap-2 transition-colors duration-300 ease-in-out hover:text-[#a11106]">
                            <MapIcon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 cursor-pointer transition-colors duration-300 ease-in-out hover:text-[#a11106]" />
                            Kroupova 180/56, Brno 625 00
                        </Link>
                    </li>
                    <li className="relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.75 after:w-full after:bg-[#a11106] after:scale-[0_1] after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-[1_1] header-item">
                        <Link
                        href="mailto:info@profimalby.cz"
                        className="flex items-center gap-2 transition-colors duration-300 ease-in-out hover:text-[#a11106]">
                            <EnvelopeIcon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 cursor-pointer transition-colors duration-300 ease-in-out hover:text-[#a11106]" />
                            info@profimalby.cz
                        </Link>
                    </li>
                    <li className="relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.75 after:w-full after:bg-[#a11106] after:scale-[0_1] after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-[1_1] header-item">
                        <Link
                        href="tel:+420603243852"
                        className="flex items-center gap-2 transition-colors duration-300 ease-in-out hover:text-[#a11106]">
                            <DevicePhoneMobileIcon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 cursor-pointer transition-colors duration-300 ease-in-out hover:text-[#a11106]" />
                            +420 603 243 852
                        </Link>
                    </li>
                    <li className="relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.75 after:w-full after:bg-[#a11106] after:scale-[0_1] after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-[1_1] header-item">
                        <Link
                        href="tel:+420547211709"
                        className="flex items-center gap-2 transition-colors duration-300 ease-in-out hover:text-[#a11106]">
                            <PhoneIcon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 cursor-pointer transition-colors duration-300 ease-in-out hover:text-[#a11106]" />
                            +420 547 211 709
                        </Link>
                    </li>
                    <Wrapper className="flex items-center gap-2 font-medium">
                        <p className="text-[15px] md:text-base lg:textlg">
                            IČO
                        </p>
                        <p className="text-[15px] md:text-base lg:textlg">
                            68 01 36 63
                        </p>
                    </Wrapper>
                </ul>
            </Wrapper>
        </Fragment>
    );
};

export default ContactInfo;