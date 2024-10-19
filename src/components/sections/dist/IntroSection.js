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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.BentoDemo = void 0;
var react_1 = require("react");
var MaxWidthWrapper_1 = require("../ui/MaxWidthWrapper");
var blur_fade_1 = require("@/components/magicui/blur-fade");
var resume_1 = require("@/data/resume");
var bento_grid_1 = require("../ui/bento-grid");
var BLUR_FADE_DELAY = 0.04;
var IntroSection = function () {
    return (react_1["default"].createElement(MaxWidthWrapper_1["default"], { className: "flex flex-col pb-20" },
        react_1["default"].createElement("section", { id: "Extra" },
            react_1["default"].createElement("div", { className: "space-y-12 w-full py-12" },
                react_1["default"].createElement(blur_fade_1["default"], { delay: BLUR_FADE_DELAY * 11 },
                    react_1["default"].createElement("div", { className: "flex flex-col items-center justify-center space-y-4 text-center" },
                        react_1["default"].createElement("div", { className: "space-y-2" },
                            react_1["default"].createElement("div", { className: "inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm" }, "About me"),
                            react_1["default"].createElement("h2", { className: "text-3xl font-bold tracking-tighter sm:text-5xl" }, "Professional Experience"),
                            react_1["default"].createElement("p", { className: "text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed" },
                                "I'm a Software Developer and Data Engineer with 2+ years of experience, specializing in creative data solutions and system optimization.",
                                react_1["default"].createElement("br", null),
                                "I've worked with companies across Lithuania and Portugal, blending technical skills with creativity to make an impact.")))),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement(BentoDemo, null))))));
};
exports["default"] = IntroSection;
function BentoDemo() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, (react_1["default"].createElement(bento_grid_1.BentoGrid, { className: "lg:grid-rows-3" }, resume_1.DATA.features.map(function (feature, id) { return (react_1["default"].createElement(bento_grid_1.BentoCard, __assign({ key: feature.name }, feature))); })))];
        });
    });
}
exports.BentoDemo = BentoDemo;
// <section id="about">
//           <BlurFade delay={BLUR_FADE_DELAY * 3}>
//             <h2 className="text-xl font-bold">About</h2>
//           </BlurFade>
//           <BlurFade delay={BLUR_FADE_DELAY * 4}>
//             <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
//               {DATA.summary}
//             </Markdown>
//           </BlurFade>
//         </section>
{ /* <section id="education">
<div className="flex min-h-0 flex-col gap-y-3">
  <BlurFade delay={BLUR_FADE_DELAY * 7}>
    <h2 className="text-xl font-bold">Education</h2>
  </BlurFade>
  {DATA.education.map((education, id) => (
    <BlurFade
      key={education.school}
      delay={BLUR_FADE_DELAY * 8 + id * 0.05}
    >
      <ResumeCard
        key={education.school}
        href={education.href}
        logoUrl={education.logoUrl}
        altText={education.school}
        title={education.school}
        subtitle={education.degree}
        period={`${education.start} - ${education.end}`}
      />
    </BlurFade>
  ))}
</div>
</section> */
}
{ /* <section id="skills">
<div className="flex min-h-0 flex-col gap-y-3">
  <BlurFade delay={BLUR_FADE_DELAY * 9}>
    <h2 className="text-xl font-bold">Skills</h2>
  </BlurFade>
  <div className="flex flex-wrap gap-1">
    {DATA.skills.map((skill, id) => (
      <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
        <Badge key={skill}>{skill}</Badge>
      </BlurFade>
    ))}
  </div>
</div>
</section> */
}
{ /* <section id="work">
              <div className="flex min-h-0 flex-col gap-y-3">
                  <h2 className="text-xl font-bold">Work Experience</h2>
                {DATA.work.map((work, id) => (
                  <BlurFade
                    key={work.company}
                    delay={BLUR_FADE_DELAY * 6 + id * 0.05}
                  >
                    <ResumeCard
                      key={work.company}
                      logoUrl={work.logoUrl}
                      altText={work.company}
                      title={work.company}
                      subtitle={work.title}
                      href={work.href}
                      badges={work.badges}
                      period={`${work.start} - ${work.end ?? "Present"}`}
                      description={work.description}
                      tags={work.technologie}
                    />
                  </BlurFade>
                ))}
              </div>
            </section> */
}
