import { useState } from "react"
import { cancel, logo, menu } from "../assets"
import { navigationLinks } from "../utils/constants"
import { styles } from "../utils/style"

function Navbar() {

  const [toggleNav, setToggleNav] = useState(false)
  const [active, setActive] = useState('home')

  const toggleHandler = () => setToggleNav(prev => !prev)
  const activeHandler = (id) => setActive(id)

  return (
    <div className={`w-full py-6 ${styles.flexBetween}`}>
      {/* Logo */}
      <img src={logo} alt="Logo" className="w-[130px] h-[35px] cursor-pointer" />

      {/* Navigation link */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navigationLinks.map((nav, idx) => (
          <li 
            key={nav.id}
            className={`
              font-montserrat
              font-normal
              cursor-pointer
              text-[16px]
              ${idx === navigationLinks.length - 1 ? 'mr-0' : 'mr-10' }
              ${active === nav.id ? 'text-white' : 'text-lightWhite'}
              hover:text-white
              transition-all
              duration-500
            `}
            onClick={() => activeHandler(nav.id)}
          >
            {nav.title}
          </li>
        ))}
      </ul>

      {/* Navigation btn */}
      <div className={'sm:hidden flex flex-1 justify-end items-center'}>
        <img src={toggleNav ? cancel : menu} alt="navbarIcon" className="h-[30px] w-[30px] object-contain" onClick={toggleHandler}/>

        <div className={`${!toggleNav ? 'hidden' : 'flex'} p-6 absolute top-20 right-0 left-0 w-full sidebar bg-black-gradient`}>
        <ul className="list-none flex justify-center items-center flex-1">
          {navigationLinks.map((nav, idx) => (
            <li 
              key={nav.id}
              className={`
                font-montserrat
                font-normal
                cursor-pointer
                text-[16px]
                ${idx === navigationLinks.length - 1 ? 'mr-0' : 'mr-10' }
                ${active === nav.id ? 'text-white' : 'text-lightWhite'}
                hover:text-lightWhite
                transition-all
                duration-500
              `}
              onClick={() => activeHandler(nav.id)}
            >
              {nav.title}
            </li>
          ))}
        </ul>
        </div>
      </div>

    </div>
  )
}

export default Navbar