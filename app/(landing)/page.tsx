import Link from "next/link";
import React from "react";

export default function LandingPage() {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="font-noto text-35">SentientAI</h1>
            <p className="mt-2 font-ysa text-20">Landing Page</p>
            <Link href="/sign-up" className="mt-10">
                <button className="rounded-xl px-6 py-1.5 border border-purple-500 hover:bg-purple-500 hover:text-white transition ease-in-out duration-300 hover:border-black">
                    Sign Up
                </button>
            </Link>
        </div>
    );
}
