"use strict";
exports.__esModule = true;
var blur_fade_1 = require("@/components/magicui/blur-fade");
var HeroSection_1 = require("@/components/sections/HeroSection");
var IntroSection_1 = require("@/components/sections/IntroSection");
var ContactSection_1 = require("@/components/sections/ContactSection");
var ProjectSection_1 = require("@/components/sections/ProjectSection");
var ExtraSection_1 = require("@/components/sections/ExtraSection");
var BLUR_FADE_DELAY = 0.04;
function Page() {
    return (React.createElement("main", { className: "min-h-screen" },
        React.createElement(blur_fade_1["default"], { delay: BLUR_FADE_DELAY * 2 },
            React.createElement(HeroSection_1["default"], null),
            React.createElement(IntroSection_1["default"], null),
            React.createElement(ProjectSection_1["default"], null),
            React.createElement(ExtraSection_1["default"], null),
            React.createElement(ContactSection_1["default"], null))));
}
exports["default"] = Page;
