import React from 'react'

function SwitchNav() {
  return (
    <div className='switch-nav flex justify-between items-center px-10'>
        <div className="switch-nav-left">
            <img src="/assets/profile.png" alt="" />
        </div>
        <div className="switch-nav-mid">
            <img src="/assets/switch_nav_mid.png" alt="" />
        </div>
        <div className="switch-nav-right flex gap-10 items-center">
            <h4 className="switch-nav-battery">11:54 PM</h4>
            <img src="/assets/wifi.svg" alt="" />
            <img src="/assets/battery.svg" alt="" />
        </div>
    </div>
  )
}

export default SwitchNav