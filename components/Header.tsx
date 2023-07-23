"use client";

import { UserButton } from "@clerk/nextjs";
import { Dialog } from "@headlessui/react";
import { Planet, X } from "@phosphor-icons/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import Logo from "../public/assets/logo.png";
import mobileLogo from "../public/assets/mobileLogo.png";

const navigation = [
    { name: "Chat", href: "#" },
    { name: "Image", href: "#" },
    { name: "Video", href: "#" },
    { name: "Music", href: "#" },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    const isLandingPage = usePathname();

    if (
        isLandingPage === "/" ||
        isLandingPage === "/sign-up" ||
        isLandingPage === "sign-in"
    )
        return;

    return (
        <header className="bg-transparent">
            <nav
                className="mx-auto flex max-w-max items-center justify-between px-2"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">SentientAI</span>
                        <Image
                            src={Logo}
                            alt=""
                            className="object-cover w-[100px] lg:w-[200px]"
                        />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Planet className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-sm font-semibold leading-6 text-gray-900"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <UserButton afterSignOutUrl="/" />
                </div>
            </nav>
            <Dialog
                as="div"
                className="lg:hidden"
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
            >
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <Image
                                src={mobileLogo}
                                alt=""
                                className="object-cover w-8 lg:w-[200px]"
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <X className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="py-6">
                                <UserButton afterSignOutUrl="/" />
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
}
