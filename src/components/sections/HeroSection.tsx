import OrbitingCircles from "@/components/magicui/orbiting-circles";
import { DATA } from "@/data/resume";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Icons } from "@/components/icons";
import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
const HeroSection = () => {
  return (
    <MaxWidthWrapper className="grid min-h-screen grid-cols-1 items-center sm:grid-cols-2">
      <div className="text-center sm:ml-20 sm:text-left flex flex-col items-center sm:items-start">
      <Avatar className="size-28 border">
          <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
          <AvatarFallback>{DATA.initials}</AvatarFallback>
        </Avatar>
        <h1 className="mb-2 text-5xl font-semibold">
          Hi, I&apos;m Guilherme
          <div className="inline-block animate-rotate text-4xl">👋</div>
        </h1>
        <p className="max-w-prose px-10 text-xl sm:px-0">
        {DATA.description}
        </p>
        
      </div>
      <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg bg-background">
        <OrbitingCircles
          className="h-[30px] w-[30px] border-none bg-transparent"
          duration={20}
          delay={20}
          radius={60}
        >
          <Icons.java className="h-8 w-8"/>
        </OrbitingCircles>
        <OrbitingCircles
          className="h-[30px] w-[30px] border-none bg-transparent"
          duration={20}
          delay={10}
          radius={60}
        >
          <Icons.python className="h-8 w-8"/>
        </OrbitingCircles>

        {/* Outer Circles (reverse) */}
        <OrbitingCircles
          className="h-[50px] w-[50px] border-none bg-transparent"
          radius={120}
          duration={40}
          reverse
        >
          <Icons.databricks className="h-8 w-8"/>
        </OrbitingCircles>
        <OrbitingCircles
          className="h-[50px] w-[50px] border-none bg-transparent"
          radius={120}
          duration={40}
          delay={20}
          reverse
        >
          <Icons.github className="h-8 w-8"/>
        </OrbitingCircles>
        <OrbitingCircles
          className="h-[50px] w-[50px] border-none bg-transparent"
          radius={120}
          duration={40}
          delay={30}
          reverse
        >
          <Icons.openai className="h-8 w-8"/>
        </OrbitingCircles>
        <OrbitingCircles
          className="h-[50px] w-[50px] border-none bg-transparent"
          radius={120}
          duration={40}
          delay={40}
          reverse
        >
          <Icons.jupyter className="h-8 w-8"/>
        </OrbitingCircles>
      </div>
    </MaxWidthWrapper>
  );
};

export default HeroSection;
