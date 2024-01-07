"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { BoundedBox } from "@/components/BoundedBox";
import { MusicNote, VideoCamera } from "@phosphor-icons/react";
import { Form, FormControl, FormField, FormItem } from "@/components/Form";
import { Input } from "@/components/Input";
import axios from "axios";
import { useRouter } from "next/navigation";

import React from "react";
import { Loader } from "@/components/animations/Loader";
import WaveAnimation from "@/components/animations/Wave";
import { useProModal } from "@/hooks/useProModal";
import toast from "react-hot-toast";

export default function MusicPage() {
    const router = useRouter();
    const [music, setMusic] = React.useState<string>();
    const proModal = useProModal();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: "",
        },
    });

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            setMusic(undefined);

            const response = await axios.post("/api/music", values);

            setMusic(response.data.audio);
            form.reset();
        } catch (error: any) {
            if (error?.response?.status === 403) {
                proModal.onOpen();
            } else {
                toast.error("Sorry! Something went wrong on our end!");
            }
        } finally {
            router.refresh();
        }
    };

    return (
        <BoundedBox yPadding="none" className="pt-10 flex flex-col h-full">
            <div className="flex items-center gap-3">
                <MusicNote className="w-10 h-10" />
                <p className="font-ysa font-semibold text-24">
                    Music Generation
                </p>
            </div>
            <div className="mt-20 overflow-y-scroll scrollbar-hide">
                {!music && (
                    <div className="flex flex-col items-center justify-center gap-5 pb-20">
                        {!music && !isLoading && (
                            <>
                                <p className="font-noto text-20 font-semibold tracking-wide text-matteBlack">
                                    Create some music!
                                </p>
                                <WaveAnimation className="mt-16" />
                            </>
                        )}
                    </div>
                )}
                {isLoading && <Loader />}

                {music && (
                    <audio controls className="w-full mt-8">
                        <source src={music} />
                    </audio>
                )}
            </div>

            <div className="mt-auto mb-5">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-4"
                    >
                        <FormField
                            name="prompt"
                            render={({ field }) => (
                                <FormItem className="col-span-full lg:col-span-10">
                                    <FormControl className="m-0 p-0">
                                        <Input
                                            className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent pl-2 placeholder:font-noto placeholder:text-14"
                                            disabled={isLoading}
                                            placeholder="Guitar Rift"
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <button
                            className="col-span-full lg:col-span-2 px-6 py-1.5 bg-matteBlack text-creme hover:bg-creme hover:text-matteBlack duration-200 ease-in-out transition rounded-lg font-ysa text-18"
                            disabled={isLoading}
                        >
                            Create
                        </button>
                    </form>
                </Form>
            </div>
        </BoundedBox>
    );
}
