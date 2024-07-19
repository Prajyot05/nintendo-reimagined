import React from 'react'

function SwitchNav() {
  return (
    <div className='switch-nav flex justify-between items-center px-10 h-[10vh] w-full z-30 absolute top-0 left-0 bg-black bg-opacity-55'>
        <div className="switch-nav-left">
            <img src="/assets/profile.png" alt="" />
        </div>
        {/* <div className="switch-nav-mid">
            <img src="/assets/switch_nav_mid.png" alt="" />
        </div> */}
        <div className="switch-nav-right flex gap-10 items-center">
            <h4 className="switch-nav-battery">11:54 PM</h4>
            <img className='w-[2rem]' src="/assets/wifi.svg" alt="" />
            <img className='w-[2rem]' src="/assets/battery.svg" alt="" />
        </div>
    </div>
  )
}

export default SwitchNav