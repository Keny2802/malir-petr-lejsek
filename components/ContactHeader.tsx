import {
    Fragment
} from "react";
import {
    DevicePhoneMobileIcon,
    EnvelopeIcon,
    ClockIcon
} from "@heroicons/react/24/solid";
import Link from "next/link";

import Wrapper from "./Wrapper";

const ContactHeader = () => {
    return (
        <Fragment>
            <Wrapper
            className="p-2 md:p-3 lg:p-4 hidden md:block bg-white shadow-md contact-header"
            id="contact-header">
                <Wrapper className="flex justify-between items-center gap-2 md:gap-4 lg:gap-6">
                    <Link
                    href="tel:+420603243852"
                    className="flex items-center gap-2 md:gap-2.5 lg:gap-3">
                        <DevicePhoneMobileIcon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                        +420 603 243 852
                    </Link>
                    <Link
                    href="mailto:info@profimalby.cz"
                    className="flex items-center gap-2 md:gap-2.5 lg:gap-3">
                        <EnvelopeIcon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                        info@profimalby.cz
                    </Link>
                    <Wrapper className="flex items-center gap-2 md:gap-2.5 lg:gap-3">
                        <ClockIcon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                        <p className="text-sm md:text-[15px] lg:text-base">
                            Po-Pá: 07:00 - 20:00
                        </p>
                    </Wrapper>
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default ContactHeader;