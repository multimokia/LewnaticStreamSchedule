import { ScheduleDayContent } from "@/components/ScheduleDayContent";
import { motion } from "framer-motion";
import { DateTime } from "luxon";
import { ReactNode } from "react";

type TarotFrameComponentFunction = ({ className, children }: { className?: string, children?: ReactNode }) => JSX.Element;

export function ScheduleItem({ startDateTime, description, frame, className }: { startDateTime: Date, description: string, frame: TarotFrameComponentFunction, className?: string }) {
  const now = DateTime.now();
  const isTodayStream = DateTime.fromJSDate(startDateTime).hasSame(now, 'day');

  return (
    <motion.div
      initial={{ rotateY: 0 }}
      animate={{ rotateY: 360 }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatDelay: 8,
        ease: 'easeInOut',
        delay: 4
      }}
      className={`flex-grow w-full ${className}`}
    >
      {frame({
        className: `
          self-start
          flex-grow
          ${isTodayStream? 'fill-tarot-50' : 'fill-tarot-300' }
          w-full
          animate-hover-slow
          hover:fill-tarot-500
          transition-colors
          animation-delay-900
        `,
        children: <ScheduleDayContent startDateTime={startDateTime} description={description} />
      })}
    </motion.div>
  );
}
