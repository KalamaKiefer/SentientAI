import { BoundedBox } from "@/components/BoundedBox";
import { QuickLinks } from "@/components/QuickLinks";

import React from "react";

export default function DashboardPage() {
    return (
        <BoundedBox className="!max-w-2xl">
            <QuickLinks />
        </BoundedBox>
    );
}
