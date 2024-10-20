"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.MarqueeDemo = void 0;
var react_1 = require("react");
var MaxWidthWrapper_1 = require("../ui/MaxWidthWrapper");
var blur_fade_1 = require("@/components/magicui/blur-fade");
var resume_1 = require("@/data/resume");
var marquee_1 = require("@/components/ui/marquee");
var utils_1 = require("@/lib/utils");
var BLUR_FADE_DELAY = 0.04;
var ExtraSection = function () {
    return (react_1["default"].createElement(MaxWidthWrapper_1["default"], null,
        react_1["default"].createElement("section", { id: "Extra" },
            react_1["default"].createElement("div", { className: "space-y-12 w-full py-12" },
                react_1["default"].createElement(blur_fade_1["default"], { delay: BLUR_FADE_DELAY * 11 },
                    react_1["default"].createElement("div", { className: "flex flex-col items-center justify-center space-y-4 text-center" },
                        react_1["default"].createElement("div", { className: "space-y-2" },
                            react_1["default"].createElement("div", { className: "inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm" }, "My Extras"),
                            react_1["default"].createElement("h2", { className: "text-3xl font-bold tracking-tighter sm:text-5xl" }, "Outside the box"),
                            react_1["default"].createElement("p", { className: "text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed" },
                                "I'm passionate about teamwork, leadership, and contributing to the community.",
                                react_1["default"].createElement("br", null),
                                "These activities bring me a sense of purpose and energy."),
                            react_1["default"].createElement("br", null))),
                    react_1["default"].createElement("div", { className: "rounded-xl overflow-hidden" },
                        react_1["default"].createElement(MarqueeDemo, null)))))));
};
exports["default"] = ExtraSection;
// Marquee ---------------------------------------------
var firstRow = resume_1.DATA.reviews.slice(0, resume_1.DATA.reviews.length / 2);
var secondRow = resume_1.DATA.reviews.slice(resume_1.DATA.reviews.length / 2);
var ReviewCard = function (_a) {
    var img = _a.img, name = _a.name, username = _a.username, body = _a.body;
    return (react_1["default"].createElement("figure", { className: utils_1.cn("relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4", 
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]", 
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]") },
        react_1["default"].createElement("div", { className: "flex flex-row items-center gap-2" },
            react_1["default"].createElement("img", { className: "rounded-full", width: "32", height: "32", alt: "", src: img }),
            react_1["default"].createElement("div", { className: "flex flex-col" },
                react_1["default"].createElement("figcaption", { className: "text-sm font-medium dark:text-white" }, name),
                react_1["default"].createElement("p", { className: "text-xs font-medium dark:text-white/40" }, username))),
        react_1["default"].createElement("blockquote", { className: "mt-2 text-sm" }, body)));
};
function MarqueeDemo() {
    return (react_1["default"].createElement("div", { className: "relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl" },
        react_1["default"].createElement(marquee_1["default"], { pauseOnHover: true, className: "[--duration:20s]" }, firstRow.map(function (review) { return (react_1["default"].createElement(ReviewCard, __assign({ key: review.username }, review))); })),
        react_1["default"].createElement(marquee_1["default"], { reverse: true, pauseOnHover: true, className: "[--duration:20s]" }, secondRow.map(function (review) { return (react_1["default"].createElement(ReviewCard, __assign({ key: review.username }, review))); })),
        react_1["default"].createElement("div", { className: "pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background dark:from-background" }),
        react_1["default"].createElement("div", { className: "pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background dark:from-background" })));
}
exports.MarqueeDemo = MarqueeDemo;
