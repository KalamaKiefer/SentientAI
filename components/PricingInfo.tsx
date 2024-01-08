"use client";

import { Check } from "@phosphor-icons/react";
import clsx from "clsx";

const tiers = [
    {
        name: "Free Tier",
        id: "tier-free",
        href: "/sign-up",
        priceMonthly: "$0",
        description:
            "Unleash the power of AI with 5 complimentary transactions.",
        features: ["5 free tokens"],
        mostPopular: false,
    },
    {
        name: "Adventurer",
        id: "tier-adventurer",
        href: "/sign-up",
        priceMonthly: "$5",
        description: "Elevate Your Experience – 10 Bonus Coins Monthly",
        features: ["10 bonus tokens monthly."],
        mostPopular: true,
    },
    {
        name: "Astronaut",
        id: "tier-astronaut",
        href: "/sign-up",
        priceMonthly: "$15",
        description: "Unlimited Inspiration – Endless Tokens Monthly",
        features: ["Unlimited tokens every month."],
        mostPopular: false,
    },
];

export const PricingInfo = () => {
    return (
        <div className="bg-matteBlack py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-base font-ysa font-semibold leading-7 text-white">
                        Pricing
                    </h2>
                    <p className="mt-2 text-4xl font-noto text-creme font-bold tracking-tight sm:text-5xl">
                        Discover Your Perfect Plan
                    </p>
                </div>
                <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300 font-noto">
                    Sentient AI&apos;s pricing plans offer flexibility for every
                    user. Choose from our free tier with 5 transactions, the $5
                    tier with 10 bonus coins, or the $15 tier for unlimited
                    monthly tokens – ensuring innovation at your pace.
                </p>
                <div className="isolate mx-auto mt-16 grid max-w-md gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {tiers.map((tier, tierIdx) => (
                        <div
                            key={tier.id}
                            className={clsx(
                                tier.mostPopular
                                    ? "lg:z-10 lg:rounded-b-none"
                                    : "lg:mt-8",
                                tierIdx === 0 ? "lg:rounded-r-none" : "",
                                tierIdx === tiers.length - 1
                                    ? "lg:rounded-l-none"
                                    : "",
                                "flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10"
                            )}
                        >
                            <div>
                                <div className="flex items-center justify-between gap-x-4">
                                    <h3
                                        id={tier.id}
                                        className={
                                            "text-18 font-semibold leading-8 text-matteBlack font-ysa"
                                        }
                                    >
                                        {tier.name}
                                    </h3>
                                    {tier.mostPopular ? (
                                        <p className="rounded-full bg-matteBlack/70 px-2.5 py-1.5 text-xs font-semibold leading-5 text-creme font-noto">
                                            Most popular
                                        </p>
                                    ) : null}
                                </div>
                                <p className="mt-4 text-16 leading-6 text-gray-600 font-noto">
                                    {tier.description}
                                </p>
                                <p className="mt-6 flex items-baseline gap-x-1">
                                    <span className="text-4xl font-bold font-noto tracking-tight text-matteBlack">
                                        {tier.priceMonthly}
                                    </span>
                                    <span className="text-15 font-semibold leading-6 font-ysa text-gray-600">
                                        /month
                                    </span>
                                </p>
                                <ul
                                    role="list"
                                    className="mt-8 space-y-3 text-sm leading-6 text-matteBlack"
                                >
                                    {tier.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="flex gap-x-3"
                                        >
                                            <Check
                                                className="h-6 w-5 flex-none text-matteBlack"
                                                aria-hidden="true"
                                            />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <a
                                href={tier.href}
                                aria-describedby={tier.id}
                                className={clsx(
                                    tier.mostPopular
                                        ? "bg-matteBlack text-creme shadow-sm hover:bg-creme hover:text-matteBlack hover:ring-offset-matteBlack"
                                        : "text-matteBlack ring-1 ring-inset ring-matteBlack/20 hover:ring-matteBlack/30",
                                    "mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-matteBlack transition duration-200 ease-in-out"
                                )}
                            >
                                Buy plan
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
