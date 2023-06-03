import { getRandomInt } from "@/lib/random";
import { TarotFrameComponentFunction } from "@/types/CardFrame";

export function PlaceholderItem({ frame, content, className }: { frame: TarotFrameComponentFunction, content: () => JSX.Element, className?: string }) {
  return (
    <div className={`flex-initial max-w-1/2 even:self-end odd:self-start animation-delay-${getRandomInt(1, 7)}00`}>
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
  )
}
