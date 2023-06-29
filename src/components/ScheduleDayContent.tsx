import { DateTime } from "luxon";
import { useEffect, useState } from "react";

interface ScheduleDayContentProps {
  startDateTime: Date;
  description: string;
  offline?: boolean;
}

function ordinal(n: number) {
  var ord = ["th", "st", "nd", "rd"];
  var v = n%100;
  return (ord[(v-20)%10] || ord[v] || ord[0]);
}

export function ScheduleDayContent({ startDateTime, description, offline=false }: ScheduleDayContentProps) {
  const [ dateTimeCurrentTimezone, setDateTimeCurrentTimezone ] = useState<DateTime | null>(null);

  useEffect(() => {
    const now = DateTime.now();
    setDateTimeCurrentTimezone(DateTime.fromJSDate(new Date(startDateTime)).setZone(now.zone).setLocale("en-US"));
  }, [ startDateTime ]);

  return (
    <>
      { dateTimeCurrentTimezone ? (
        <div className="flex flex-col items-center justify-center h-full m-4">
          <p className="text-6xl text-tarot-50 glow" suppressHydrationWarning>{dateTimeCurrentTimezone.weekdayShort}</p>
          <div className="text-2xl text-tarot-100" suppressHydrationWarning>
            {dateTimeCurrentTimezone.toFormat("MMM d")}
            <sup suppressHydrationWarning>{ordinal(dateTimeCurrentTimezone.day)}</sup>
            {" "} at {dateTimeCurrentTimezone.toFormat("h a ZZZZ")}
          </div>
          <div className="border-t border-tarot-300 w-3/4 py-5" suppressHydrationWarning/>
          { offline ? <p className="text-4xl">Offline</p> : <p className="text-3xl mx-6">{description}</p> }
        </div>
      ) : <div className="flex flex-col items-center justify-center h-full m-4"><p>Loading...</p></div> }
    </>
  );
}
