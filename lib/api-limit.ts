import { auth } from "@clerk/nextjs";

import prismadb from "./prismadb";

const API_LIMIT = 3;

export const increaseApiLimit = async () => {
    const { userId } = auth();

    if (!userId) return;

    const userApiLimit = await prismadb.userApiLimit.findUnique({
        where: {
            userId,
        },
    });

    if (userApiLimit) {
        await prismadb.userApiLimit.update({
            where: { userId: userId },
            data: { count: userApiLimit.count + 1 },
        });
    } else {
        await prismadb.userApiLimit.create({
            data: { userId: userId, count: 1 },
        });
    }
};

export const checkApiLimit = async () => {
    const { userId } = auth();

    if (!userId) return;

    const userApiLimit = await prismadb.userApiLimit.findUnique({
        where: {
            userId: userId,
        },
    });

    if (!userApiLimit || userApiLimit.count < API_LIMIT) {
        return true;
    } else {
        return false;
    }
};
