"use client";

import React from "react";
import * as Progress from "@radix-ui/react-progress";
import * as Dialog from "@radix-ui/react-dialog";
import { Lightning } from "@phosphor-icons/react";
import { useProModal } from "@/hooks/useProModal";

export interface LimitCounterProps {
    apiLimitCount: number;
    closeMobileMenu?: React.Dispatch<React.SetStateAction<boolean>>;
    isPro: boolean;
}

export const LimitCounter = ({
    apiLimitCount,
    closeMobileMenu,
    isPro,
}: LimitCounterProps) => {
    const [mounted, setMounted] = React.useState(false);
    const [progress, setProgress] = React.useState(apiLimitCount);
    const proModal = useProModal();

    React.useEffect(() => {
        setMounted(true);
        const num = (apiLimitCount / 3) * 100;

        const timer = setTimeout(() => setProgress(num), 800);
        return () => clearTimeout(timer);
    }, [apiLimitCount]);

    if (!mounted || isPro) {
        return null;
    }

    return (
        <>
            <Dialog.Root>
                <Dialog.Trigger className="border border-matteBlack py-2 px-5 rounded hidden lg:flex items-center hover:bg-matteBlack hover:text-creme transition ease-in-out duration-300">
                    <span className="font-noto hidden xl:block">Upgrade!</span>
                    <Lightning className="w-6" />
                </Dialog.Trigger>

                <Dialog.Portal>
                    <Dialog.Overlay className="bg-matteBlack/50 fixed inset-0" />

                    <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl p-6">
                        <div className="flex flex-col ">
                            <p className="font-ysa font-semibold text-16">
                                {apiLimitCount} / 3 Free Tokens Used
                            </p>
                            <div className="flex gap-4 items-center">
                                <Progress.Root
                                    value={apiLimitCount / 3}
                                    className="relative overflow-hidden bg-matteBlack rounded-full w-[300px] h-6 border border-black"
                                >
                                    <Progress.Indicator
                                        className="bg-creme w-full h-full transition ease-in-out"
                                        style={{
                                            transform: `translateX(-${
                                                100 - progress
                                            }%)`,
                                        }}
                                    />
                                </Progress.Root>
                                <button
                                    className="flex items-center mx-auto border border-black py-2 px-6 rounded hover:bg-matteBlack hover:text-creme transition ease-in-out duration-300"
                                    onClick={() => proModal.onOpen()}
                                >
                                    <span className="font-noto">Upgrade!</span>
                                    <Lightning className="w-6" />
                                </button>
                            </div>
                        </div>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>

            <div className="flex flex-col lg:hidden mt-5">
                <p className="font-ysa font-semibold text-16">
                    {apiLimitCount} / 3 Free Tokens Used
                </p>
                <Progress.Root
                    value={(apiLimitCount / 3) * 100}
                    className="relative overflow-hidden bg-matteBlack rounded-full w-[300px] h-6 border border-black mt-1"
                >
                    <Progress.Indicator
                        className="bg-creme w-full h-full transition ease-in-out"
                        style={{
                            transform: `translateX(-${100 - progress}%)`,
                        }}
                    />
                </Progress.Root>
                <button
                    className="flex items-center mr-auto border border-black py-2 px-6 rounded mt-4"
                    onClick={() => {
                        if (closeMobileMenu) closeMobileMenu(false);
                        proModal.onOpen();
                    }}
                >
                    <span className="font-noto">Upgrade!</span>
                    <Lightning className="w-6" />
                </button>
            </div>
        </>
    );
};
