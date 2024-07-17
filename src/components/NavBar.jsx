function NavBar() {
  return (
    <nav className='text-white flex w-screen p-4 items-center justify-between'>
        <div className="nav-left flex items-center text-lg gap-20 w-1/3">
            <div className="nav-games flex items-center">
                <img src="/assets/games.png" alt="" />
                <h4>Games</h4>
            </div>
            <div className="nav-store flex items-center">
                <img src="/assets/store.png" alt="" />
                <h4>Store</h4>
            </div>
            <div className="search flex items-center justify-center bg-[#1c1d23] px-10 h-10 rounded-[30px] border border-[#32353c]">
                <img src="/assets/search_left.png" alt="" />
                <input type="text" placeholder='Search Games...' className="bg-transparent text-sm px-3 focus:outline-none hover:outline-none" />
                <img src="/assets/search_right.png" alt="" />
            </div>
        </div>
        <div className="nav-mid flex items-center w-1/3 justify-center">
            <img src="/assets/switch_logo.png" alt="" />
        </div>
        <div className="nav-right flex items-center w-1/3 justify-end gap-10">
            <div className="shop">
                <img src="/assets/shopping_bag.png" alt="" />
            </div>
            <div className="nav-gold relative flex pl-2 pr-10 py-1 rounded-3xl bg-[#1c1d23] border border-[#32353c]">
                <img src="/assets/gold_coin.png" alt="" />
                <h4 className='pl-2'>69.000000</h4>
                <img src="/assets/plus.png" className='absolute right-0 top-1/2 -translate-y-1/2 scale-150 translate-x-1' alt="" />
            </div>
            <div className="profile flex">
                <img src="/assets/profile.png" alt="" />
            </div>
        </div>
    </nav>
  )
}

export default NavBar