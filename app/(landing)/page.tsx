import { LandingHero } from "@/components/LandingHero";
import { LandingNav } from "@/components/LandingNav";
import LandingPromotion from "@/components/LandingPromotion";
import { PricingInfo } from "@/components/PricingInfo";
import React from "react";

export default function LandingPage() {
    return (
        <div className="h-full">
            <LandingNav />
            <LandingHero />
            <LandingPromotion />
            <PricingInfo />
        </div>
    );
}
