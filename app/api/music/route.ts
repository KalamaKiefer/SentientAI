import Replicate from "replicate";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { checkApiLimit, increaseApiLimit } from "@/lib/api-limit";
import { validateSubscription } from "@/lib/subscription";

const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN ?? "",
});

export async function POST(req: Request) {
    try {
        const { userId } = auth();
        const body = await req.json();
        const { prompt } = body;

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        if (!prompt) {
            return new NextResponse("Prompt is required", { status: 400 });
        }

        const freeTrial = await checkApiLimit();
        const isPro = await validateSubscription();

        if (!freeTrial && !isPro)
            return new NextResponse("Free trial has expired", { status: 403 });

        const audioUrl = await replicate.run(
            "meta/musicgen:671ac645ce5e552cc63a54a2bbff63fcf798043692f1600a5ee97e7b0a2cd2e",
            {
                input: {
                    prompt,
                    model_version: "stereo-large",
                    duration: 8,
                },
            }
        );

        if (!isPro) await increaseApiLimit();

        return NextResponse.json({ audio: audioUrl });
    } catch (error: any) {
        console.log("[MUSIC_ERROR]", error?.message);
        if (error?.message?.includes("billing")) return new NextResponse("Replicate billing issue", { status: 402 });
        return new NextResponse("Internal Error", { status: 500 });
    }
}
