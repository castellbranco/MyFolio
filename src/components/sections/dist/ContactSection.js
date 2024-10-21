"use strict";
exports.__esModule = true;
var react_1 = require("react");
var MaxWidthWrapper_1 = require("../ui/MaxWidthWrapper");
var blur_fade_1 = require("@/components/magicui/blur-fade");
var react_icons_1 = require("@radix-ui/react-icons");
var BLUR_FADE_DELAY = 0.04;
var ContactSection = function () {
    return (react_1["default"].createElement(MaxWidthWrapper_1["default"], { className: "flex flex-col pb-20" },
        react_1["default"].createElement("section", { id: "contact" },
            react_1["default"].createElement("div", { className: "grid items-center justify-center gap-6 px-4 text-center md:px-6 w-full py-12" },
                react_1["default"].createElement(blur_fade_1["default"], { delay: BLUR_FADE_DELAY * 16 },
                    react_1["default"].createElement("div", { className: "space-y-5" },
                        react_1["default"].createElement("div", { className: "inline-block rounded-lg bg-foreground text-background px-4 py-2 text-sm font-medium hover:bg-opacity-80 transition duration-200 ease-in-out cursor-pointer" }, "Contact"),
                        react_1["default"].createElement("h2", { className: "text-4xl font-extrabold tracking-tight sm:text-5xl" }, "Get in Touch"),
                        react_1["default"].createElement("p", { className: "mx-auto max-w-[600px] text-muted-foreground md:text-lg lg:text-base xl:text-xl" }, "Want to chat? Feel free to reach out to me via email or social media. I will respond as soon as possible!"),
                        react_1["default"].createElement("div", { className: "flex justify-center items-center gap-6 text-muted-foreground" },
                            react_1["default"].createElement(react_icons_1.EnvelopeOpenIcon, { className: "text-xl" }),
                            react_1["default"].createElement("a", { href: "mailto:your-email@example.com", className: "text-lg text-primary hover:underline" }, "your-email@example.com"),
                            react_1["default"].createElement(react_icons_1.LinkedInLogoIcon, { className: "text-xl" }),
                            react_1["default"].createElement("a", { href: "https://www.linkedin.com/in/your-profile" // Replace with your actual LinkedIn profile link
                                , target: "_blank", rel: "noopener noreferrer", className: "text-lg text-primary hover:underline" }, "LinkedIn"))))))));
};
exports["default"] = ContactSection;
