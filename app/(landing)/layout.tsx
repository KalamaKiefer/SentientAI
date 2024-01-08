import React from "react";

export default function LandingPageLayout(props: {
    children: React.ReactNode;
}) {
    return <main className="h-full bg-matteBlack">{props.children}</main>;
}
