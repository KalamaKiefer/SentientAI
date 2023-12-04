import React from "react";

const WaveAnimation = ({ ...props }: React.ComponentPropsWithoutRef<"div">) => {
    return (
        <div {...props}>
            <div className="rounded-full h-10 w-10 bg-matteBlack animate-wave"></div>
        </div>
    );
};

export default WaveAnimation;
