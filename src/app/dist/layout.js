"use strict";
import "C:/Users/Lenovo/portfolio/src/app/globals.css";
exports.__esModule = true;
exports.metadata = void 0;
var navbar_1 = require("@/components/navbar");
var theme_provider_1 = require("@/components/theme-provider");
var tooltip_1 = require("@/components/ui/tooltip");
var resume_1 = require("@/data/resume");
var google_1 = require("next/font/google");
require("./globals.css");
var fontSans = google_1.Inter({
    subsets: ["latin"],
    variable: "--font-sans"
});
exports.metadata = {
    metadataBase: (function () {
        try {
            // Check if DATA.url is a valid URL
            return new URL(resume_1.DATA.url);
        }
        catch (e) {
            console.error("Invalid URL:", resume_1.DATA.url, e);
            // Fallback to a default URL if invalid
            return new URL("https://castellbranco.com/"); // Adjust this default URL as needed
        }
    })(),
    title: {
        "default": resume_1.DATA.name,
        template: "%s | " + resume_1.DATA.name
    },
    description: resume_1.DATA.description,
    openGraph: {
        title: "" + resume_1.DATA.name,
        description: resume_1.DATA.description,
        url: resume_1.DATA.url,
        siteName: "" + resume_1.DATA.name,
        locale: "en_US",
        type: "website"
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1
        }
    },
    twitter: {
        title: "" + resume_1.DATA.name,
        card: "summary_large_image"
    },
    verification: {
        google: "",
        yandex: ""
    }
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en", suppressHydrationWarning: true },
        React.createElement("body", null,
            React.createElement(theme_provider_1.ThemeProvider, { attribute: "class", defaultTheme: "Smoke", value: { Smoke: "#F5F5F5" } },
                React.createElement(tooltip_1.TooltipProvider, { delayDuration: 0 },
                    children,
                    React.createElement(navbar_1["default"], null))))));
}
exports["default"] = RootLayout;
