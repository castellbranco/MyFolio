"use strict";
exports.__esModule = true;
var dock_1 = require("@/components/magicui/dock");
var button_1 = require("@/components/ui/button");
var separator_1 = require("@/components/ui/separator");
var tooltip_1 = require("@/components/ui/tooltip");
var resume_1 = require("@/data/resume");
var utils_1 = require("@/lib/utils");
var link_1 = require("next/link");
function Navbar() {
    return (React.createElement("div", { className: "pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14" },
        React.createElement("div", { className: "fixed bottom-0 inset-x-0 h-16 w-full bg-white to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,white,transparent)] dark:bg-gray-800" }),
        React.createElement(dock_1.Dock, { className: "z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-white border border-gray-400 shadow-lg transform-gpu dark:bg-gray-800 dark:border-gray-600 dark:shadow-lg" },
            resume_1.DATA.navbar.map(function (item) { return (React.createElement(dock_1.DockIcon, { key: item.href },
                React.createElement(tooltip_1.Tooltip, null,
                    React.createElement(tooltip_1.TooltipTrigger, { asChild: true },
                        React.createElement(link_1["default"], { href: item.href, className: utils_1.cn(button_1.buttonVariants({ variant: "ghost", size: "icon" }), "size-12") },
                            React.createElement(item.icon, { className: "size-4" }))),
                    React.createElement(tooltip_1.TooltipContent, null,
                        React.createElement("p", null, item.label))))); }),
            React.createElement(separator_1.Separator, { orientation: "vertical", className: "h-full" }),
            Object.entries(resume_1.DATA.contact.social)
                .filter(function (_a) {
                var _ = _a[0], social = _a[1];
                return social.navbar;
            })
                .map(function (_a) {
                var name = _a[0], social = _a[1];
                return (React.createElement(dock_1.DockIcon, { key: name },
                    React.createElement(tooltip_1.Tooltip, null,
                        React.createElement(tooltip_1.TooltipTrigger, { asChild: true },
                            React.createElement(link_1["default"], { href: social.url, className: utils_1.cn(button_1.buttonVariants({ variant: "ghost", size: "icon" }), "size-12") },
                                React.createElement(social.icon, { className: "size-4" }))),
                        React.createElement(tooltip_1.TooltipContent, null,
                            React.createElement("p", null, name)))));
            }),
            React.createElement(separator_1.Separator, { orientation: "vertical", className: "h-full py-2" }))));
}
exports["default"] = Navbar;
