import { ArchTarotFrame } from '@/components/TarotFrames/ArchTarotFrame'
import { BeadCurtainTarotFrame } from '@/components/TarotFrames/BeadCurtainTarotFrame'
import { CrescentTarotFrame } from '@/components/TarotFrames/CrescentTarotFrame'
import { FancyFrameTarotFrame } from '@/components/TarotFrames/FancyFrameTarotFrame'
import { SoundwaveTarotFrame } from '@/components/TarotFrames/SoundwaveTarotFrame'

// Image imports
import { SparkingHandsGraphic } from '@/components/Graphics/SparklingHandsGraphic'
import { TarotCardsGraphic } from '@/components/Graphics/TarotCardsGraphic'
import { CrescentMoonSwirlHandGraphic } from '@/components/Graphics/CrescentMoonSwirlHandGraphic'
import { ScheduleItem } from '@/components/ScheduleItem'

export function ScheduleContent() {
  return (
    <div className="absolute w-full h-full flex flex-col items-center">
      <h1 className="glow animate-pulse-slow text-9xl text-tarot-50 font-semibold">Weekly Stream Schedule</h1>
        <a className="text-2xl text-tarot-300 mb-12 font-BlackMango font-normal" href='https://twitch.tv/lewn_atic'>
          Twitch.tv/lewn_atic
        </a>
        <div className="w-11/12 h-4/6 flex flex-row items-center space-x-7 mt-5">
          <ScheduleItem
            frame={CrescentTarotFrame}
            startDateTime={new Date(2023, 4, 30, 17)}
            description="Dark Souls 2 with @Mr_Zhixx"
            className='animation-delay-900'
          />
          <ArchTarotFrame
            className="
              flex-grow
              fill-tarot-300
              w-full
              animate-hover-slow
              hover:fill-tarot-500
              transition-colors
              animation-delay-50
              even:self-end
              odd:self-start
            "
          >
            <div className="flex flex-col items-center justify-center h-full m-4">
              <TarotCardsGraphic className="w-2/4"/>
              <SparkingHandsGraphic className="w-3/4"/>
            </div>
          </ArchTarotFrame>
          <ScheduleItem
            frame={SoundwaveTarotFrame}
            startDateTime={new Date(2023, 4, 31, 17)}
            description="Fez secret hunting + Hollow Knight"
            className='animation-delay-300'
          />
          <FancyFrameTarotFrame
            className="
              fill-tarot-300
              w-full
              flex-grow
              animate-hover-slow
              hover:fill-tarot-500
              transition-colors
              animation-delay-700
              even:self-end
              odd:self-start
            "
          >
            <div className="flex flex-col items-center justify-center h-full m-4">
              <CrescentMoonSwirlHandGraphic className="w-full"/>
            </div>
          </FancyFrameTarotFrame>
          <ScheduleItem
            frame={BeadCurtainTarotFrame}
            startDateTime={new Date("2023-06-02T16:00:00.000-05:00")}
            description=""
            offline
            className='animation-delay-1500'
          />
        </div>
    </div>
  )
}
