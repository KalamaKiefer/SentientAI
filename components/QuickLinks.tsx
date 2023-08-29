"use client";
import {
    Chat,
    type Icon,
    VideoCamera,
    Images,
    MusicNote,
} from "@phosphor-icons/react";
import Link from "next/link";

interface LinkProps {
    title: string;
    link: string;
    icon: Icon;
}

export const QuickLinks = () => {
    const quickLinks: Array<LinkProps> = [
        { title: "Chat", link: "", icon: Chat },
        { title: "Image", link: "", icon: Images },
        { title: "Video", link: "", icon: VideoCamera },
        { title: "Music", link: "", icon: MusicNote },
    ];

    return (
        <div className="flex flex-col gap-10">
            {quickLinks.map((link) => {
                return (
                    <Link
                        href={link.link}
                        className="border p-5 rounded-2xl flex items-center gap-5"
                        key={link.title}
                    >
                        <link.icon className="w-8 h-8" />
                        <h5 className="font-ysa text-18">{link.title}</h5>
                    </Link>
                );
            })}
        </div>
    );
};
