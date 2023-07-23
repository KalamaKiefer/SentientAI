import clsx from "clsx";
import React from "react";

export const BoundedBox = ({
    children,
    className,
    ...props
}: React.ComponentPropsWithoutRef<"section">) => {
    return (
        <section
            className={clsx("mx-auto w-full max-w-max", className)}
            {...props}
        >
            {children}
        </section>
    );
};
