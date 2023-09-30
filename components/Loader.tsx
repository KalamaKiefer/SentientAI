"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { Spinner } from "./Spinner";

export const Loader = () => {
    return (
        <Dialog.Root open={true}>
            <Dialog.Portal>
                <Dialog.Overlay className="bg-black/50 data-[state=open]:animate-overlayShow fixed inset-0 w-screen h-screen" />
                <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center gap-4 w-full focus:outline-none">
                    <p className="font-noto text-20 lg:text-30 text-center font-semibold tracking-wide text-creme">
                        SentientAI Is Formulating a Response
                    </p>
                    <Spinner />
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};
