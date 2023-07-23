import "./globals.css";
import type { Metadata } from "next";
import { Ysabeau, Noto_Sans_HK } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import clsx from "clsx";
import Header from "@/components/Header";

const ysabeau = Ysabeau({
    variable: "--font-ysa",
    subsets: ["latin"],
    display: "swap",
    weight: "variable",
    style: ["italic", "normal"],
});

const noto = Noto_Sans_HK({
    variable: "--font-noto",
    display: "swap",
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    style: ["normal"],
});

export const metadata: Metadata = {
    title: "Sentient",
    description: "All purpose AI chatbot.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={clsx(ysabeau.variable, noto.variable)}>
                    <Header />
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
