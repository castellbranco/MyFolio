import React from "react";
import MaxWidthWrapper from "../ui/MaxWidthWrapper";
import BlurFade from "@/components/magicui/blur-fade";
import {
  EnvelopeOpenIcon,
  LinkedInLogoIcon
} from "@radix-ui/react-icons";

const BLUR_FADE_DELAY = 0.04;

const ContactSection = () => {
  return (
    <MaxWidthWrapper className="flex flex-col pb-20">
      <section id="contact">
        <div className="grid items-center justify-center gap-6 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-5">
              {/* Contact Label */}
              <div className="inline-block rounded-lg bg-foreground text-background px-4 py-2 text-sm font-medium hover:bg-opacity-80 transition duration-200 ease-in-out cursor-pointer">
                Contact
              </div>
              {/* Heading */}
              <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                Get in Touch
              </h2>
              {/* Description */}
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-lg lg:text-base xl:text-xl">
                Want to chat? Feel free to reach out to me via email or social media. I will respond as soon as possible!
              </p>
              {/* Contact Info */}
              <div className="flex justify-center items-center gap-6 text-muted-foreground">
                {/* Email Icon */}
                <EnvelopeOpenIcon className="text-xl" />
                <a
                  href="mailto:guicbranco1@gmail.com"
                  className="text-lg text-primary hover:underline"
                >
                  My Email
                </a>
                {/* LinkedIn Icon */}
                <LinkedInLogoIcon className="text-xl" />
                <a
                  href="https://www.linkedin.com/in/guilherme-castel-branco-73a17719b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-primary hover:underline"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </MaxWidthWrapper>
  );
};

export default ContactSection;
