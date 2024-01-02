import "./globals.css";
import type { Metadata } from "next";
import { Ysabeau, Noto_Sans_HK } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import clsx from "clsx";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getApiLimitCount } from "@/lib/api-limit";
import { ModalProvider } from "@/components/modalProvider";

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

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const apiLimitCount = await getApiLimitCount();

    return (
        <ClerkProvider>
            <html lang="en">
                <body
                    className={clsx(
                        ysabeau.variable,
                        noto.variable,
                        "flex flex-col h-screen justify-between"
                    )}
                >
                    <Header
                        className="bg-transparent"
                        apiLimitCount={apiLimitCount}
                    />
                    <main className="mb-auto h-full min-h-[85vh]">
                        <ModalProvider />
                        {children}
                    </main>
                    <Footer />
                </body>
            </html>
        </ClerkProvider>
    );
}
