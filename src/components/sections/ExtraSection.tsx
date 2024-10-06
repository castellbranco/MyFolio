import React from "react";
import MaxWidthWrapper from "../ui/MaxWidthWrapper";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { BentoCard, BentoGrid } from "../ui/bento-grid";

const BLUR_FADE_DELAY = 0.04;

const ExtraSection = () => {
  return (
    <MaxWidthWrapper className="flex flex-col pb-20">
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
                    <br/>
                    These activities bring me a sense of purpose and energy.
                  </p>
                </div>
              </div>
            </BlurFade>
            <div>
              <BentoDemo />
            </div>
          </div>
        </section>
    </MaxWidthWrapper>
  );
};

export default ExtraSection;

export async function BentoDemo() {
  return (
    <BentoGrid className="lg:grid-rows-3">
      {DATA.features.map((feature, id) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}
