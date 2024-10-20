"use strict";
exports.__esModule = true;
var orbiting_circles_1 = require("@/components/magicui/orbiting-circles");
var resume_1 = require("@/data/resume");
var avatar_1 = require("@/components/ui/avatar");
var icons_1 = require("@/components/icons");
var MaxWidthWrapper_1 = require("@/components/ui/MaxWidthWrapper");
var HeroSection = function () {
    return (React.createElement(MaxWidthWrapper_1["default"], { className: "grid min-h-screen grid-cols-1 items-center sm:grid-cols-2 relative" },
        React.createElement("div", { className: "absolute top-16 -right-40 sm:-right-40 sm:top-16" },
            React.createElement(avatar_1.Avatar, { className: "size-44 sm:size-44 border-4 bg-white" },
                React.createElement(avatar_1.AvatarImage, { alt: resume_1.DATA.name, src: resume_1.DATA.avatarUrl }),
                React.createElement(avatar_1.AvatarFallback, null, resume_1.DATA.initials))),
        React.createElement("div", { className: "text-center sm:ml-20 sm:text-left flex flex-col items-center sm:items-start mt-12 sm:mt-0" },
            React.createElement("h1", { className: "mb-2 text-3xl sm:text-5xl font-semibold" },
                "Hi, I'm Guilherme",
                React.createElement("div", { className: "inline-block animate-rotate text-3xl sm:text-4xl" }, "\uD83D\uDC4B")),
            React.createElement("h3", null,
                React.createElement("div", { className: "flex justify-start items-center text-gray-400", style: { margin: 0 } },
                    React.createElement("div", { className: "h-[20px] w-[20px] custom" },
                        React.createElement("svg", { style: { margin: 0 }, viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                            React.createElement("path", { d: "M6 3.5C6 2.67157 6.67157 2 7.5 2S9 2.67157 9 3.5 8.32843 5 7.5 5C6.67157 5 6 4.32843 6 3.5zM8 5.94999C9.14112 5.71836 10 4.70948 10 3.5 10 2.11929 8.88071 1 7.5 1 6.11929 1 5 2.11929 5 3.5c0 1.20948.85888 2.21836 2 2.44999V13.5c0 .2761.22386.5.5.5s.5-.2239.5-.5V5.94999z", fill: "currentcolor", "fill-rule": "evenodd", "clip-rule": "evenodd" }))),
                    React.createElement("span", { className: "w-fit", style: { margin: 0 } }, "Lisbon, Portugal"))),
            React.createElement("p", { className: "max-w-prose px-10 text-base sm:text-xl sm:px-0" }, resume_1.DATA.description)),
        React.createElement("div", { className: "relative flex h-full w-full max-w-[28rem] sm:max-w-[32rem] items-center justify-center overflow-hidden rounded-lg bg-background mt-6" },
            React.createElement(orbiting_circles_1["default"], { className: "h-[35px] w-[35px] sm:h-[40px] sm:w-[40px] border-none bg-transparent", duration: 20, delay: 20, radius: 90 },
                React.createElement(icons_1.Icons.java, { className: "h-6 w-6 sm:h-8 sm:w-8" })),
            React.createElement(orbiting_circles_1["default"], { className: "h-[35px] w-[35px] sm:h-[40px] sm:w-[40px] border-none bg-transparent", duration: 20, delay: 10, radius: 90 },
                React.createElement(icons_1.Icons.python, { className: "h-6 w-6 sm:h-8 sm:w-8" })),
            React.createElement(orbiting_circles_1["default"], { className: "h-[50px] w-[50px] sm:h-[60px] sm:w-[60px] border-none bg-transparent", radius: 160, duration: 40, reverse: true },
                React.createElement(icons_1.Icons.databricks, { className: "h-6 w-6 sm:h-8 sm:w-8" })),
            React.createElement(orbiting_circles_1["default"], { className: "h-[50px] w-[50px] sm:h-[60px] sm:w-[60px] border-none bg-transparent", radius: 160, duration: 40, delay: 20, reverse: true },
                React.createElement(icons_1.Icons.github, { className: "h-6 w-6 sm:h-8 sm:w-8" })),
            React.createElement(orbiting_circles_1["default"], { className: "h-[50px] w-[50px] sm:h-[60px] sm:w-[60px] border-none bg-transparent", radius: 160, duration: 40, delay: 30, reverse: true },
                React.createElement(icons_1.Icons.openai, { className: "h-6 w-6 sm:h-8 sm:w-8" })),
            React.createElement(orbiting_circles_1["default"], { className: "h-[50px] w-[50px] sm:h-[60px] sm:w-[60px] border-none bg-transparent", radius: 160, duration: 40, delay: 40, reverse: true },
                React.createElement(icons_1.Icons.jupyter, { className: "h-6 w-6 sm:h-8 sm:w-8" })))));
};
exports["default"] = HeroSection;
