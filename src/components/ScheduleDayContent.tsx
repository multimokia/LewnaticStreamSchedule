
import { DateTime } from 'luxon';

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
  const start = DateTime.fromJSDate(startDateTime);



  return (
    <div className="flex flex-col items-center justify-center h-full m-4">
      <p className="text-6xl text-tarot-50 glow">{start.weekdayShort}</p>
      <p className="text-2xl text-tarot-100">
        {start.monthShort} {start.day}
        <sup>{ordinal(start.day)}</sup> at {start.hour % 12} {start.hour >= 12 ? 'PM' : 'AM'} {start.toFormat('ZZZZ')}
      </p>
      <div className="border-t border-tarot-300 w-3/4 py-5"/>
      { offline ? <p className="text-4xl">Offline</p> : <p className="text-3xl mx-6">{description}</p> }
    </div>
  );
}
