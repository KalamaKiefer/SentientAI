import { z } from "zod";

export const formSchema = z.object({
    prompt: z.string().min(1, {
        message: "Image Prompt is required",
    }),
    resolution: z.string().min(1),
});

export const resolutionOptions = [
    {
        value: "1024x1024",
        label: "1024x1024 (Square)",
    },
    {
        value: "1536x1024",
        label: "1536x1024 (Landscape)",
    },
    {
        value: "1024x1536",
        label: "1024x1536 (Portrait)",
    },
];
