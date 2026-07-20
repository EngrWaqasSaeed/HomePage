import React, { useState } from 'react'
import Backgound from './Components/Background/Backgound'
import Navbar from './Components/Navbar/Navbar'

const App = () => {
  let heroData = [
    { text1: 'Dive into', text2: 'What You Love' },
    { text1: 'Follow ', text2: 'your passions' },
    { text1: 'Give in to', text2: 'your passions' }
  ]
  const [heroCount, setHeroCount] = useState(2)
  const [playStatus, setPlayStatus] = useState(true)
  return (
    <div>
      <Backgound playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
    </div>
  )
}

export default App
