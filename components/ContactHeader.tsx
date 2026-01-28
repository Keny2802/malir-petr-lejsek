import {
    Fragment
} from "react";
import {
    DevicePhoneMobileIcon,
    PhoneIcon,
    EnvelopeIcon,
    ClockIcon
} from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";

import Wrapper from "./Wrapper";

const ContactHeader = () => {
    return (
        <Fragment>
            <Wrapper
                className="p-2 md:p-3 lg:p-4 bg-[#f8c73c] shadow-md contact-header"
                id="contact-header">
                <Wrapper className="flex justify-between items-start md:items-center flex-col md:flex-row gap-2 md:gap-4 lg:gap-6">
                    <Link
                        href="tel:+420603243852"
                        className="flex flex-row items-center gap-2 md:gap-2.5 lg:gap-3 transition-colors duration-300 ease-in-out hover:text-[#a11106]">
                        <DevicePhoneMobileIcon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                        +420 603 243 852
                    </Link>
                    <Link
                    href="tel:+420547211709"
                    className="flex flex-row items-center gap-2 md:gap-2.5 lg:gap-3 transition-colors duration-300 ease-in-out hover:text-[#a11106]">
                        <PhoneIcon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                        +420 547 211 709
                    </Link>
                    <Link
                        href="mailto:info@profimalby.cz"
                        className="flex flex-row items-center gap-2 md:gap-2.5 lg:gap-3 transition-colors duration-300 ease-in-out hover:text-[#a11106]">
                        <EnvelopeIcon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                        info@profimalby.cz
                    </Link>
                    <Wrapper className="w-full md:w-max flex justify-between items-center gap-2 md:gap-4 lg:gap-6">
                        <Wrapper className="flex flex-row items-center gap-2 md:gap-2.5 lg:gap-3">
                            <ClockIcon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                            <p className="text-sm md:text-[15px] lg:text-base">
                                Po-Pá: 07:00 - 20:00, So-Ne: 09:00 - 16:00
                            </p>
                        </Wrapper>
                        <Link
                        href="https://www.facebook.com/profimalby"
                        rel="nofollow"
                        target="_blank">
                        <Image
                        height={20}
                        width={20}
                        src="/Fotky/Ikonky/Facebook.svg"
                        alt="Facebook ikonka"
                        loading="lazy"
                        decoding="async"
                        draggable={false}
                        className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
                        />
                    </Link>
                    </Wrapper>
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default ContactHeader;