import React from 'react'
import Switch from '../components/Switch'

function HomePage() {
  return (
    <div className='home w-full flex flex-col items-center justify-center p-20 text-white'>
        <h1 className='text-[13rem]'>NINTENDO</h1>
        <Switch />
    </div>
  )
}

export default HomePage