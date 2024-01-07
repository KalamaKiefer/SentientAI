import { validateSubscription } from "@/lib/subscription";
import React from "react";
import { SettingsClient } from "./SettingsClient";

export default async function SettingsPage() {
    const isPro = await validateSubscription();

    return <SettingsClient isPro={isPro} />;
}
