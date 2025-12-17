import {
    Fragment
} from "react";
import {
    servicesSet
} from "../sets/servicesSet";
import Image from "next/image";
import Link from "next/link";

import Wrapper from "../components/Wrapper";

const Services = () => {
    return (
        <Fragment>
            <Wrapper
            className="px-5 py-8 md:px-8 md:py-12 lg:px-10 lg:py-14 border-t border-gray-300 bg-[#e7e6e6] shadow-md"
            id="sluzby">
                <Wrapper className="flex justify-center items-center flex-col gap-2 md:gap-3 lg:gap-4">
                    <h2 className="text-3xl md:text-4xl lg:text-[40px] text-center font-extrabold max-w-7xl">
                        Co pro vás uděláme
                    </h2>
                    <p className="text-[15px] md:text-base lg:text-lg font-medium md:max-w-3xl">
                        Moderní malování s precizním přístupem a dlouhou životností.
                    </p>
                </Wrapper>
                <Wrapper className="mt-4 md:mt-6 lg:mt-8 flex justify-evenly items-center flex-col md:flex-row flex-wrap gap-4 md:gap-5 lg:gap-6">
                    {
                        servicesSet.map((service, serviceIndex) => (
                            <Fragment key={serviceIndex}>
                                <Wrapper className="rounded-md">
                                    <Image
                                    width={500}
                                    height={500}
                                    src={service.serviceImage}
                                    alt={`Fotka služby ${service.serviceHeading.toLocaleLowerCase()}`}
                                    loading="lazy"
                                    decoding="async"
                                    draggable={false}
                                    className="rounded-md"
                                    />
                                    <Wrapper className="mt-4 md:mt-5 lg:mt-6 flex flex-col gap-2 md:gap-3 lg:gap-4">
                                        <h3 className="text-[25px] md:text-3xl lg:text-[35px] font-semibold">
                                            {service.serviceHeading}
                                        </h3>
                                        <p className="text-sm md:text-[15px] lg:text-base max-w-125">
                                            {service.serviceDescription}
                                        </p>
                                        <Link
                                        href={service.serviceHref}
                                        className="p-4 md:p-5 lg:p-6 bg-[#1e1e1e] text-white text-center w-full rounded-md">
                                            Prohlédnout službu
                                        </Link>
                                    </Wrapper>
                                </Wrapper>
                            </Fragment>
                        ))
                    }
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default Services;