"use client";

import {
    useState,
    Fragment,
    useEffect
} from "react";
import {
    AnimatePresence,
    motion
} from "framer-motion";

import Wrapper from "./Wrapper";
import Logo from "./Logo";

const LoadingScreen = () => {
    const [isLoading, SetLoading] = useState<boolean>(true);

    useEffect(() => {
        const loadingTimeout = setTimeout(() => {
            SetLoading(false);
        }, 5000);

        return () => {
            clearTimeout(loadingTimeout);
        };
    }, []);

    return (
        <Fragment>
            <AnimatePresence>
                {
                    isLoading && (
                        <Fragment>
                            <motion.div
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.6 }}
                            className="p-4 md:p-5 lg:p-6 fixed inset-0 flex justify-center items-center gap-2 md:gap-4 lg:gap-6 flex-col h-screen z-9999 bg-[#e7e6e6] shadow-md">
                                <motion.h1
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="text-3xl md:text-4xl lg:text-6xl text-center text-black font-black drop-shadow-xl">
                                    Vítejte v Profi Malby Petra Lejsky
                                </motion.h1>
                                <Logo />
                                <Wrapper className="w-10 h-10 md:w-12 md:h-12 lg:w-15 lg:h-15 border-4 border-[#a11106] border-t-transparent rounded-full animate-spin"></Wrapper>
                            </motion.div>
                        </Fragment>
                    )
                }
            </AnimatePresence>
        </Fragment>
    );
};

export default LoadingScreen;