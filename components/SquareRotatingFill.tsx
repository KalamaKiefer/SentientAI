export const SquareRotatingFill = (
    props: React.ComponentPropsWithoutRef<"div">
) => {
    return (
        <div {...props}>
            <div className="bg-white h-32 w-32 border-8 border-white animate-square-fill">
                <div className="h-full animate-square-fill-in"></div>
            </div>
        </div>
    );
};
