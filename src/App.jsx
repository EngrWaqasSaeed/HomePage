import React, { useEffect, useState } from 'react'
import Backgound from './Components/Background/Backgound'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'

const App = () => {
  let heroData = [
    { text1: 'Dive into', text2: 'What You Love' },
    { text1: 'Follow ', text2: 'your passions' },
    { text1: 'Give in to', text2: 'your passions' }
  ]
  const [heroCount, setHeroCount] = useState(0)
  const [playStatus, setPlayStatus] = useState(false)
  useEffect(() => {
    setInterval(() => {
      setHeroCount(count => {
        return count === 2 ? 0 : count + 1
      })
    }, 3000)
  }, [])
  return (
    <div>
      <Backgound playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        heroData={heroData[heroCount]}
        playStatus={playStatus}
        setPlayStatus={setPlayStatus}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
      />
    </div>
  )
}

export default App
