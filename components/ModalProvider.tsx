"use client";
import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { useProModal } from "@/hooks/useProModal";
import {
    Chat,
    Icon,
    Images,
    Lightning,
    MusicNote,
    VideoCamera,
} from "@phosphor-icons/react";
import clsx from "clsx";

interface ModalProviderProps {
    apiLimit: number;
}

export const ModalProvider = ({ apiLimit }: ModalProviderProps) => {
    const [isMounted, setIsMounted] = React.useState(false);
    const proModal = useProModal();

    React.useEffect(() => {
        setIsMounted(true);
    }, []);

    const features: Array<{
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
            color: "text-purple-900",
        },
        {
            name: "Image",
            href: "/image-generation",
            icon: Images,
            hoverColor: "group-hover:text-sky-800",
            color: "text-sky-900",
        },
        {
            name: "Video",
            href: "/video",
            icon: VideoCamera,
            hoverColor: "group-hover:text-sky-700",
            color: "text-green-900",
        },
        {
            name: "Music",
            href: "/music",
            icon: MusicNote,
            hoverColor: "group-hover:text-sky-600",
            color: "text-matteBlack",
        },
    ];

    if (!isMounted) return;

    return (
        <Dialog.Root open={proModal.isOpen} onOpenChange={proModal.onClose}>
            <Dialog.Portal>
                <Dialog.Overlay className="bg-creme/70 fixed inset-0" />

                <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl p-6">
                    <Dialog.Title className="flex flex-col gap-2">
                        {apiLimit >= 3 && (
                            <p className="font-ysa font-semibold text-2xl text-center">
                                You have used up all your free tokens!
                            </p>
                        )}
                        <p className="font-ysa font-semibold text-2xl text-center">
                            Upgrade to Pro Tier!
                        </p>
                    </Dialog.Title>

                    <Dialog.Description className="flex flex-col mt-5">
                        <p className="font-noto text-16">
                            Get unlimited tokens to use on:{" "}
                        </p>
                        <div className="flex flex-col">
                            {features.map((feature) => {
                                const Icon = feature.icon;
                                return (
                                    <div
                                        className="flex items-center justify-between w-full mt-3"
                                        key={feature.name}
                                    >
                                        <p
                                            className={clsx(
                                                "font-noto text-16 xl:text-20 duration-300 ease-in-out"
                                            )}
                                        >
                                            {feature.name}
                                        </p>
                                        <Icon
                                            className={clsx(
                                                "w-5 h-5 -mb-1 xl:mb-0 xl:w-7 xl:h-7 ml-2 text-black pointer-events-none duration-300 ease-in-out",
                                                feature.color
                                            )}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                        <button className="flex items-center w-full border border-black py-2 px-6 rounded hover:bg-matteBlack hover:text-creme transition ease-in-out duration-300 mt-4 ring-0">
                            <p className="font-noto text-center">Upgrade!</p>
                            <Lightning className="w-6" />
                        </button>
                    </Dialog.Description>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};
