"use client";

import { Lightning } from "@phosphor-icons/react";
import axios from "axios";
import React from "react";

interface SubscriptionButtonProps {
    isPro: boolean;
}

export const SubscriptionButton = ({
    isPro = false,
}: SubscriptionButtonProps) => {
    const [loading, setLoading] = React.useState(false);

    const handleClick = async () => {
        try {
            setLoading(true);
            const response = await axios.get("/api/stripe");

            window.location.href = response.data.url;
        } catch (error: any) {
            console.log("BILLING_ERROR", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <button
            className="flex items-center w-fit border border-black py-2 px-6 rounded hover:bg-matteBlack hover:text-creme transition ease-in-out duration-300 mt-4 ring-0 justify-center"
            onClick={handleClick}
            disabled={loading}
        >
            <span>{isPro ? "Manage Subscription" : "Upgrade"}</span>
            {!isPro && <Lightning className="w-6" />}
        </button>
    );
};
