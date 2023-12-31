import "./globals.css";
import type { Metadata } from "next";
import { Ysabeau, Noto_Sans_HK } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import clsx from "clsx";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getApiLimitCount } from "@/lib/api-limit";
import { ModalProvider } from "@/components/ModalProvider";
import { validateSubscription } from "@/lib/subscription";
import { ToasterProvider } from "@/components/ToasterProvider";

const ysabeau = Ysabeau({
    variable: "--font-ysa",
    subsets: ["latin"],
    display: "swap",
    weight: "variable",
    style: ["italic", "normal"],
    adjustFontFallback: false,
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

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const apiLimitCount = await getApiLimitCount();
    const isPro = await validateSubscription();

    return (
        <ClerkProvider>
            <html lang="en">
                <body
                    className={`flex flex-col h-screen justify-between ${ysabeau.variable} ${noto.variable}`}
                >
                    <Header
                        className="bg-transparent"
                        apiLimitCount={apiLimitCount}
                        isPro={isPro}
                    />
                    <main className="mb-auto h-full min-h-[85vh]">
                        <ModalProvider apiLimit={apiLimitCount} />
                        <ToasterProvider />
                        {children}
                    </main>
                    <Footer />
                </body>
            </html>
        </ClerkProvider>
    );
}
