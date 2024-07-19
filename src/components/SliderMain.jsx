import React from 'react'

function SliderMain({card_logo, logo, title, description, rating, downloads}) {
  return (
    <div className="content absolute z-10 top-[10vh] w-full h-screen hidden">
          <div className="name text-[6rem] uppercase font-bold opacity-0">
            <div className="slider-main-left">
              <img className='w-[30rem] object-cover' src={logo} alt="" />
            </div>
          </div>
    </div>
  )
}

export default SliderMain