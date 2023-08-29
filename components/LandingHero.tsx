"use client";

import Typewriter from "typewriter-effect";
import { BoundedBox } from "./BoundedBox";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

export const LandingHero = () => {
    const { isSignedIn } = useAuth();

    return (
        <BoundedBox className="text-center space-y-5">
            <h1 className="text-4xl sm:text-5xl md:text-62 lg:text-70 text-creme font-bold font-noto leading-tight tracking-[1px] max-w-[270px] sm:max-w-none mx-auto">
                The All In One AI Tool
            </h1>
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-sky-700 text-4xl sm:text-5xl md:text-62 lg:text-70 text-creme font-bold font-ysa">
                <Typewriter
                    options={{
                        strings: [
                            "Chatbot.",
                            "Image Generation.",
                            "Video Generation.",
                            "Music Generation.",
                        ],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>
            <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
                <button className="mt-5 text-20 px-6 py-1.5 bg-gradient-to-r from-pink-500 via-purple-400 to-sky-700 rounded font-ysa font-bold  text-creme brightness-50 hover:brightness-100 duration-300 ease-in-out">
                    Start for Free
                </button>
            </Link>
        </BoundedBox>
    );
};
