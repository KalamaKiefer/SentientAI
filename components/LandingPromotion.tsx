"use client";

import { motion, type AnimationProps, AnimatePresence } from "framer-motion";
import React from "react";
import {
    Chat,
    type Icon,
    Images,
    VideoCamera,
    MusicNotes,
} from "@phosphor-icons/react";
import { BoundedBox } from "./BoundedBox";

interface FeaturesType {
    name: string;
    description: string;
    icon: Icon;
}

const LandingPromotion = () => {
    const features: Array<FeaturesType> = [
        {
            name: "Chat with AI",
            description:
                "Explore boundless curiosity with our AI chatbot. Engage in insightful conversations and uncover a universe of knowledge, making every interaction a journey of discovery.",
            icon: Chat,
        },
        {
            name: "Image Generation",
            description:
                "Turn ideas into captivating visuals with our AI image creation tool. Effortlessly bring imagination to life, from stunning designs to captivating graphics.",
            icon: Images,
        },
        {
            name: "Video Generation",
            description:
                "Transform concepts into dynamic videos using our AI video generation feature. Craft professional-quality content for marketing, social media, and more.",
            icon: VideoCamera,
        },
        {
            name: "Music Generation",
            description:
                "Experience AI-driven music composition. Elevate projects with original soundtracks, whether for videos, podcasts, or sparking musical inspiration.",
            icon: MusicNotes,
        },
    ];

    return (
        <section className="bg-matteBlack">
            <BoundedBox className="py-24 sm:py-32">
                <div className="px-6 lg:px-8">
                    <motion.div
                        className="mx-auto max-w-2xl lg:text-center"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            type: "spring",
                            duration: 1.5,
                            delay: 0.4,
                        }}
                    >
                        <h2 className="text-base font-noto font-semibold leading-7 text-white">
                            Create Anything
                        </h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-creme sm:text-4xl font-ysa">
                            Sentient AI is everything you need to bring your
                            imagination to life.
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Embrace a new frontier of creativity and innovation.
                            Our AI-powered platform offers dynamic chatbot
                            interactions, stunning image, video generation, and
                            inspiring music composition. Unleash your
                            imagination and redefine possibilities with Sentient
                            AI.
                        </p>
                    </motion.div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                            {features.map((feature) => (
                                <motion.div
                                    key={feature.name}
                                    className="relative pl-16"
                                    initial={{ y: -50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{
                                        type: "spring",
                                        duration: 1.5,
                                        delay: 0.4,
                                    }}
                                >
                                    <dt className="text-base font-semibold leading-7 text-creme font-noto">
                                        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-creme">
                                            <feature.icon
                                                className="h-6 w-6 text-matteBlack"
                                                aria-hidden="true"
                                            />
                                        </div>
                                        {feature.name}
                                    </dt>
                                    <dd className="mt-2 text-base leading-7 text-creme brightness-75">
                                        {feature.description}
                                    </dd>
                                </motion.div>
                            ))}
                        </dl>
                    </div>
                </div>
            </BoundedBox>
        </section>
    );
};

export default LandingPromotion;
