"use client";

import Image from "next/image";
import Link from "next/link";
import { UserButton, useAuth } from "@clerk/nextjs";
import mobileLogo from "../public/assets/mobileLogo.png";
import clsx from "clsx";
import { xPaddingSizes, yPaddingSizes } from "./BoundedBox";
import { ChartBar, ChartLine } from "@phosphor-icons/react";

export const LandingNav = () => {
    const { isSignedIn } = useAuth();
    return (
        <div
            className={clsx(
                "flex justify-between items-center py-5",
                xPaddingSizes.base
            )}
        >
            <a href="#" className="-m-1.5 p-1.5 flex items-center">
                <span className="sr-only">SentientAI</span>
                <Image
                    src={mobileLogo}
                    alt=""
                    className="object-cover w-6 md:w-8 xl:w-10"
                    priority
                />
                <p className="font-noto text-20 md:text-24 xl:text-30 text-creme ml-2 font-bold">
                    SentientAI
                </p>
            </a>

            {isSignedIn ? (
                <div className="flex items-center gap-x-5">
                    <UserButton
                        afterSignOutUrl="/"
                        appearance={{
                            elements: {
                                userButtonAvatarImage: "w-full h-full",
                                userButtonAvatarBox:
                                    "w-[40px] lg:w-[45px] h-auto",
                            },
                        }}
                    />

                    <Link href="/dashboard">
                        <ChartLine className="w-11 h-11 text-creme" />
                    </Link>
                </div>
            ) : (
                <Link href="/sign-up" className="hidden md:block">
                    <button className="border border-creme text-creme hover:bg-creme hover:text-matteBlack duration-200 ease-in-out py-1.5 px-7 text-18 rounded-xl font-ysa">
                        Get Started
                    </button>
                </Link>
            )}
        </div>
    );
};
