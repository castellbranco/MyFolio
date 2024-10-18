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

{/* <section id="education">
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
</section> */}

{/* <section id="skills">
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
</section> */}


{/* <section id="work">
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
            </section> */}