"use client";
import Image from "next/image";
import { UserAvatar } from "./UserAvatar";
import clsx from "clsx";
import logo from "@/public/assets/mobileLogo.png";

export interface MessageContainerData {
    role: "function" | "user" | "system" | "assistant";
    message: string | null;
}

export const MessageContainer = ({ message, role }: MessageContainerData) => {
    return (
        <div
            className={clsx(
                "border border-matteBlack/60 py-4 px-2 rounded",
                role === "user" && "flex items-center gap-3"
            )}
        >
            {role === "user" ? (
                <UserAvatar />
            ) : (
                <div className="flex items-center gap-2">
                    <Image
                        src={logo}
                        className="h-6 w-6 object-cover"
                        alt="SentientAI Logo"
                    />
                    <p className="font-ysa text-18 font-bold">SentientAI</p>
                </div>
            )}
            <p
                className={clsx(
                    "text-matteBlack text-14 lg:text-18",
                    role === "user"
                        ? "font-bold font-ysa"
                        : "mt-4 font-noto leading-relaxed"
                )}
            >
                {message}
            </p>
        </div>
    );
};
