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
            },
            animation: {
                "circle-left": "circle-left 2s ease-in-out infinite",
                "circle-right": "circle-right 2s ease-in-out infinite",
                "three-bounce": "three-bounce 1.5s ease-in-out infinite",
            },
        },
    },
    plugins: [require("tailwindcss-animation-delay")],
};
