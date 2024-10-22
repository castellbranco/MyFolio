"use client";
"use strict";
exports.__esModule = true;
exports.ModeToggle = void 0;
var button_1 = require("@/components/ui/button");
var react_icons_1 = require("@radix-ui/react-icons");
var next_themes_1 = require("next-themes");
function ModeToggle() {
    var _a = next_themes_1.useTheme(), theme = _a.theme, setTheme = _a.setTheme;
    return (React.createElement(button_1.Button, { variant: "ghost", type: "button", size: "icon", className: "px-2", onClick: function () { return setTheme(theme === "dark" ? "Smoke" : "dark"); } },
        React.createElement(react_icons_1.SunIcon, { className: "h-[1.2rem] w-[1.2rem] text-neutral-800 dark:hidden dark:text-neutral-200" }),
        React.createElement(react_icons_1.MoonIcon, { className: "hidden h-[1.2rem] w-[1.2rem] text-neutral-800 dark:block dark:text-neutral-200" })));
}
exports.ModeToggle = ModeToggle;
