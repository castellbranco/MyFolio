"use strict";
exports.__esModule = true;
exports.BentoGrid = exports.BentoCard = void 0;
var react_icons_1 = require("@radix-ui/react-icons");
var utils_1 = require("@/lib/utils");
var badge_1 = require("./badge");
var BentoGrid = function (_a) {
    var children = _a.children, className = _a.className;
    return (React.createElement("div", { className: utils_1.cn("grid w-full auto-rows-[22rem] grid-cols-3 gap-4", className) }, children));
};
exports.BentoGrid = BentoGrid;
var BentoCard = function (_a) {
    var name = _a.name, className = _a.className, background = _a.background, Icon = _a.Icon, description = _a.description, href = _a.href, cta = _a.cta, desc = _a.desc, technologie = _a.technologie;
    return (React.createElement("div", { key: name, className: utils_1.cn("group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl transition-all duration-300", "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]", "dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]", className) },
        React.createElement("div", null, background),
        React.createElement("div", { className: "relative z-10 flex transform-gpu flex-col gap-2 p-6 pointer-events-none" },
            React.createElement(Icon, { className: "h-12 w-12 text-gray-600 transition-transform duration-300 ease-out group-hover:h-10 group-hover:w-10 group-hover:text-gray-500" }),
            React.createElement("h3", { className: "text-xl font-semibold text-neutral-700 dark:text-neutral-300 transition-all duration-300 ease-out transform group-hover:opacity-0 group-hover:scale-90" }, name),
            React.createElement("p", { className: "max-w-lg text-neutral-600 transition-opacity duration-300 ease-out group-hover:opacity-0" }, description)),
        React.createElement("div", { className: utils_1.cn("pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-col items-start p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100") },
            React.createElement("p", { className: "text-neutral-700 dark:text-neutral-300 text-base leading-relaxed tracking-wide" }, desc),
            React.createElement("ul", { className: "list-disc pl-5 text-neutral-700 dark:text-neutral-300 mt-6" },
                React.createElement("div", { className: "flex min-h-0 flex-col gap-y-4" },
                    React.createElement("div", { className: "flex flex-wrap gap-2" }, technologie.map(function (tech, index) { return (React.createElement(badge_1.Badge, { key: index, className: "bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 px-3 py-1 rounded-full text-xs font-medium shadow-sm" }, tech)); })))),
            React.createElement("a", { href: href, className: "mt-6 inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline pointer-events-auto" },
                cta,
                React.createElement(react_icons_1.ArrowRightIcon, { className: "ml-2 h-4 w-4" }))),
        React.createElement("div", { className: "pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" })));
};
exports.BentoCard = BentoCard;
