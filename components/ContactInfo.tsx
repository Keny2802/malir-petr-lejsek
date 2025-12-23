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

const ContactInfo = () => {
    return (
        <Fragment>
            <Wrapper>
                <Wrapper className="flex flex-col gap-2 md:gap-3 lg:gap-4">
                    <h3 className="text-xl md:text-[22px] lg:text-2xl font-semibold">
                        Kontaktujte nás
                    </h3>
                    <p className="text-[15px] md:text-base lg:text-lg font-medium">
                        Petr Lejska
                    </p>
                </Wrapper>
                <Wrapper className="mt-4 md:mt-6 lg:mt-8 flex flex-col gap-2 md:gap-3 lg:gap-4">
                    <Link
                    href="mailto:info@profimalby.cz"
                    target="_blank"
                    className="flex items-center gap-2 transition-colors duration-300 ease-in-out hover:text-[#a11106]">
                        <MapIcon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 cursor-pointer transition-colors duration-300 ease-in-out hover:text-[#a11106]" />
                        Kroupova 180/56, Brno - Starý Lískovec, 625 00
                    </Link>
                    <Link
                    href="mailto:info@profimalby.cz"
                    className="flex items-center gap-2 transition-colors duration-300 ease-in-out hover:text-[#a11106]">
                        <EnvelopeIcon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 cursor-pointer transition-colors duration-300 ease-in-out hover:text-[#a11106]" />
                        info@profimalby.cz
                    </Link>
                    <Link
                    href="tel:+420603243852"
                    className="flex items-center gap-2 transition-colors duration-300 ease-in-out hover:text-[#a11106]">
                        <DevicePhoneMobileIcon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 cursor-pointer transition-colors duration-300 ease-in-out hover:text-[#a11106]" />
                        +420 603 243 852
                    </Link>
                    <Link
                    href="tel:+420547211709"
                    className="flex items-center gap-2 transition-colors duration-300 ease-in-out hover:text-[#a11106]">
                        <PhoneIcon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 cursor-pointer transition-colors duration-300 ease-in-out hover:text-[#a11106]" />
                        +420 547 211 709
                    </Link>
                    <Wrapper className="flex items-center gap-2 font-medium">
                        <p className="text-[15px] md:text-base lg:textlg">
                            IČO
                        </p>
                        <p className="text-[15px] md:text-base lg:textlg">
                            68 01 36 63
                        </p>
                    </Wrapper>
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default ContactInfo;