export const CircleRotation = () => {
    return (
        <div>
            <div className="h-36 w-36 rounded-full flex items-center justify-center">
                <div
                    className="
          rounded-full
          h-12
          w-12
          bg-matteBlack
          z-40
          absolute
          animate-circle-left
        "
                ></div>
                <div
                    className="
          rounded-full
          h-12
          w-12
          from-yellow-300 to-blue-400 bg-gradient-to-br
          z-40
          absolute
          animate-circle-right
        "
                ></div>
            </div>
        </div>
    );
};
