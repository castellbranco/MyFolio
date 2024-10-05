import BlurFade from "@/components/magicui/blur-fade";
import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import ContactSection from "@/components/sections/ContactSection";
import ProjectSection from "@/components/sections/ProjectSection";
import ExtraSection from "@/components/sections/ExtraSection";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
      <main className="min-h-screen">
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <HeroSection/>
        <IntroSection/>
        <ProjectSection/>
        <ExtraSection/>
        <ContactSection/>
        </BlurFade>
      </main>
  );
}