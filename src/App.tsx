import { TentaclesGraphic } from '@/components/Graphics/TentaclesGraphic'
import './App.css'
import { ScheduleContent } from './components/Layers/ScheduleContent'
import { SparklesGraphic } from '@/components/Graphics/SparklesGraphic'
import { CircleSwirlGraphic } from '@/components/Graphics/CircleSwirlGraphic'
import { StarSwirlGraphic } from '@/components/Graphics/StarSwirlGraphic'

function App() {
  return (
    <div className="w-full h-full starry text-center flex flex-col items-center font-BlackMango">
      <div className="w-full h-full">
        <TentaclesGraphic className="fixed w-1/2 h-1/2 -rotate-45 -left-1/4 opacity-75"/>
        <div className="opacity-20">
          <SparklesGraphic className="fixed w-1/2 h-1/2 mt-10 rotate-90 fill-tarot-300 animate-pulse-slow"/>
          <SparklesGraphic className="fixed w-1/2 h-1/2 mt-10 right-10 -rotate-90 fill-tarot-300 animate-pulse-slow animation-delay-1000"/>
          <SparklesGraphic className="fixed w-1/2 h-1/2 -bottom-32 left-96 -rotate-90 fill-tarot-300 animate-pulse-slow animation-delay-1500"/>
        </div>
        <CircleSwirlGraphic className="fixed w-1/2 h-1/2 -bottom-1/4 -left-1/4 opacity-75"/>
        <StarSwirlGraphic className="fixed w-1/2 h-1/2 -bottom-1/4 -right-1/4 opacity-75"/>
      </div>
      <ScheduleContent />
    </div>
  )
}

export default App
