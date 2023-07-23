import React from "react";

export default function DashboardLayout({
    children,
}: React.ComponentPropsWithoutRef<"main">) {
    return <main className="h-full bg-slate-100">{children}</main>;
}
