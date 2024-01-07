"use client";
import React from "react";
import { BoundedBox } from "@/components/BoundedBox";
import { Gear } from "@phosphor-icons/react";
import { SubscriptionButton } from "@/components/SubscriptionButton";

export const SettingsClient = ({ isPro }: { isPro: boolean }) => {
    return (
        <BoundedBox yPadding="none" className="flex flex-col h-full pt-10">
            <div className="flex items-center gap-3">
                <Gear className="w-12 h-12 text-matteBlack" />
                <p className="font-ysa font-semibold text-24">Settings</p>
            </div>
            <div className="flex flex-col pl-2 mt-2">
                <p className="font-noto text-matteBlack/70 text-14">
                    {isPro
                        ? "You currently are subscribed to a pro plan."
                        : "You are currently on a free plan."}
                </p>
                <SubscriptionButton isPro={isPro} />
            </div>
        </BoundedBox>
    );
};
