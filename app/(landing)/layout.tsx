import React from "react";

export default function LandingPageLayout({
    children,
}: React.ComponentPropsWithoutRef<"main">) {
    return <main className="h-full bg-slate-200">{children}</main>;
}
