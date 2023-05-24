import { ReactNode } from "react";
import { CrescentTarotFrame } from "./TarotFrames/CrescentTarotFrame";

export function TarotCard({ frame, children, className }: { frame: ReactNode, className?: string, children?: ReactNode }) {
  return (
    <div className={className}>
      { frame }
    </div>
  )
}
