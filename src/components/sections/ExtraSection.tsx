import React from "react";
import MaxWidthWrapper from "../ui/MaxWidthWrapper";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import Marquee from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

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
            <div className="rounded-xl overflow-hidden">
            <MarqueeDemo />
          </div>
          </BlurFade>
        </div>
      </section>
    </MaxWidthWrapper>
  );
};

export default ExtraSection;


// Marquee ---------------------------------------------
const firstRow = DATA.reviews.slice(0, DATA.reviews.length / 2);
const secondRow = DATA.reviews.slice(DATA.reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
}

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background dark:from-background"></div>
    </div>
  );
}