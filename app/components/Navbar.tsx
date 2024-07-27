import {Link} from "react-scroll/modules";
import React, { useState } from "react";
 import {useTheme} from "next-themes";
import {RiMoonFill,RiSunLine} from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io"

interface NavItem{
    label:string,
    page:string,
}
const NAV_ITEMS: Array<NavItem> =[
    {
        label:"Home",
        page:"home"
    },
    {
        label:"About",
        page:"about"
    },
    {
        label:"Projects",
        page:"projects"
    },
]
const Navbar = () => {
    const { systemTheme, theme, setTheme } = useTheme()
    const currentTheme = theme === "system" ? systemTheme : theme
    const [navbar, setNavbar] = useState(false)
  return (
  <header className={`w-full mx-auto px-[1.4rem] md:px-[1.8rem] lg:px-20 fixed top-0 z-50 shadow ${currentTheme === 'dark' && 'bg-[#000000] z-50' } ${currentTheme === 'light' && 'bg-[rgb(255,255,255,0.9)] z-50' }  z-50 dark:bg-[#000000] dark:border-b dark:border-stone-600`}>
    <nav className="justify-between md:items-center md:flex">
      <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <div className="md:py-2 md:block">
              <Link to='home'>
                <h2 className=" cursor-pointer text-2xl font-bold">
                  Hacky<span className="text-[#ff0404]">Raji</span>
                </h2>
              </Link>
            </div>
            <div className="md:hidden">
                <button onClick={()=>setNavbar(pre=>!pre)}>{navbar ? <IoMdClose size={25}/> : <IoMdMenu size={25}/> }</button>
            </div>
        </div>
      </div>

      <div>

       <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >

        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {NAV_ITEMS.map((item, index)=>{
                return(
                <li 
                className="cursor-pointer"                     
                key={index}
                onClick={() => setNavbar(!navbar)}>
                    
              <Link
                to={item.page}
                className="block lg:inline-block   hover:text-neutral-500 dark:text-neutral-100"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}>
                {item.label}
              </Link>
                </li>
                )
            })}
            {currentTheme === 'dark' ? 
                <button onClick={()=>{setTheme("light")}}
                className="bg-slate-100 p-2 rounded-xl"
                >
                    <RiSunLine size={25} color="black"/>
                </button>
            :
            <button 
            onClick={()=>{setTheme("dark")}}
            className="bg-slate-100 p-2 rounded-xl"
            >
                <RiMoonFill size={25}/>
            </button>
            }
        </ul>
      </div>
      </div>
    </nav>
  </header>
  )
};

export default Navbar;
