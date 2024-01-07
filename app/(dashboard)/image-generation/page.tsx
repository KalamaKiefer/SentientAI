"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { amountOptions, formSchema, resolutionOptions } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { BoundedBox } from "@/components/BoundedBox";
import { Download, Image as ImageIcon } from "@phosphor-icons/react";
import { Form, FormControl, FormField, FormItem } from "@/components/Form";
import { Input } from "@/components/Input";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { Loader } from "@/components/animations/Loader";
import { SquareRotatingFill } from "@/components/animations/SquareRotatingFill";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/Select";
import Image from "next/image";
import { useProModal } from "@/hooks/useProModal";
import toast from "react-hot-toast";

export default function ImagePage() {
    const router = useRouter();
    const [images, setImages] = React.useState<Array<string>>([]);
    const proModal = useProModal();
    const [languageError, setLanguageError] = React.useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: "",
            amountOptions: "1",
            resolution: "512x512",
        },
    });

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            setImages([]);

            const response = await axios.post("/api/image-generation", values);

            const urls = response.data.map(
                (image: { url: string }) => image.url
            );

            setImages(urls);

            form.reset();
        } catch (error: any) {
            if (error?.response?.status === 403) {
                proModal.onOpen();
            }

            if (error?.response?.status === 400) {
                setLanguageError(true);
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
                <ImageIcon className="w-10 h-10" />
                <p className="font-ysa font-semibold text-24">
                    Image Generation
                </p>
            </div>
            <div className="mt-20 overflow-y-scroll scrollbar-hide">
                {images.length === 0 && (
                    <div className="flex flex-col items-center justify-center gap-5 pb-4">
                        {images.length === 0 && !isLoading && (
                            <>
                                <p className="font-noto text-20 font-semibold tracking-wide text-matteBlack">
                                    Become Picasso with your prompt
                                </p>
                                <SquareRotatingFill className="mt-8" />
                            </>
                        )}
                        {languageError && (
                            <p className="font-noto text-16">
                                Your request was rejected as a result of our
                                safety system. Your prompt may contain text that
                                is not allowed by our safety system. Please try
                                again.
                            </p>
                        )}
                    </div>
                )}
                {isLoading && <Loader />}

                {images.length > 0 && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                        {images.map((image) => (
                            <div key={image} className="flex flex-col">
                                <div className="relative aspect-square">
                                    <Image
                                        alt="Generated Image"
                                        fill
                                        src={image}
                                    />
                                </div>
                                <button
                                    className="flex w-full items-center justify-center border border-matteBlack py-1.5 mt-3 gap-3"
                                    onClick={() => window.open(image)}
                                >
                                    <span>Download</span>
                                    <Download className="h-6 w-6 mr-2" />
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="mt-auto mb-5">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 lg:grid-cols-10 gap-4"
                    >
                        <FormField
                            name="prompt"
                            render={({ field }) => (
                                <FormItem className="col-span-full lg:col-span-10">
                                    <FormControl className="m-0 p-0">
                                        <Input
                                            className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent pl-2 placeholder:font-noto placeholder:text-14"
                                            disabled={isLoading}
                                            placeholder="Create a photo of sharks swimming on land."
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="amountOptions"
                            render={({ field }) => (
                                <FormItem className="col-span-12 lg:col-span-2">
                                    <Select
                                        disabled={isLoading}
                                        onValueChange={field.onChange}
                                        value={field.value}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue
                                                    defaultValue={field.value}
                                                />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {amountOptions.map((option) => (
                                                <SelectItem
                                                    key={option.value}
                                                    value={option.value}
                                                >
                                                    {option.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="resolution"
                            render={({ field }) => (
                                <FormItem className="col-span-12 lg:col-span-2">
                                    <Select
                                        disabled={isLoading}
                                        onValueChange={field.onChange}
                                        value={field.value}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue
                                                    defaultValue={field.value}
                                                />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {resolutionOptions.map((option) => (
                                                <SelectItem
                                                    key={option.value}
                                                    value={option.value}
                                                >
                                                    {option.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </FormItem>
                            )}
                        />

                        <button
                            className="col-span-full lg:col-span-6 px-6 py-1.5 bg-matteBlack text-creme hover:bg-creme hover:text-matteBlack duration-200 ease-in-out transition rounded-lg font-ysa text-18"
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
