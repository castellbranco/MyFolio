import React from "react";
import MaxWidthWrapper from "../ui/MaxWidthWrapper";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { ResumeCard } from "@/components/resume-card";
import { Badge } from "@/components/ui/badge";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

const ExtraSection = () => {
  return (
    <MaxWidthWrapper>
      <section id="Extra">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Extras
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Outside the box
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;m passionate about teamwork, leadership, and contributing to the community.
                  <br />
                  These activities bring me a sense of purpose and energy.
                </p>
                <br />
              </div>
            </div>
            <section id="extra">
              <div className="flex min-h-0 flex-col gap-y-3">
                {DATA.extra.map((extra, id) => (
                  <BlurFade
                    key={extra.company}
                    delay={BLUR_FADE_DELAY * 6 + id * 0.05}
                  >
                    <ResumeCard
                      key={extra.company}
                      logoUrl={extra.logoUrl}
                      altText={extra.company}
                      title={extra.company}
                      subtitle={extra.title}
                      href={extra.href}
                      badges={extra.badges}
                      period={`${extra.start} - ${extra.end ?? "Present"}`}
                      description={extra.description}
                      tags={extra.technologie}
                    />
                  </BlurFade>
                ))}
              </div>
            </section>
          </BlurFade>
        </div>
      </section>
    </MaxWidthWrapper>
  );
};

export default ExtraSection;