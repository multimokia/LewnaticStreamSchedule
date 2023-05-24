import './App.css'
import { TarotCard } from './components/TarotCard'
import { ArchTarotFrame } from './components/TarotFrames/ArchTarotFrame'
import { BeadCurtainTarotFrame } from './components/TarotFrames/BeadCurtainTarotFrame'
import { CrescentTarotFrame } from './components/TarotFrames/CrescentTarotFrame'
import { FancyFrameTarotFrame } from './components/TarotFrames/FancyFrameTarotFrame'
import { SoundwaveTarotFrame } from './components/TarotFrames/SoundwaveTarotFrame'

function App() {
    return (
      <div className="w-full h-full starry text-center flex flex-col items-center">
        <h1 className='glow animate-pulse-slow text-9xl text-tarot-50'>Weekly Stream Schedule</h1>
        <p className="text-2xl text-tarot-300 mb-12">
          Twitch.tv/lewn_atic
        </p>
        <div className="w-11/12 h-4/6 flex flex-row items-center space-x-7 mt-5">
          <TarotCard className="self-start flex-grow" frame={<CrescentTarotFrame className="fill-tarot-300 w-full hover:fill-tarot-100 transition-colors"/>}>
            <p>card1</p>
          </TarotCard>
          <TarotCard className="self-end flex-grow" frame={<ArchTarotFrame className="fill-tarot-300 w-full"/>}>
            <p>card2</p>
          </TarotCard>
          <TarotCard className="self-start flex-grow" frame={<SoundwaveTarotFrame className="fill-tarot-300 w-full"/>}>
            <p>card3</p>
          </TarotCard>
          <TarotCard className="self-end flex-grow" frame={<FancyFrameTarotFrame className="fill-tarot-300 w-full"/>}>
            card4
          </TarotCard>
          <TarotCard className="self-start flex-grow" frame={<BeadCurtainTarotFrame className="fill-tarot-300 w-full"/>}>
            card5
          </TarotCard>
        </div>
      </div>
    )
}

export default App
