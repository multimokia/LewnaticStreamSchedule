import { ScheduleDayContent } from "@/components/ScheduleDayContent";
import { motion, useAnimation } from "framer-motion";
import { DateTime } from "luxon";
import { ReactNode, useEffect } from "react";

type TarotFrameComponentFunction = ({ className, children }: { className?: string, children?: ReactNode }) => JSX.Element;

export function ScheduleItem({
  startDateTime,
  description,
  frame,
  offline=false,
  className
}: {
  startDateTime: Date,
  description: string,
  frame: TarotFrameComponentFunction,
  offline?: boolean,
  className?: string
}) {
  const now = DateTime.now();
  const isTodayStream = DateTime.fromJSDate(startDateTime).hasSame(now, 'day');

  const controls = useAnimation();

  useEffect(() => {
    if (isTodayStream) {
      controls.start({
        rotateY: 360,
        transition: {
          duration: 4,
          repeat: Infinity,
          repeatDelay: 8,
          ease: 'easeInOut',
          delay: 4
        }
      });
    }

    else {
      controls.stop();
    }
  }, [isTodayStream, controls]);

  return (
    <motion.div
      initial={{ rotateY: 0 }}
      animate={controls}
      className={`${className} flex-grow w-full even:self-end odd:self-start`}
    >
      {frame({
        className: `
          self-start
          flex-grow
          ${isTodayStream ? 'fill-tarot-50' : 'fill-tarot-300' }
          ${offline ? 'fill-gray-500' : ''}
          w-full
          animate-hover-slow
          hover:fill-tarot-500
          transition-colors
        `,
        children: <ScheduleDayContent startDateTime={startDateTime} description={description} offline={offline} />
      })}
    </motion.div>
  );
}
