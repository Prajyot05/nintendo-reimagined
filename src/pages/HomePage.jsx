import React from 'react'
import SwitchContainer from '../components/SwitchContainer'

function HomePage() {
  return (
    <div className='home w-full flex flex-col items-center justify-center p-20 text-white'>
        <h1 className='text-[13rem]'>NINTENDO</h1>
        <SwitchContainer />
    </div>
  )
}

export default HomePage