import Navbar from "@/scenes/navbar";   // Note for self: Notice how you can use @ for paths instead of ./../../ etc. Also note how when referencing a folder with the first file name index you dont have to insert into path
import { useEffect, useState } from "react";
import Home from "@/scenes/home";
import { SelectedPage } from "@/shared/types";
import Benefits from "@/scenes/benefits";
import Contact from "./scenes/contact";
import Reviews from "./scenes/reviews";
function App() {
 const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)

 const [isTopPage, setIsTopOfPage] = useState<boolean>(true);

 useEffect(() => {
  const handleScroll = () => {
    if(window.scrollY === 0) {
      setIsTopOfPage(true)
      setSelectedPage(SelectedPage.Home)
    }
     if(window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  
 }, [])

  return (
    <div className="app">
      <Navbar 
      isTopOfPage={isTopPage}
      selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
     <Home setSelectedPage={setSelectedPage}/>
     <Benefits setSelectedPage={setSelectedPage}/>
     <Contact setSelectedPage={setSelectedPage}/>
     <Reviews setSelectedPage={setSelectedPage}/>
    </div>

    
  )
}

export default App
