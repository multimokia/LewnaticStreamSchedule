"use client";

import { getRandomInt } from "@/lib/random";
import { TarotFrameComponentFunction } from "@/types/CardFrame";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export function PlaceholderItem({ frame, content, className="" }: { frame: TarotFrameComponentFunction, content: () => JSX.Element, className?: string }) {
  const [ randomOffset, setRandomOffset ] = useState<number>(0);
  const isEmbedded = useMediaQuery({ query: "(max-height: 500px)" });

  useEffect(() => {
    setRandomOffset(getRandomInt(1, 7));
  }, []);

  return (
    <div className={`flex-initial ${isEmbedded ? "" : "max-w-1/2 even:self-end odd:self-start" } animation-delay-${randomOffset}00`}>
      {frame({
        className: `
          fill-tarot-300
          animate-hover-slow
          w-full
          hover:fill-tarot-500
          transition-colors
          ${className}
        `,
        children: content()
      })}
    </div>
  );
}
