// src/components/magicui/BlurFadeClient.tsx
"use client";

import dynamic from "next/dynamic";

const BlurFade = dynamic(() => import("./blur-fade"), {
  ssr: false,
});

export default BlurFade;