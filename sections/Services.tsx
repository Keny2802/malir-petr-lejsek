import {
    Fragment
} from "react";
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
                <Wrapper className="mt-4 md:mt-6 lg:mt-8 flex justify-evenly items-center flex-col md:flex-row gap-6 md:gap-8 lg:gap-10">
                    <Wrapper className="rounded-md">
                        <Image
                        width={500}
                        height={500}
                        src="/Fotky/Work (1).jpg"
                        alt="Fotka služby malířské práce"
                        loading="lazy"
                        decoding="async"
                        draggable={false}
                        className="rounded-md"
                        />
                        <Wrapper className="mt-4 md:mt-5 lg:mt-6 flex flex-col gap-2 md:gap-3 lg:gap-4">
                            <h3 className="text-[25px] md:text-3xl lg:text-[35px] font-semibold">
                                Malířské práce
                            </h3>
                            <p className="text-sm md:text-[15px] lg:text-base max-w-125">
                                Každý interiér si občas zaslouží nový nátěr. Ať už chcete osvěžit zašedlé stěny, odstranit stopy po nábytku nebo dodat místnosti úplně nový styl, postaráme se o kvalitní výsledek.
                            </p>
                            <Link
                            href="/sluzby/malirske-prace"
                            className="p-4 md:p-5 lg:p-6 bg-[#1e1e1e] text-white text-center w-full rounded-md">
                                Prohlédnout službu
                            </Link>
                        </Wrapper>
                    </Wrapper>
                    <Wrapper className="rounded-md">
                        <Image
                        width={500}
                        height={500}
                        src="/Fotky/Work (2).jpg"
                        alt="Fotka služby malování na klíč"
                        loading="lazy"
                        decoding="async"
                        draggable={false}
                        className="rounded-md"
                        />
                        <Wrapper className="mt-4 md:mt-5 lg:mt-6 flex flex-col gap-2 md:gap-3 lg:gap-4">
                            <h3 className="text-[25px] md:text-3xl lg:text-[35px] font-semibold">
                                Malování na klíč
                            </h3>
                            <p className="text-sm md:text-[15px] lg:text-base max-w-125">
                                Malování interiérů na klíč je ideální pro vytížené zákazníky, kteří chtějí mít vše v klidu. Postaráme se o celý proces - od přípravy místnosti až po finální úklid - a vy si jen užíváte nový vzhled svého domova bez starostí.
                            </p>
                            <Link
                            href="/sluzby/malovani-na-klic"
                            className="p-4 md:p-5 lg:p-6 bg-[#1e1e1e] text-white text-center w-full rounded-md">
                                Prohlédnout službu
                            </Link>
                        </Wrapper>
                    </Wrapper>
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default Services;