import './App.css'
import { ArchTarotFrame } from './components/TarotFrames/ArchTarotFrame'
import { BeadCurtainTarotFrame } from './components/TarotFrames/BeadCurtainTarotFrame'
import { CrescentTarotFrame } from './components/TarotFrames/CrescentTarotFrame'
import { FancyFrameTarotFrame } from './components/TarotFrames/FancyFrameTarotFrame'
import { SoundwaveTarotFrame } from './components/TarotFrames/SoundwaveTarotFrame'

// Image imports
import CrescentMoonSwirlHand from './assets/card_inners/crescent_moon_swirl_hand.png'
import { SparkingHandsGraphic } from './components/Graphics/SparklingHandsGraphic'
import { TarotCardsGraphic } from './components/Graphics/TarotCardsGraphic'

function App() {
    return (
      <div className="w-full h-full starry text-center flex flex-col items-center font-BlackMango">
        <h1 className="glow animate-pulse-slow text-9xl text-tarot-50 font-semibold">Weekly Stream Schedule</h1>
        <p className="text-2xl text-tarot-300 mb-12 font-BlackMango font-normal">
          Twitch.tv/lewn_atic
        </p>
        <div className="w-11/12 h-4/6 flex flex-row items-center space-x-7 mt-5">
          <CrescentTarotFrame
            className="
              self-start
              flex-grow
              fill-tarot-300
              w-full
              animate-hover-slow
              hover:fill-tarot-500
              transition-colors
              animation-delay-900
            "
          >
            <div className="flex flex-col items-center justify-center h-full m-4">
              <p className="text-6xl text-tarot-50 glow">Tues</p>
              <p className="text-2xl text-tarot-100">May 23<sup>rd</sup> at 5PM EST</p>
              <div className="border-t border-tarot-300 w-3/4 py-5"/>

              <p className="text-3xl">Dark Souls 2 with @Mr_Zhixx</p>
            </div>
          </CrescentTarotFrame>
          <ArchTarotFrame
            className="
              self-end
              flex-grow
              fill-tarot-300
              w-full
              animate-hover-slow
              hover:fill-tarot-500
              transition-colors
              animation-delay-50
            "
          >
            <div className="flex flex-col items-center justify-center h-full m-4">
              <TarotCardsGraphic className="w-2/4"/>
              <SparkingHandsGraphic className="w-3/4"/>
            </div>
          </ArchTarotFrame>
          <SoundwaveTarotFrame
            className="
              self-start
              flex-grow
              fill-tarot-300
              w-full
              animate-hover-slow
              hover:fill-tarot-500
              transition-colors
              animation-delay-300
            "
          >
            <div className="flex flex-col items-center justify-center h-full m-4">
              <p className="text-6xl text-tarot-50 glow">Wed</p>
              <p className="text-2xl text-tarot-100">May 24<sup>th</sup> at 5PM EST</p>
              <div className="border-t border-tarot-300 w-3/4 py-5"/>

              <p className="text-3xl">Hokai Star Rail<br/>First Time!</p>
            </div>
          </SoundwaveTarotFrame>
          <FancyFrameTarotFrame
            className="
              fill-tarot-300
              w-full
              self-end
              flex-grow
              animate-hover-slow
              hover:fill-tarot-500
              transition-colors
              animation-delay-700
            "
          >
            <div className="flex flex-col items-center justify-center h-full m-4">
              <img src={CrescentMoonSwirlHand} alt="Crescent Moon Swirl Hand" className="w-3/4"/>
            </div>
          </FancyFrameTarotFrame>
          <BeadCurtainTarotFrame
            className="
              self-start
              flex-grow
              fill-tarot-300
              w-full
              animate-hover-slow
              hover:fill-tarot-500
              transition-colors
              animation-delay-1500
            "
          >
            <div className="flex flex-col items-center justify-center h-full m-4">
              <p className="text-6xl text-tarot-50 glow">Sat</p>
              <p className="text-2xl text-tarot-100">May 27<sup>th</sup> at 5PM EST</p>
              <div className="border-t border-tarot-300 w-3/4 py-5"/>
              <p className="text-3xl">Slime Rancher</p>
            </div>
          </BeadCurtainTarotFrame>
        </div>
      </div>
    )
}

export default App
