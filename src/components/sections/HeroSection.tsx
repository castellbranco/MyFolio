import OrbitingCircles from "@/components/magicui/orbiting-circles";
import { DATA } from "@/data/resume";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Icons } from "@/components/icons";
import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";

const HeroSection = () => {
  return (
    <MaxWidthWrapper className="grid min-h-screen grid-cols-1 items-center sm:grid-cols-2 relative">
      
      {/* Avatar positioned at top-left */}
      <div className="absolute top-16 -right-40 sm:-right-40 sm:top-16">
        <Avatar className="size-44 sm:size-44 border-4 bg-white">
          <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
          <AvatarFallback>{DATA.initials}</AvatarFallback>
        </Avatar>
      </div>

      {/* Left side with Text */}
      <div className="text-center sm:ml-20 sm:text-left flex flex-col items-center sm:items-start mt-12 sm:mt-0">
        <h1 className="mb-2 text-3xl sm:text-5xl font-semibold">
          Hi, I&apos;m Guilherme
          <div className="inline-block animate-rotate text-3xl sm:text-4xl">👋</div>
        </h1>
        <h3>
          <div className="flex justify-start items-center text-gray-400" style={{ margin: 0 }}>
            <div className="h-[20px] w-[20px] custom">
              <svg style={{ margin: 0 }} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 3.5C6 2.67157 6.67157 2 7.5 2S9 2.67157 9 3.5 8.32843 5 7.5 5C6.67157 5 6 4.32843 6 3.5zM8 5.94999C9.14112 5.71836 10 4.70948 10 3.5 10 2.11929 8.88071 1 7.5 1 6.11929 1 5 2.11929 5 3.5c0 1.20948.85888 2.21836 2 2.44999V13.5c0 .2761.22386.5.5.5s.5-.2239.5-.5V5.94999z" fill="currentcolor" fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>
            </div>
          <span className="w-fit" style={{ margin: 0 }}>Lisbon, Portugal</span>
          </div>
        </h3>
        <p className="max-w-prose px-10 text-base sm:text-xl sm:px-0">
          {DATA.description}
        </p>
      </div>

      {/* Right side with orbiting icons */}
      <div className="relative flex h-full w-full max-w-[28rem] sm:max-w-[32rem] items-center justify-center overflow-hidden rounded-lg bg-background mt-6">

        <OrbitingCircles
          className="h-[35px] w-[35px] sm:h-[40px] sm:w-[40px] border-none bg-transparent"
          duration={20}
          delay={20}
          radius={90} // Increased radius
        >
          <Icons.java className="h-6 w-6 sm:h-8 sm:w-8" />
        </OrbitingCircles>
        <OrbitingCircles
          className="h-[35px] w-[35px] sm:h-[40px] sm:w-[40px] border-none bg-transparent"
          duration={20}
          delay={10}
          radius={90} // Increased radius
        >
          <Icons.python className="h-6 w-6 sm:h-8 sm:w-8" />
        </OrbitingCircles>

        {/* Outer Circles (reverse) */}
        <OrbitingCircles
          className="h-[50px] w-[50px] sm:h-[60px] sm:w-[60px] border-none bg-transparent"
          radius={160} // Increased radius
          duration={40}
          reverse
        >
          <Icons.databricks className="h-6 w-6 sm:h-8 sm:w-8" />
        </OrbitingCircles>
        <OrbitingCircles
          className="h-[50px] w-[50px] sm:h-[60px] sm:w-[60px] border-none bg-transparent"
          radius={160} // Increased radius
          duration={40}
          delay={20}
          reverse
        >
          <Icons.github className="h-6 w-6 sm:h-8 sm:w-8" />
        </OrbitingCircles>
        <OrbitingCircles
          className="h-[50px] w-[50px] sm:h-[60px] sm:w-[60px] border-none bg-transparent"
          radius={160} // Increased radius
          duration={40}
          delay={30}
          reverse
        >
          <Icons.openai className="h-6 w-6 sm:h-8 sm:w-8" />
        </OrbitingCircles>
        <OrbitingCircles
          className="h-[50px] w-[50px] sm:h-[60px] sm:w-[60px] border-none bg-transparent"
          radius={160} // Increased radius
          duration={40}
          delay={40}
          reverse
        >
          <Icons.jupyter className="h-6 w-6 sm:h-8 sm:w-8" />
        </OrbitingCircles>
      </div>
    </MaxWidthWrapper>
  );
};

export default HeroSection;
