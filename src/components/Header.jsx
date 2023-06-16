import logo from "./../assets/Images/logo.png";

import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";

import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";
import { useState } from "react";



const Header = () => {

  const [toggle, setToggle] = useState(false);


  const avetar = "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745";

  const menu = [
    {
      name: 'HOME',
      icon: HiHome
    },
    {
      name: 'SEARCH',
      icon: HiMagnifyingGlass
    },
    {
      name: 'WATCH LIST',
      icon: HiPlus
    },
    {
      name: 'ORIGINALS',
      icon: HiStar
    },
    {
      name: 'MOVIES',
      icon: HiPlayCircle
    },
    {
      name: 'SERIES',
      icon: HiTv
    }
  ]

  return (
    <div className="flex items-center justify-between p-5 sticky top-0 bg-[#242424]  px-5 py-2 z-[2]">
      <div className="flex gap-8 items-center">
        <img src={logo} className="w-[80px] md:w-[115px] object-cover" />
        <div className="hidden md:flex gap-8">
          {
            menu.map((item) => (
              <HeaderItem name={item.name} Icon={item.icon} key={item.name} />
            ))
          }
        </div>
        <div className="flex gap-3 items-center mt-5 md:hidden">
          {
            menu.map((item, index) => index < 3 && (

              <HeaderItem name={""} Icon={item.icon} key={item.name} />
            ))}

          {/* /movie/550?api_key= */}


          <div onClick={() => setToggle(!toggle)}>
            <HeaderItem name="" Icon={HiDotsVertical} />
            {
              toggle ?

                <div className="absolute mt-2 bg-[#121212] border-[1px] border-gray-700 px-5 py-4 right-0">
                  {
                    menu.map((item, index) => index > 2 && (

                      <HeaderItem name={item.name} Icon={item.icon} />
                    ))}
                </div>
                : null
            }

          </div>
        </div>
      </div>

      <img src={avetar} alt="" className="w-[40px] rounded-full" />

    </div>
  )
}

export default Header;