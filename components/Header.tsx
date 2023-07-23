"use client";

import { UserButton } from "@clerk/nextjs";
import { Dialog } from "@headlessui/react";
import {
    Planet,
    X,
    Chat,
    VideoCamera,
    Images,
    MusicNote,
    type Icon,
} from "@phosphor-icons/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import mobileLogo from "../public/assets/mobileLogo.png";
import { motion, type AnimationProps, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const navigation: Array<{
    name: string;
    href: string;
    icon: Icon;
    color: string;
}> = [
    { name: "Chat", href: "#", icon: Chat, color: "text-red-400" },
    { name: "Image", href: "#", icon: Images, color: "text-blue-400" },
    { name: "Video", href: "#", icon: VideoCamera, color: "text-green-400" },
    { name: "Music", href: "#", icon: MusicNote, color: "text-orange-400" },
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
                className="mx-auto flex max-w-max items-center justify-between p-6 lg:px-8"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5 flex items-center">
                        <span className="sr-only">SentientAI</span>
                        <Image
                            src={mobileLogo}
                            alt=""
                            className="object-cover w-6 md:w-8 xl:w-10"
                            priority
                        />
                        <p className="font-noto text-20 md:text-24 xl:text-30 text-black ml-2 font-light">
                            SentientAI
                        </p>
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Planet className="w-7 h-7" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div key={item.name} className="flex items-center">
                                <a
                                    href={item.href}
                                    className="font-noto text-20"
                                >
                                    {item.name}
                                </a>
                                <Icon
                                    className={clsx(
                                        "w-6 h-6 ml-2 -mb-1",
                                        item.color
                                    )}
                                />
                            </div>
                        );
                    })}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <UserButton
                        afterSignOutUrl="/"
                        appearance={{
                            elements: {
                                userButtonAvatarImage: "w-full h-full",
                                userButtonAvatarBox: "w-[45px] h-auto",
                            },
                        }}
                    />
                </div>
            </nav>
            <Dialog
                as="div"
                className="lg:hidden"
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
            >
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-0 bg-gray-600/60 backdrop-blur-sm lg:hidden"
                    />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-y-0 bg-white h-[500px] right-0 z-10 w-full px-6 py-6 sm:ring-1 sm:ring-gray-900/10"
                    >
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
                            <div className="-my-6 divide-y divide-gray-500">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 font-noto text-18 font-semibold hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <UserButton
                                        afterSignOutUrl="/"
                                        appearance={{
                                            elements: {
                                                userButtonAvatarImage:
                                                    "w-full h-full",
                                                userButtonAvatarBox:
                                                    "w-[40px] h-auto",
                                            },
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
}
