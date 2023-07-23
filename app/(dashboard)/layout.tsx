import React from "react";

export default function DashboardPage({
    children,
}: React.ComponentPropsWithoutRef<"main">) {
    return <main className="h-full bg-blue-900">{children}</main>;
}
