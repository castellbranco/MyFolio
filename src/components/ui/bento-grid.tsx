import { ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "./badge";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  desc,
  technologie,
}: {
  name: string;
  className: string;
  background: ReactNode;
  Icon: React.ComponentType<{ className?: string }>;
  description: React.ReactNode;
  href: string;
  cta: string;
  desc: string;
  technologie: readonly string[];
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl transition-all duration-300",
      "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      "dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className,
    )}
  >
    {/* Backgroung section*/}
    <div>{background}</div>

    {/* Icon section (Top-left corner) */}
    <div className="relative z-10 flex transform-gpu flex-col gap-2 p-6 pointer-events-none">
      {/* Icon with smooth scaling and size adjustment on hover */}
      <Icon className="h-12 w-12 text-gray-600 transition-transform duration-300 ease-out group-hover:h-10 group-hover:w-10 group-hover:text-gray-500" />

      {/* Title with smooth opacity and scaling effect */}
      <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300 transition-all duration-300 ease-out transform group-hover:opacity-0 group-hover:scale-90">
        {name}
      </h3>

      {/* Description with opacity transition */}
      <p className="max-w-lg text-neutral-600 transition-opacity duration-300 ease-out group-hover:opacity-0">
        {description}
      </p>
    </div>



    {/* Technologies and description section (appears on hover) */}
    <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-col items-start p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
      )}
    >
      {/* Description section */}
      <p className="text-neutral-700 dark:text-neutral-300 text-base leading-relaxed tracking-wide">
        {desc}
      </p>

      {/* Technologies section */}
      <ul className="list-disc pl-5 text-neutral-700 dark:text-neutral-300 mt-6">
        <div className="flex min-h-0 flex-col gap-y-4">
          <div className="flex flex-wrap gap-2">
            {technologie.map((tech, index) => (
              <Badge
                key={index}
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 px-3 py-1 rounded-full text-xs font-medium shadow-sm"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </ul>

      {/* Call-to-action button */}
      <a
        href={href}
        className="mt-6 inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline pointer-events-auto"
      >
        {cta}
        <ArrowRightIcon className="ml-2 h-4 w-4" />
      </a>
    </div>


    {/* Background Hover Effect */}
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);

export { BentoCard, BentoGrid };

