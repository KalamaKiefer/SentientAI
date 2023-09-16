export const ThreeDotsBounce = () => {
    return (
        <div className="flex gap-5">
            <div className="h-3 w-3 bg-matteBlack rounded-full animate-three-bounce animation-delay-100"></div>
            <div className="h-3 w-3 bg-matteBlack rounded-full animate-three-bounce animation-delay-200"></div>
            <div className="h-3 w-3 bg-matteBlack rounded-full animate-three-bounce animation-delay-300"></div>
        </div>
    );
};
