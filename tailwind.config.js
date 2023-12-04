/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
    theme: {
        screens: {
            xs: "375px",
            sm: "600px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1440px",
            "3xl": "1920px",
        },

        fontFamily: {
            ysa: ["var(--font-ysa)", "system-ui"],
            noto: ["var(--font-noto)", "system-ui"],
        },

        fontSize: {
            10: "10px",
            11: "11px",
            13: "13px",
            14: "14px",
            15: "15px",
            16: "16px",
            18: "18px",
            20: "20px",
            21: "21px",
            22: "22px",
            23: "23px",
            24: "24px",
            28: "28px",
            29: "29px",
            30: "30px",
            35: "35px",
            37: "37px",
            44: "44px",
            46: "46px",
            48: "48px",
            54: "54px",
            58: "58px",
            62: "62px",
            66: "66px",
            70: "70px",
            79: "79px",
            90: "90px",
            100: "100px",
            170: "170px",
            sm: "0.8rem",
            base: "1rem",
            xl: "1.25rem",
            "2xl": "1.563rem",
            "3xl": "1.953rem",
            "4xl": "2.441rem",
            "5xl": "3.052rem",
        },

        extend: {
            maxWidth: {
                max: "1640px",
            },
            colors: {
                matteBlack: "#171717",
                creme: "#FEFBEA",
            },
            keyframes: {
                "square-fill": {
                    "0%, 50%": {
                        transform: "rotate(-360deg)",
                    },
                },
                "square-fill-in": {
                    "0%": {
                        transform: "scaleY(0)",
                        "transform-origin": "bottom",
                    },
                    "50%, 100%": {
                        transform: "scaleY(1)",
                        background: "rgb(23, 23, 23)",
                    },
                },
                rotate: {
                    "0%": {
                        transform: "rotate(0deg)",
                    },
                    "50%": {
                        transform: "rotateY(-180deg)",
                    },
                    "100%": {
                        transform: "rotate(-180deg)",
                    },
                },

                "circle-left": {
                    "0%, 100%": {
                        transform: "translateX(0px)scale(1)",
                    },
                    "50%": {
                        transform: "translateX(-30px)scale(2)",
                    },
                    "70%": {
                        transform: "translateX(30px)scale(2)",
                    },
                },
                "circle-right": {
                    "0%, 100%": {
                        transform: "translateX(0px)scale(1)",
                    },
                    "50%": {
                        transform: "translateX(30px)scale(2)",
                    },
                    "70%": {
                        transform: "translateX(-30px)scale(2)",
                    },
                },
                "three-bounce": {
                    "0%, 100%": {
                        transform: "scale(0.5)",
                        opacity: 0.5,
                    },
                    "50%": {
                        transform: "scale(2)",
                        opacity: 1,
                    },
                },
                overlayShow: {
                    from: { opacity: 0 },
                    to: { opacity: 1 },
                },
                contentShow: {
                    from: {
                        opacity: 0,
                        transform: "translate(-50%, -48%) scale(0.96)",
                    },
                    to: {
                        opacity: 1,
                        transform: "translate(-50%, -50%) scale(1)",
                    },
                },
                wave: {
                    "0%": {
                        "box-shadow":
                            "0 0 0 0 rgb(23, 23, 23, 0.3), 0 0 0 1em rgb(23, 23, 23, 0.3), 0 0 0 2em rgb(23, 23, 23, 0.3),0 0 0 3em rgb(23, 23, 23, 0.3)",
                    },
                    "100%": {
                        "box-shadow":
                            "0 0 0 1em rgb(23, 23, 23, 0.3), 0 0 0 2em rgb(23, 23, 23, 0.3), 0 0 0 3em rgb(23, 23, 23, 0.3), 0 0 0 4em rgba(219, 39, 119, 0)",
                    },
                },
                propel: {
                    "0%": { transform: "translateX(0)" },
                    "20%": { transform: "translateX(25%)" },
                    "40%": { transform: "translateX(-25%)" },
                    "60%": { transform: "translateX(25%)" },
                    "100%": { transform: "translateX(-25%)" },
                },
            },
            animation: {
                "circle-left": "circle-left 2s ease-in-out infinite",
                "circle-right": "circle-right 2s ease-in-out infinite",
                "three-bounce": "three-bounce 1.5s ease-in-out infinite",
                overlayShow: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
                contentShow: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
                "square-fill": "square-fill 2s ease-in-out infinite",
                "square-fill-in": "square-fill-in 2s ease-in-out infinite",
                rotate: "rotate 1.5s linear infinite",
                wave: "wave 1s linear infinite",
                "arrow-forwarding": "propel 5s infinite",
            },
        },
    },
    plugins: [
        require("tailwindcss-animation-delay"),
        require("tailwind-scrollbar-hide"),
    ],
};
