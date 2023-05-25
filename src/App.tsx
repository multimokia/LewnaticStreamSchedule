import './App.css'
import { ArchTarotFrame } from './components/TarotFrames/ArchTarotFrame'
import { BeadCurtainTarotFrame } from './components/TarotFrames/BeadCurtainTarotFrame'
import { CrescentTarotFrame } from './components/TarotFrames/CrescentTarotFrame'
import { FancyFrameTarotFrame } from './components/TarotFrames/FancyFrameTarotFrame'
import { SoundwaveTarotFrame } from './components/TarotFrames/SoundwaveTarotFrame'

function App() {
    return (
      <div className="w-full h-full starry text-center flex flex-col items-center">
        <h1 className='glow animate-pulse-slow text-9xl text-tarot-50 font-semibold'>Weekly Stream Schedule</h1>
        <p className="text-2xl text-tarot-300 mb-12">
          Twitch.tv/lewn_atic
        </p>
        <div className="w-11/12 h-4/6 flex flex-row items-center space-x-7 mt-5">
          <CrescentTarotFrame className="self-start flex-grow fill-tarot-300 w-full hover:fill-tarot-500 transition-colors">
            <div className="flex flex-col items-center justify-center h-full m-4">
              <p className="text-4xl text-tarot-50 glow">Tues</p>
              <p className="text-2xl text-tarot-100">May 23rd at 5PM EST</p>
            </div>
          </CrescentTarotFrame>
          <ArchTarotFrame className="self-end flex-grow fill-tarot-300 w-full hover:fill-tarot-500 transition-colors">
            <p>card2</p>
          </ArchTarotFrame>
          <SoundwaveTarotFrame className="self-start flex-grow fill-tarot-300 w-full hover:fill-tarot-500 transition-colors">
            <p>card3</p>
          </SoundwaveTarotFrame>
          <FancyFrameTarotFrame className="fill-tarot-300 w-full self-end flex-grow hover:fill-tarot-500 transition-colors">
            Card4
          </FancyFrameTarotFrame>
          <BeadCurtainTarotFrame className="self-start flex-grow fill-tarot-300 w-full hover:fill-tarot-500 transition-colors">
            card5
          </BeadCurtainTarotFrame>
        </div>
      </div>
    )
}

export default App
