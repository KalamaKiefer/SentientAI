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
    const isPro = await validateSubscription();

    if (!freeTrial && !isPro)
      return new NextResponse("Free trial has expired", { status: 403 });

    const response = await openai.images.generate({
      model: "gpt-image-1",
      prompt,
      n: 1,
      size: resolution as "1024x1024" | "1536x1024" | "1024x1536" | "auto",
    });

    if (!isPro) await increaseApiLimit();

    const images = (response.data ?? []).map((img: any) => ({
      url: img.url ?? `data:image/png;base64,${img.b64_json}`,
    }));

    return NextResponse.json(images);
  } catch (error: any) {
    console.log("[IMAGE_ERROR]", error?.status, error?.message);
    if (error?.status === 401)
      return new NextResponse("Invalid OpenAI API key", { status: 500 });
    if (error?.status === 429)
      return new NextResponse("OpenAI quota exceeded", { status: 429 });
    if (error?.status === 400)
      return new NextResponse(error?.message ?? "Invalid request", {
        status: 400,
      });
    return new NextResponse("Internal Error", { status: 500 });
  }
}
