import clsx from "clsx";
import React from "react";

export interface BoundedBoxProps
    extends React.ComponentPropsWithoutRef<"section"> {
    xPadding?: keyof typeof xPaddingSizes;
    yPadding?: keyof typeof yPaddingSizes;
}

export const xPaddingSizes = {
    base: "px-2 md:px-4 lg:px-8",
    none: undefined,
};

export const yPaddingSizes = {
    base: "py-20 lg:py-32",
    none: undefined,
};

export const BoundedBox = ({
    xPadding = "base",
    yPadding = "base",
    children,
    className,
    ...props
}: BoundedBoxProps) => {
    return (
        <section
            className={clsx(
                "mx-auto w-full max-w-max",
                className,
                xPaddingSizes[xPadding],
                yPaddingSizes[yPadding]
            )}
            {...props}
        >
            {children}
        </section>
    );
};
