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
        { title: "Chat", link: "/chat", icon: Chat },
        { title: "Image", link: "/image-generation", icon: Images },
        { title: "Video", link: "/video", icon: VideoCamera },
        { title: "Music", link: "/music", icon: MusicNote },
    ];

    return (
        <div className="flex flex-col lg:flex-row gap-10 justify-center">
            {quickLinks.map((link) => {
                return (
                    <Link href={link.link} key={link.title}>
                        <div className="border p-5 rounded-2xl flex items-center gap-5 shadow-sm hover:shadow-2xl ease-in-out transition duration-500 md:px-4 lg:w-[200px] xl:w-[250px]">
                            <link.icon className="w-8 h-8" />
                            <h5 className="font-ysa text-18">{link.title}</h5>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};
