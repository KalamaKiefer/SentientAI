import React from "react";

export default function DashboardLayout(props: { children: React.ReactNode }) {
    return <main className="h-full bg-slate-100">{props.children}</main>;
}
