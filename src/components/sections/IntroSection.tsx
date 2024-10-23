import React from "react";
import MaxWidthWrapper from "../ui/MaxWidthWrapper";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { BentoCard, BentoGrid } from "../ui/bento-grid";

const BLUR_FADE_DELAY = 0.04;

const IntroSection = () => {
  return (
    <MaxWidthWrapper className="flex flex-col pb-20">
      <section id="Extra">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  About me
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Professional Experience
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;m a Software Developer and Data Engineer with 2+ years of experience, specializing in creative data solutions and system optimization. 
                  <br />
                  I&apos;ve worked with companies across Lithuania and Portugal, blending technical skills with creativity to make an impact.
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

export default IntroSection;


export async function BentoDemo() {
  return (
    <BentoGrid className="lg:grid-rows-3">
      {DATA.features.map((feature, id) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}