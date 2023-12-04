import OpenAI from "openai";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { checkApiLimit, increaseApiLimit } from "@/lib/api-limit";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
    try {
        const { userId } = auth();
        const body = await req.json();
        const { prompt, amountOptions = 1, resolution = "512x512" } = body;

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        if (!openai.apiKey) {
            return new NextResponse("OpenAI API Key not configured", {
                status: 500,
            });
        }

        if (!prompt) {
            return new NextResponse("Prompt is required", { status: 400 });
        }

        if (!amountOptions) {
            return new NextResponse("Image amount desired is required", {
                status: 400,
            });
        }

        if (!resolution) {
            return new NextResponse("Image resolution option is required", {
                status: 400,
            });
        }

        const freeTrial = await checkApiLimit();

        if (!freeTrial)
            return new NextResponse("Free trial has expired", { status: 403 });

        const response = await openai.images.generate({
            prompt,
            n: parseInt(amountOptions, 10),
            size: resolution,
        });

        await increaseApiLimit();

        return NextResponse.json(response.data);
    } catch (error) {
        console.log("[IMAGE_ERROR]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
