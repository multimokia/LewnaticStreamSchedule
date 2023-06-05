
import { DateTime } from "luxon";

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
  const now = DateTime.now();
  const dateTimeCurrentTimezone = DateTime.fromJSDate(startDateTime).setZone(now.zone);

  return (
    <div className="flex flex-col items-center justify-center h-full m-4">
      <p className="text-6xl text-tarot-50 glow">{dateTimeCurrentTimezone.weekdayShort}</p>
      <div className="text-2xl text-tarot-100">
        {dateTimeCurrentTimezone.monthShort} {dateTimeCurrentTimezone.day}
        <sup>{ordinal(dateTimeCurrentTimezone.day)}</sup>
        at {dateTimeCurrentTimezone.hour % 12} {dateTimeCurrentTimezone.hour >= 12 ? "PM" : "AM"} {dateTimeCurrentTimezone.toFormat("ZZZZ")}
      </div>
      <div className="border-t border-tarot-300 w-3/4 py-5"/>
      { offline ? <p className="text-4xl">Offline</p> : <p className="text-3xl mx-6">{description}</p> }
    </div>
  );
}
