import { useState } from 'react'
import './App.css'

function App() {
    return (
      <div className="w-full h-full starry text-center flex flex-col items-center">
        <h1 className='glow animate-pulse-slow text-9xl text-tarot-50'>Weekly Stream Schedule</h1>
        <p className="text-2xl text-tarot-300 mb-12">
          Twitch.tv/lewn_atic
        </p>
        <div className="w-11/12 h-4/6 flex flex-row items-center space-x-6 mt-5">
          <div className="border-red-500 border-2 flex-grow h-3/4 self-start">
            card1
          </div>
          <div className="border-red-500 border-2 flex-grow h-3/4 self-end">
            card2
          </div>
          <div className="border-red-500 border-2 flex-grow h-3/4 self-start">
            card3
          </div>
          <div className="border-red-500 border-2 flex-grow h-3/4 self-end">
            card4
          </div>
          <div className="border-red-500 border-2 flex-grow h-3/4 self-start">
            card5
          </div>
        </div>
      </div>
    )
}

export default App
