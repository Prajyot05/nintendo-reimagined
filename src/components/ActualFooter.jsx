import React from 'react'

function ActualFooter() {
    return (
        <div className="actual-footer flex flex-col items-center justify-between w-full h-full">
            <div className="actual-footer-top">
                <img src="/assets/nintendo_og_logo.svg" alt="" />
            </div>
            <div className="actual-footer-mid w-full items-start justify-between">
                <div className="footer-social-container">
                    <div className="gradient-line w-full h-[1.5px] rounded-full"></div>
                    <div className="footer-social flex gap-5 pt-5">
                        <img src="/assets/footer_facebook.svg" alt="" />
                        <img src="/assets/footer_instagram.svg" alt="" />
                        <img src="/assets/footer_x.svg" alt="" />
                        <img src="/assets/footer_youtube.svg" alt="" />
                    </div>
                </div>
                <div className="footer-links flex gap-5 md:gap-8 lg:gap-32 text-xl text-gray-400">
                    <div className="footer-links-left flex flex-col gap-3">
                        <h4>About Nintendo</h4>
                        <h4>Shop</h4>
                        <h4>Support</h4>
                    </div>
                    <div className="footer-links-right flex flex-col gap-3">
                        <h4>Parents</h4>
                        <h4>Privacy</h4>
                        <h4>Community</h4>
                    </div>
                </div>
                <div className="footer-certificate flex flex-col items-center">
                    <div className="gradient-line w-[15rem] h-[2px] rotate-180"></div>
                    <img className='w-[4rem] pt-10' src="/assets/footer-certificate.svg" alt="" />
                </div>
            </div>
            <div className="actual-footer-mid-mobile w-full items-center">
                <div className="footer-links flex gap-20 text-xl text-gray-400">
                    <div className="footer-links-left flex flex-col gap-3">
                        <h4>About Nintendo</h4>
                        <h4>Shop</h4>
                        <h4>Support</h4>
                    </div>
                    <div className="footer-links-right flex flex-col gap-3">
                        <h4>Parents</h4>
                        <h4>Privacy</h4>
                        <h4>Community</h4>
                    </div>
                </div>
                <div className="footer-mobile-down flex">
                <div className="footer-social-container">
                    <div className="gradient-line w-full h-[1.5px] rounded-full"></div>
                    <div className="footer-social flex gap-5 pt-5">
                        <img src="/assets/footer_facebook.svg" alt="" />
                        <img src="/assets/footer_instagram.svg" alt="" />
                        <img src="/assets/footer_x.svg" alt="" />
                        <img src="/assets/footer_youtube.svg" alt="" />
                    </div>
                </div>
                <div className="footer-certificate flex flex-col items-center">
                    <div className="gradient-line w-[15rem] h-[2px] rotate-180"></div>
                    <img className='w-[4rem] pt-10' src="/assets/footer-certificate.svg" alt="" />
                </div>
                </div>
            </div>
            <div className="actual-footer-bottom hidden lg:flex items-center text-[0.7rem] justify-between text-gray-300 w-full py-2 px-10">
                <div className="footer-bottom-left">
                © Nintendo. Games are property of their respective owners. Nintendo of America Inc. Headquarters are in Redmond, Washington, USA
                </div>
                {/* <div className="footer-bottom-mid"></div> */}
                <div className="footer-bottom-right">English(United States)</div>
            </div>
        </div>
    )
}

export default ActualFooter