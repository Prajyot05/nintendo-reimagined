import React from 'react'

function SliderMain({logo, title, description, rating, downloads}) {
  return (
    <div className="content absolute z-10 lg:top-[10vh] w-full min-h-screen hidden">
          <div className="slider-info-container flex gap-10 items-start justify-between p-10 font-bold opacity-0">
            <div className="slider-main-left w-[40%]">
              <div className="slider-main-left-img w-fit rounded-3xl overflow-hidden"><img className='w-[30rem] h-[30rem] object-cover object-top' src={logo} alt="" /></div>            
            </div>
            <div className="slider-main-right flex flex-col items-start w-[60%] text-white">
              <h1 className='text-5xl text-center uppercase'>{title}</h1>
              <p>{description}</p>
              <div className="rating-downloads scale-90 flex gap-10">
                <div className="rating-btn flex gap-5 items-center bg-gray-400 hover:bg-opacity-20 bg-opacity-50 px-8 py-1 rounded-full transition-colors ease-in-out duration-200">
                  <img className='scale-75' src="/assets/rating-btn.svg" alt="" />
                  <h3 className='text-xl'>{rating}</h3>
                </div>
                <div className="downloads-btn flex gap-5 items-center bg-gray-400 hover:bg-opacity-20 bg-opacity-50 px-8 py-1 rounded-full transition-colors ease-in-out duration-200">
                  <img className='scale-75' src="/assets/download-btn.svg" alt="" />
                  <h3 className='text-xl'>{downloads}</h3>
                </div>
              </div>
              <div className="direct-download-container flex w-full justify-start gap-10">
                <div className='direct-download-btn w-fit flex items-center px-16 rounded-3xl bg-red-500 hover:bg-red-600 transition-colors ease-in-out duration-200'>
                  <img src="/assets/direct-download-btn.svg" alt="" />
                  <h3>Direct Download</h3>
                </div>
                <div className='esrb'>
                  <img src="/assets/esrb.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default SliderMain