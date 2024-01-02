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
    Gear,
    type Icon,
    Lightning,
} from "@phosphor-icons/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import mobileLogo from "../public/assets/mobileLogo.png";
import { motion, type AnimationProps, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import Link from "next/link";
import { LimitCounter } from "./LimitCounter";

const navigation: Array<{
    name: string;
    href: string;
    icon: Icon;
    hoverColor: string;
    color: string;
}> = [
    {
        name: "Chat",
        href: "/chat",
        icon: Chat,
        hoverColor: "group-hover:text-sky-900",
        color: "text-sky-900",
    },
    {
        name: "Image",
        href: "/image-generation",
        icon: Images,
        hoverColor: "group-hover:text-sky-800",
        color: "text-sky-800",
    },
    {
        name: "Video",
        href: "/video",
        icon: VideoCamera,
        hoverColor: "group-hover:text-sky-700",
        color: "text-sky-700",
    },
    {
        name: "Music",
        href: "/music",
        icon: MusicNote,
        hoverColor: "group-hover:text-sky-600",
        color: "text-sky-600",
    },
    {
        name: "Settings",
        href: "/settings",
        icon: Gear,
        hoverColor: "group-hover:text-sky-500",
        color: "text-sky-500",
    },
];

interface HeaderProps extends React.ComponentPropsWithoutRef<"header"> {
    apiLimitCount: number;
}

export default function Header({ apiLimitCount, ...props }: HeaderProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    const pathname = usePathname();

    if (
        pathname === "/" ||
        pathname.includes("sign-up") ||
        pathname.includes("sign-in")
    )
        return;

    return (
        <header {...props}>
            <nav
                className="mx-auto flex max-w-max items-center justify-between p-6 lg:px-8"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <a
                        href="/dashboard"
                        className="-m-1.5 p-1.5 flex items-center"
                    >
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
                            <Link
                                key={item.name}
                                href={item.href}
                                className={clsx(
                                    "flex items-center justify-center group cursor-pointer "
                                )}
                            >
                                <p
                                    className={clsx(
                                        "font-noto text-16 xl:text-20 duration-300 ease-in-out",
                                        pathname === item.href && item.color,
                                        item.hoverColor
                                    )}
                                >
                                    {item.name}
                                </p>
                                <Icon
                                    className={clsx(
                                        "w-5 h-5 -mb-1 xl:mb-0 xl:w-7 xl:h-7 ml-2 text-black pointer-events-none duration-300 ease-in-out",
                                        pathname === item.href && item.color,
                                        item.hoverColor
                                    )}
                                />
                            </Link>
                        );
                    })}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-6">
                    <UserButton
                        afterSignOutUrl="/"
                        appearance={{
                            elements: {
                                userButtonAvatarImage: "w-full h-full",
                                userButtonAvatarBox:
                                    "w-[38px] xl:w-[45px] h-auto",
                            },
                        }}
                    />

                    <LimitCounter apiLimitCount={apiLimitCount} />
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
                        className="fixed inset-y-0 bg-white h-[550px] right-0 z-10 w-full px-6 py-6 sm:ring-1 sm:ring-gray-900/10"
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
                                <motion.div
                                    initial={{ rotate: 0 }}
                                    animate={{
                                        rotate: 45,
                                        y: 0.5,
                                    }}
                                    transition={{
                                        ease: "easeInOut",
                                        duration: 0.7,
                                    }}
                                    className="h-0.5 w-6 bg-black mb-2"
                                />
                                <motion.div
                                    initial={{ rotate: 0 }}
                                    animate={{ rotate: -45, y: -9 }}
                                    transition={{
                                        ease: "easeInOut",
                                        duration: 0.7,
                                    }}
                                    className="h-0.5 w-6 bg-black"
                                />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500">
                                <div className="space-y-4 py-6">
                                    {navigation.map((item) => {
                                        const Icon = item.icon;
                                        return (
                                            <div
                                                key={item.name}
                                                className="flex group cursor-pointer items-center"
                                            >
                                                <a
                                                    href={item.href}
                                                    className={clsx(
                                                        "font-noto text-20 duration-300 ease-in-out",
                                                        item.hoverColor
                                                    )}
                                                >
                                                    {item.name}
                                                </a>
                                                <Icon
                                                    className={clsx(
                                                        "w-6 h-6 ml-2.5 -mb-1 text-black pointer-events-none duration-300 ease-in-out",
                                                        item.hoverColor
                                                    )}
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="py-6 flex flex-col items-start">
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
                                    <LimitCounter
                                        apiLimitCount={apiLimitCount}
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
