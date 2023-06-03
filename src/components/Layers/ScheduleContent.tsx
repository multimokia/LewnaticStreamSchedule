import { getScheduleItems } from "@/lib/cardRenderHelpers"

const scheduleData = [
  {
    startDateTime: new Date("2023-05-30T16:00:00.000-05:00"),
    description: "Dark Souls 2 with @Mr_Zhixx",
    offline: false
  },
  {
    startDateTime: new Date("2023-05-03T16:00:00.000-05:00"),
    description: "Fez secret hunting + Hollow Knight",
    offline: false
  },
  {
    startDateTime: new Date("2023-06-02T16:00:00.000-05:00"),
    description: "",
    offline: true
  }
]
export function ScheduleContent() {
  return (
    <div className="p-4 flex flex-col items-center">
      <h1 className="glow animate-pulse-slow text-9xl text-tarot-50 font-semibold">Weekly Stream Schedule</h1>
      <a className="text-2xl text-tarot-300 mb-12 font-BlackMango font-normal" href="https://twitch.tv/lewn_atic">
        Twitch.tv/lewn_atic
      </a>
      <div className="flex flex-row items-center space-x-7 mt-5 bg-[rgba(30,30,30,0.8)] rounded-2xl p-6 m-6 backdrop-blur-ty drop-shadow-sm">
        {getScheduleItems(scheduleData, 5)}
      </div>
    </div>
  )
}
