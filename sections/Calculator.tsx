"use client";

import {
    useState,
    useEffect,
    Fragment
} from "react";
import {
    DevicePhoneMobileIcon
} from "@heroicons/react/24/solid";
import clsx from "clsx";

import Wrapper from "../components/Wrapper";
import PageLabel from "../components/pageLabel";
import Tabs from "../components/Tabs";
import NoProofLink from "../components/NoProofLink";
import setLinkWithoutHash from "../functions/setLinkWithoutHash";
import Loader from "../components/Loader";

const BASE_PRICE_PER_M2 = 180;

const REAL_ESTATE_COEF = [1, 1.15, 1.3]; // Byt, Dům, Komerce
const COLOR_COEF = [1, 1.2, 1.35]; // Bílá, Částečně, Barevná
const WASHABILITY_COEF = [1, 1.15, 1.3]; // Otěr, Za mokra, Omyvatelná
const STATUS_COEF = [1.4, 1.25, 1.1, 1]; // Před rek., Špatný, Dobrý, Nový

const Calculator = () => {
    const [realEstateType, setRealEstateType] = useState<number | null>(null);
    const [realEstateTypeString, setRealEstateTypeString] = useState<string | null>(null);
    const [areaValue, setAreaValue] = useState<string>("")
    const [colorVariant, setColorVariant] = useState<number | null>(null);
    const [colorVariantString, setColorVariantString] = useState<string | null>(null);
    const [washAbility, setWashAbility] = useState<number | null>(null);
    const [washAbilityString, setWashAbilityString] = useState<string | null>(null);
    const [realEstateStatus, setrealEstateStatus] = useState<number | null>(null);
    const [realEstateStatusString, setrealEstateStatusString] = useState<string | null>(null);
    const [isCalculateButtonClicked, setCalculateButtonClicked] = useState<boolean>(false);
    const [showResult, setShowResult] = useState(false);

    useEffect(() => {
        setShowResult(false);
    }, [
        realEstateType,
        areaValue,
        colorVariant,
        washAbility,
        realEstateStatus
    ]);

    useEffect(() => {
        const loaderTimeout = setTimeout(() => {
            setCalculateButtonClicked(false);
            setShowResult(true);
        }, 2500);

        return () => {
            clearTimeout(loaderTimeout);
        };
    }, []);

    const handleCalculate = () => {
        setCalculateButtonClicked(true);
        setShowResult(false);

        setTimeout(() => {
            setCalculateButtonClicked(false);
            setShowResult(true);
        }, 1000);
    };

    const calculatePrice = () => {
    if (
      realEstateType === null ||
      colorVariant === null ||
      washAbility === null ||
      realEstateStatus === null ||
      !areaValue
    ) {
      return null;
    }

    const area = Number(areaValue);

    const price =
      area *
      BASE_PRICE_PER_M2 *
      REAL_ESTATE_COEF[realEstateType] *
      COLOR_COEF[colorVariant] *
      WASHABILITY_COEF[washAbility] *
      STATUS_COEF[realEstateStatus];

    return {
      min: Math.round(price * 0.9),
      max: Math.round(price * 1.1)
    };
  };

  const isDisabled =
    realEstateType === null ||
    !areaValue ||
    colorVariant === null ||
    washAbility === null ||
    realEstateStatus === null;

  const result = calculatePrice();

    return (
        <Fragment>
            <Wrapper
            className="px-5 py-8 md:px-8 md:py-12 lg:px-10 lg:py-14 border-t border-gray-300 bg-[#e7e6e6] shadow-md section"
            id="kalkulace">
                <PageLabel pageLabelText="Nezávazná kalkulace" />
                <Wrapper className="flex justify-center items-center flex-col gap-2 md:gap-3 lg:gap-4">
                    <h2 className="text-3xl md:text-4xl lg:text-[40px] text-center font-extrabold max-w-7xl">
                        Rychlá a zdarma cenová nabídka
                    </h2>
                    <p className="text-[15px] md:text-base lg:text-lg font-medium md:max-w-3xl">
                        Bez závazků a starostí - my se postaráme o vše od návrhu po realizaci.
                    </p>
                </Wrapper>
                <Wrapper className="flex justify-center items-center flex-col">
                    <Wrapper className="mt-4 md:mt-6 lg:mt-8 p-4 md:p-6 lg:p-8 bg-white shadow-md rounded-md w-full md:w-1/2">
                        <Wrapper className="flex gap-4 md:gap-6 lg:gap-8 flex-col">
                            <Wrapper className="flex gap-2 md:gap-2.5 lg:gap-3 flex-col">
                                <h3 className="text-2xl md:text-3xl font-bold">
                                    Typ nemovitosti
                                </h3>
                                <Tabs
                                tabs={["Byt", "Dům", "Komerční prostor"]}
                                activeIndex={realEstateType}
                                setActiveIndex={setRealEstateType}
                                setActiveTabString={setRealEstateTypeString}
                                />
                            </Wrapper>
                            <Wrapper className="flex gap-2 md:gap-2.5 lg:gap-3 flex-col">
                                <h3 className="text-2xl md:text-3xl font-bold">
                                    Podlahová plocha (m²)
                                </h3>
                                <input
                                type="number"
                                value={areaValue}
                                step={1}
                                aria-invalid={false}
                                aria-required={false}
                                className="p-2 md:p-3 lg:p-4 bg-[#e7e6e6] rounded-md focus:outline-none"
                                onChange={(e) => {
                                    setAreaValue(e.target.value);
                                }}
                                />
                            </Wrapper>
                            <Wrapper className="flex gap-2 md:gap-2.5 lg:gap-3 flex-col">
                                <h3 className="text-2xl md:text-3xl font-bold">
                                    Varianta barvy
                                </h3>
                                <Tabs
                                tabs={["Bílá", "Částečně barevná", "Barevná"]}
                                activeIndex={colorVariant}
                                setActiveIndex={setColorVariant}
                                setActiveTabString={setColorVariantString}
                                />
                            </Wrapper>
                            <Wrapper className="flex gap-2 md:gap-2.5 lg:gap-3 flex-col">
                                <h3 className="text-2xl md:text-3xl font-bold">
                                    Typ omyvatelnosti
                                </h3>
                                <Tabs
                                tabs={["Otěruvzdorná", "Za mokra otěruvzdorná", "Omyvatelná"]}
                                activeIndex={washAbility}
                                setActiveIndex={setWashAbility}
                                setActiveTabString={setWashAbilityString}
                                />
                            </Wrapper>
                            <Wrapper className="flex gap-2 md:gap-2.5 lg:gap-3 flex-col">
                                <h3 className="text-2xl md:text-3xl font-bold">
                                    Stav nemovitosti
                                </h3>
                                <Tabs
                                tabs={["Před rekonstrukcí", "Špatný", "Dobrý", "Nový"]}
                                activeIndex={realEstateStatus}
                                setActiveIndex={setrealEstateStatus}
                                setActiveTabString={setrealEstateStatusString}
                                />
                            </Wrapper>
                            <button
                            disabled={isDisabled}
                            onClick={(e) => {
                                handleCalculate();
                            }}
                            className={clsx(
                            "mt-4 md:mt-6 lg:mt-8 p-4 md:p-5 lg:p-6 flex justify-center items-center gap-4 md:gap-6 lg:gap-8 rounded-md text-white font-bold transition-opacity duration-300 ease-in-out",
                            isDisabled
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-[#1e1e1e] cursor-pointer hover:opacity-90"
                            )}>
                                {
                                    isCalculateButtonClicked && (
                                        <Fragment>
                                            <Loader
                                            className="border-white"
                                            width="w-6"
                                            height="h-6"
                                            mediumWidth="w-8"
                                            mediumHeight="h-8"
                                            largeWidth="w-10"
                                            largeHeight="h-10"
                                            />
                                        </Fragment>
                                    )
                                }
                                Spočítat
                            </button>
                        </Wrapper>
                        {
                        showResult && result && (
                            <Wrapper className="mt-4 md:mt-6 lg:mt-8 p-4 md:p-6 lg:p-8 border-t border-gray-300 rounded-md">
                                <h3 className="mb-2 md:mb-4 lg:mb-6 text-xl md:text-[22px] lg:text-2xl font-bold">
                                Orientační cena
                                </h3>
                                <p className="text-3xl font-extrabold">
                                {result.min.toLocaleString()} - {" "}
                                {result.max.toLocaleString()} Kč
                                </p>
                                <Wrapper className="mt-2 md:mt-4 lg:mt-6 flex flex-col gap-2">
                                    <p className="text-[15px] md:text-base lg:text-lg font-medium">
                                        Typ nemovitosti: {realEstateTypeString}
                                    </p>
                                    <p className="text-[15px] md:text-base lg:text-lg font-medium">
                                        Podlahová plocha: {areaValue} m²
                                    </p>
                                    <p className="text-[15px] md:text-base lg:text-lg font-medium">
                                        Varianta barvy: {colorVariantString}
                                    </p>
                                    <p className="text-[15px] md:text-base lg:text-lg font-medium">
                                        Typ omyvatelnosti: {washAbilityString}
                                    </p>
                                    <p className="text-[15px] md:text-base lg:text-lg font-medium">
                                        Stav nemovitosti: {realEstateStatusString}
                                    </p>
                                    <p className="text-sm text-gray-600 mt-2">
                                        Cena je orientační a může se lišit dle skutečného stavu.
                                    </p>
                                </Wrapper>
                                <NoProofLink
                                href="kontakt"
                                onClick={(e) => {
                                    setLinkWithoutHash(e, "kontakt");
                                }}
                                className={clsx(
                                "mt-4 md:mt-6 lg:mt-8 p-4 md:p-5 lg:p-6 flex justify-center items-center gap-2 md:gap-3 lg:gap-4 rounded-md text-white text-center font-bold w-full transition-opacity duration-300 ease-in-out",
                                isDisabled
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-[#1e1e1e] cursor-pointer hover:opacity-90"
                                )}>
                                    <DevicePhoneMobileIcon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                                    Získat podrobnější nabídku
                                </NoProofLink>
                            </Wrapper>
                        )
                        }
                    </Wrapper>
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default Calculator;