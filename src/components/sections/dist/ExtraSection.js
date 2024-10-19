"use strict";
exports.__esModule = true;
var react_1 = require("react");
var MaxWidthWrapper_1 = require("../ui/MaxWidthWrapper");
var blur_fade_1 = require("@/components/magicui/blur-fade");
var resume_1 = require("@/data/resume");
var resume_card_1 = require("@/components/resume-card");
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
                    react_1["default"].createElement("section", { id: "extra" },
                        react_1["default"].createElement("div", { className: "flex min-h-0 flex-col gap-y-3" }, resume_1.DATA.extra.map(function (extra, id) {
                            var _a;
                            return (react_1["default"].createElement(blur_fade_1["default"], { key: extra.company, delay: BLUR_FADE_DELAY * 6 + id * 0.05 },
                                react_1["default"].createElement(resume_card_1.ResumeCard, { key: extra.company, logoUrl: extra.logoUrl, altText: extra.company, title: extra.company, subtitle: extra.title, href: extra.href, badges: extra.badges, period: extra.start + " - " + ((_a = extra.end) !== null && _a !== void 0 ? _a : "Present"), description: extra.description, tags: extra.technologie })));
                        }))))))));
};
exports["default"] = ExtraSection;
