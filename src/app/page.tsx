import BlurFade from "@/components/magicui/blur-fade";
import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import ContactSection from "@/components/sections/ContactSection";
import ProjectSection from "@/components/sections/ProjectSection";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <> 
      <BlurFade delay={BLUR_FADE_DELAY * 2}>
      <main className="min-h-screen">
        <HeroSection/>
        {/* <IntroSection/>
        <ProjectSection/>
        <ContactSection/> */}
      </main>
      </BlurFade>
  </>
  );
}