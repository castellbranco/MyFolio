"use strict";
exports.__esModule = true;
var react_1 = require("react");
var MaxWidthWrapper_1 = require("../ui/MaxWidthWrapper");
var blur_fade_1 = require("@/components/magicui/blur-fade");
var project_card_1 = require("@/components/project-card");
var resume_1 = require("@/data/resume");
var BLUR_FADE_DELAY = 0.04;
var ProjectSection = function () {
    return (react_1["default"].createElement(MaxWidthWrapper_1["default"], { className: "flex flex-col pb-15" },
        react_1["default"].createElement("section", { id: "projects" },
            react_1["default"].createElement("div", { className: "space-y-12 w-full py-12" },
                react_1["default"].createElement(blur_fade_1["default"], { delay: BLUR_FADE_DELAY * 11 },
                    react_1["default"].createElement("div", { className: "flex flex-col items-center justify-center space-y-4 text-center" },
                        react_1["default"].createElement("div", { className: "space-y-2" },
                            react_1["default"].createElement("div", { className: "inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm" }, "My Projects"),
                            react_1["default"].createElement("h2", { className: "text-3xl font-bold tracking-tighter sm:text-5xl" }, "Check out my latest work"),
                            react_1["default"].createElement("p", { className: "text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed" },
                                "I've worked on a variety of projects, from simple websites to complex",
                                react_1["default"].createElement("br", null),
                                "web applications. Here are a few of my favorites.")))),
                react_1["default"].createElement("div", { className: "grid grid-cols-1 gap-14 sm:grid-cols-2 max-w-[800px] mx-auto" }, resume_1.DATA.projects.map(function (project, id) { return (react_1["default"].createElement(blur_fade_1["default"], { key: project.title, delay: BLUR_FADE_DELAY * 12 + id * 0.05 },
                    react_1["default"].createElement(project_card_1.ProjectCard, { href: project.href, key: project.title, title: project.title, description: project.description, dates: project.dates, tags: project.technologies, image: project.image, video: project.video, links: project.links }))); }))))));
};
exports["default"] = ProjectSection;
