import { useState} from "react";
import {Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Link from "./Link";
import { SelectedPage } from "@/shared/types"
import useMediaQuery from "@/hooks/useMediaQuery";
import  logo  from "@/assets/cleaning-logo.png";
type Props = { 
    isTopOfPage: boolean,
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void
}

const Navbar = ({isTopOfPage, selectedPage, setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between";
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
    const navbarBackground = isTopOfPage ? "" : "bg-teal-100 drop-shadow";
    

  return (
    <nav>
        <div
            className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6 h-24`}>
                <div className={`${flexBetween} w-5/6 mx-auto`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                   <img className={`${flexBetween} pt-10 `}src={logo} alt="logo"/>
                    {isAboveMediumScreens ?
                        <div className={`${flexBetween} gap-8 `}>
                        <Link 
                         page="Home"
                         selectedPage={selectedPage}
                         setSelectedPage={setSelectedPage} />
                        <Link 
                         page="About"
                         selectedPage={selectedPage}
                         setSelectedPage={setSelectedPage}/>
                        <Link 
                         page="Contact"
                         selectedPage={selectedPage}
                         setSelectedPage={setSelectedPage}/>
                        <Link 
                         page="Reviews"
                         selectedPage={selectedPage}
                         setSelectedPage={setSelectedPage}/>
                        </div>
                       : (
                        <button
                         className="rounded-full bg-sky-400 p-2"
                         onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <Bars3Icon className="h-6 w-6 text-white"/>
                         </button>
                       ) }
                    </div>
                </div>
        </div>
        {!isAboveMediumScreens && isMenuToggled && (
            <div className="fixed bg-stone-300 right-0 bottom-0 w-[300px] h-full z-30">
                {/* Close Icon */}
                <div className="flex justify-end p-12">
                    <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                        <XMarkIcon className="h-6 w-6 text-gray-400"/>
                    </button>
                </div>

                <div className={`${flexBetween}  gap-10 flex-col text-2xl`}>
                        <Link 
                         page="Home"
                         selectedPage={selectedPage}
                         setSelectedPage={setSelectedPage} />
                        <Link 
                         page="About"
                         selectedPage={selectedPage}
                         setSelectedPage={setSelectedPage}/>
                        <Link 
                         page="Contact"
                         selectedPage={selectedPage}
                         setSelectedPage={setSelectedPage}/>
                        <Link 
                         page="Reviews"
                         selectedPage={selectedPage}
                         setSelectedPage={setSelectedPage}/>
                        </div>
            </div>
        )}
    </nav>
  )
}

export default Navbar









// type Props = {}

// const Navbar = (props: Props) => {
//     const flexBetween = "flex items-center justify-between"
//   return (
//     <nav>
//         <div
//             className={`${flexBetween} top-0 z-30 w-full py-6`}>
                
//         </div>
//     </nav>
//   )
// }

// export default Navbar


