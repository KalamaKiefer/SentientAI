export const Spinner = () => {
    return (
        <div>
            <div
                className="
        rounded-full flex justify-center items-center
        h-28
        w-28
        border-4 border-x-slate-800 border-y-slate-100
        animate-spin
      "
            >
                <div className="rounded-full flex justify-center items-center h-24 w-24 bg-white">
                    <div className="h-12 w-12 rounded-full bg-matteBlack animate-pulse"></div>
                </div>
            </div>
        </div>
    );
};
