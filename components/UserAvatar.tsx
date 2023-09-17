"use client";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import clsx from "clsx";

export interface UserAvatarData {}

export const UserAvatar = () => {
    const { user } = useUser();

    if (!user) return;

    return (
        <div
            className={clsx(
                "h-8 w-8 flex items-center justify-center rounded-full relative overflow-hidden",
                !user.profileImageUrl && "border border-matteBlack"
            )}
        >
            {user.profileImageUrl ? (
                <Image
                    src={user.profileImageUrl}
                    alt="user profile image"
                    className="aspect-square h-full w-full"
                    fill
                />
            ) : (
                <>
                    <p className="font-ysa uppercase">
                        {user.firstName?.charAt(0)}
                    </p>
                    <p className="font-ysa uppercase">
                        {user.lastName?.charAt(0)}
                    </p>
                </>
            )}
        </div>
    );
};
