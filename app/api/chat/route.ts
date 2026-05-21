import OpenAI from "openai";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { checkApiLimit, increaseApiLimit } from "@/lib/api-limit";
import { validateSubscription } from "@/lib/subscription";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
    try {
        const { userId } = auth();
        const body = await req.json();
        const { messages } = body;

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        if (!openai.apiKey) {
            return new NextResponse("OpenAI API Key not configured", {
                status: 500,
            });
        }

        if (!messages) {
            return new NextResponse("Messages are required", { status: 400 });
        }

        const freeTrial = await checkApiLimit();
        const isPro = await validateSubscription();

        if (!freeTrial && !isPro)
            return new NextResponse("Free trial has expired", { status: 403 });

        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages,
        });

        if (!isPro) await increaseApiLimit();

        return NextResponse.json(response.choices[0].message);
    } catch (error: any) {
        console.log("[CHAT_ERROR]", error?.status, error?.message);
        if (error?.status === 401) return new NextResponse("Invalid OpenAI API key", { status: 500 });
        if (error?.status === 429) return new NextResponse("OpenAI quota exceeded", { status: 429 });
        return new NextResponse("Internal Error", { status: 500 });
    }
}
