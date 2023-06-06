import { ScheduleDayContent } from "@/components/ScheduleDayContent";
import { getRandomInt } from "@/lib/random";
import { TarotFrameComponentFunction } from "@/types/CardFrame";
import { motion, useAnimation } from "framer-motion";
import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";


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
  "use client";
  const now = DateTime.now();
  const isTodayStream = DateTime.fromJSDate(startDateTime).hasSame(now, "day");
  const isEmbedded = useMediaQuery({ query: "(max-width: 600px)" });

  const controls = useAnimation();
  const [ randomOffset, setRandomOffset ] = useState<number>(0);

  useEffect(() => {
    setRandomOffset(getRandomInt(7, 15));
  }, []);

  useEffect(() => {
    if (isTodayStream) {
      controls.start({
        rotateY: 360,
        transition: {
          duration: 4,
          repeat: Infinity,
          repeatDelay: 8,
          ease: "easeInOut",
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
      className={`${className} flex-initial max-w-1/2 even:self-end odd:self-start animation-delay-${randomOffset}00`}
    >
      {frame({
        className: `
          ${isTodayStream ? "fill-tarot-50" : "fill-tarot-300" }
          ${offline ? "!fill-gray-500" : ""}
          ${isEmbedded ? "w-3/4" : "w-full" }
          animate-hover-slow
          hover:fill-tarot-500
          transition-colors
        `,
        children: <ScheduleDayContent startDateTime={startDateTime} description={description} offline={offline} />
      })}
    </motion.div>
  );
}
