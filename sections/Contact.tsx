"use client";

import {
    Fragment
} from "react";
import {
    useRouter
} from "next/navigation";
import {
    PaperAirplaneIcon
} from "@heroicons/react/24/solid";
import {
    useForm
} from "react-hook-form";
import {
    zodResolver
} from "@hookform/resolvers/zod";
import {
    ContactFormSchema,
    ContactFormProps
} from "@/app/lib/validation";
import Link from "next/link";

import Wrapper from "../components/Wrapper";
import PageLabel from "../components/pageLabel";

const Contact = () => {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: {
            errors,
            isSubmitting
        },
        reset
    } = useForm<ContactFormProps>({
        resolver: zodResolver(ContactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: ""
        }
    });

    const handleForm = async (contactFormCredentials: ContactFormProps) => {
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(contactFormCredentials)
            });

            if (!res.ok) {
                const errorCredentials = await res.json();
                console.error("Chyba při odesílání zprávy:", errorCredentials);
                
                return;
            };

            router.replace("/dekujeme");
            reset();
        } catch (catchError) {
            console.error("Chyba při odesílání zprávy:", catchError);
        };
    };

    return (
        <Fragment>
            <Wrapper
            className="px-5 py-8 md:px-8 md:py-12 lg:px-10 lg:py-14 bg-[#ffd24d]/92 shadow-md section"
            id="kontakt">
                <PageLabel pageLabelText="Nezávazná poptávka" />
                <Wrapper className="flex justify-center items-center flex-col gap-2 md:gap-3 lg:gap-4">
                    <h2 className="text-3xl md:text-4xl lg:text-[40px] text-center font-extrabold max-w-7xl">
                        Jsme tu pro vás
                    </h2>
                    <p className="text-[15px] md:text-base lg:text-lg font-medium md:max-w-3xl">
                        Napište nám nebo zavolejte. Rádi zodpovíme vaše dotazy a domluvíme detaily zakázky.
                    </p>
                </Wrapper>
                <Wrapper className="mt-4 md:mt-6 lg:mt-8 flex justify-evenly md:items-center flex-col md:flex-row gap-6 md:gap-8 lg:gap-10">
                    <form
                    onSubmit={handleSubmit(handleForm)}
                    className="p-4 md:p-5 lg:p-6 bg-[#1e1e1e] rounded-3xl w-full md:max-w-250">
                        <Wrapper className="flex justify-center items-center flex-col gap-2 md:gap-3 lg:gap-4 text-center">
                            <h3 className="text-xl md:text-[22px] lg:text-2xl text-white">
                                Pošlete nám poptávku
                            </h3>
                            <p className="text-[15px] md:text-base lg:text-lg text-white">
                                Ozveme se co nejdříve a domluvíme další postup.
                            </p>
                        </Wrapper>
                        <Wrapper className="mt-4 md:mt-6 lg:mt-8 flex justify-center flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 text-black">
                            <Wrapper className="flex flex-col gap-2 md:gap-3 lg:gap-4 w-full">
                                <Wrapper className="flex flex-col gap-2 md:gap-3 lg:gap-4 w-full form-group">
                                    <label
                                    htmlFor="name"
                                    className="text-white cursor-pointer">
                                        Vaše jméno
                                    </label>
                                    <input
                                    {...register("name")}
                                    type="text"
                                    name="name"
                                    placeholder="Josef Novák"
                                    spellCheck={false}
                                    autoComplete="name"
                                    aria-label="Jméno"
                                    aria-required={true}
                                    aria-invalid={!!true}
                                    className="p-4 md:p-5 lg:p-6 bg-white text-black w-full rounded-md focus:outline-none"
                                    id="name"
                                    />
                                    {
                                        errors.name && (
                                            <Fragment>
                                                <p className="text-sm text-red-400">
                                                    {errors.name.message}
                                                </p>
                                            </Fragment>
                                        )
                                    }
                                </Wrapper>
                                <Wrapper className="flex flex-col gap-2 md:gap-3 lg:gap-4 w-full form-group">
                                    <label
                                    htmlFor="email"
                                    className="text-white cursor-pointer">
                                        Váš email
                                    </label>
                                    <input
                                    {...register("email")}
                                    type="email"
                                    name="email"
                                    placeholder="josef@novak.cz"
                                    spellCheck={false}
                                    autoComplete="email"
                                    aria-label="Email"
                                    aria-required={true}
                                    aria-invalid={!!true}
                                    className="p-4 md:p-5 lg:p-6 bg-white text-black w-full rounded-md focus:outline-none"
                                    id="email"
                                    />
                                </Wrapper>
                                <Wrapper className="flex flex-col gap-2 md:gap-3 lg:gap-4 w-full form-group">
                                    <label
                                    htmlFor="phone"
                                    className="text-white cursor-pointer">
                                        Vaše telefonní číslo
                                    </label>
                                    <input
                                    {...register("phone")}
                                    type="tel"
                                    name="phone"
                                    // XXX XXX XXX
                                    placeholder="+420 601 123 456"
                                    spellCheck={false}
                                    autoComplete="phone"
                                    aria-label="Telefonní číslo"
                                    aria-required={true}
                                    aria-invalid={!!true}
                                    className="p-4 md:p-5 lg:p-6 bg-white text-black w-full rounded-md focus:outline-none"
                                    id="phone"
                                    />
                                </Wrapper>
                            </Wrapper>
                            <Wrapper className="flex flex-col gap-2 md:gap-3 lg:gap-4 w-full form-group">
                                <label
                                htmlFor="message"
                                className="text-white cursor-pointer">
                                    Vaše zpráva
                                </label>
                                <textarea
                                {...register("message")}
                                name="message"
                                spellCheck={false}
                                placeholder="Zpráva co mi chcete sdělit."
                                aria-label="Zpráva"
                                aria-required={true}
                                aria-invalid={!!true}
                                className="p-4 md:p-5 lg:p-6 bg-white text-black rounded-md focus:outline-none resize-none w-full md:max-w-120 min-h-50 h-full"
                                id="message"></textarea>
                                <p className="text-sm text-gray-500 text-center">
                                    Odesláním formuláře souhlasíte se zpracováním osobních údajů dle zásad ochrany osobních údajů.
                                    {" "}
                                    <Link
                                    href="/gdpr"
                                    className="text-[#a11106]">
                                        Přečíst ochranu o osobních údajů.
                                    </Link>
                                </p>
                                {
                                    errors.message && (
                                        <Fragment>
                                            <p className="text-sm text-red-400">
                                                {errors.message.message}
                                            </p>
                                        </Fragment>
                                    )
                                }
                            </Wrapper>
                        </Wrapper>
                        <button
                        type="submit"
                        disabled={isSubmitting}
                        className="mt-4 md:mt-6 lg:mt-8 p-4 md:p-5 lg:p-6 flex justify-center items-center gap-2 md:gap-3 lg:gap-4 bg-white text-black text-center w-full rounded-2xl cursor-pointer">
                            Zaslat zprávu
                            <PaperAirplaneIcon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 cursor-pointer" />
                        </button>
                    </form>
                    {/* <ContactInfo /> */}
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default Contact;