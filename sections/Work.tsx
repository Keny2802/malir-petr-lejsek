"use client";

import {
    Fragment
} from "react";
import {
    workSet
} from "../sets/workSet";
import Image from "next/image";
import Link from "next/link";

import Wrapper from "../components/Wrapper";
import PageLabel from "../components/pageLabel";

const Work = () => {
    return (
        <Fragment>
            <Wrapper
            className="px-5 py-8 md:px-8 md:py-12 lg:px-10 lg:py-14 border-t border-gray-300 bg-[#f8c73c]/92 shadow-md section"
            id="zakazky">
                <PageLabel pageLabelText="Zakázky" />
                <Wrapper className="flex justify-center items-center flex-col gap-2 md:gap-3 lg:gap-4">
                    <h2 className="text-3xl md:text-4xl lg:text-[40px] text-center font-extrabold max-w-7xl">
                        Naše práce a spokojenost klientů mluví za nás
                    </h2>
                    <p className="text-[15px] md:text-base lg:text-lg font-medium md:max-w-3xl">
                        Podívejte se na zakázky prací, které máme již za sebou.
                    </p>
                </Wrapper>
                <Wrapper className="mt-4 md:mt-6 lg:mt-8 flex justify-center items-center flex-col md:flex-row flex-wrap gap-2.5 md:gap-4 lg:gap-6">
                    {
                        workSet.map((workItem, workItemIndex) => {
                            return (
                                <Fragment key={workItemIndex}>
                                    <Wrapper className="p-4 md:p-5 lg:p-6 bg-white shadow-lg rounded-2xl flex flex-col gap-2.5 md:gap-3 lg:gap-4 w-full md:max-w-112.5">
                                        <Wrapper className="flex justify-between items-center gap-4 md:gap-5 lg:gap-6">
                                            <h3 className="text-2xl md:text-[25px] lg:text-[28px] font-bold uppercase">
                                                {workItem.workHeading}
                                            </h3>
                                            {/* <span className="text-3xl md:text-4xl lg:text-5xl font-black">
                                                0{workItemIndex + 1}
                                            </span> */}
                                        </Wrapper>
                                        <Image
                                        height={450}
                                        width={450}
                                        src={workItem.workImage}
                                        alt={`Fotka realizace - ${workItem.workHeading}`}
                                        loading="lazy"
                                        decoding="async"
                                        draggable={false}
                                        className="mt-4 md:mt-6 lg:mt-8 w-full md:max-w-112.5 rounded-2xl"
                                        />
                                        <p className="text-[15px] md:text-base lg:text-lg md:max-w-112.5">
                                            {workItem.workDescription}
                                        </p>
                                    </Wrapper>
                                </Fragment>
                            );
                        })
                    }
                    <Link
                    href="/zakazky"
                    className="p-4 md:p-5 lg:p-6 mt-4 md:mt-5 lg:mt-6 bg-white text-black text-center w-full md:w-75 rounded-md">
                        Prohlédnout všechny zakázky
                    </Link>
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default Work;