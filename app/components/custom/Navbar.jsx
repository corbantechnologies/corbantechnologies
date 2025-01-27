'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  {id:1, title:'Company', href:'#company'},
  {id:2, title:'Services', href:'#services'},
  {id:3, title:'Our Work', href:'#work'},
  {id:4, title:'Blogs', href:'#blogs'},
  {id:5, title:'Get a Quote', href:'#quote'},
  {id:6, title:'FAQ', href:'#faq'},
]
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const[active, setActive] = useState(false)

    const isActive = ()=>{
        window.scrollY > 20 ? setActive(true) : setActive(false)
    }
    
    useEffect(()=>{
        window.addEventListener("scroll", isActive);
        return ()=>{
            window.removeEventListener("scroll", isActive);
        };
    },[])

  return (
    <div className={`flex fixed w-full md:border-none ${active ? ' bg-black/45 backdrop-blur-sm text-white ':'bg-white '} px-4 lg:px-8 bg-dark z-50 justify-between items-center py-2`}>
        <Image src='/logoSmNoBg.png' alt="logo" width={150} height={80} className="w-[120px] md:w-[150px]" />
        <button onClick={()=>setMenuOpen(prev=>!prev)} className={`lg:hidden border ${active ? 'border-white ' :'border-black '} border-opacity-30 size-8 inline-flex justify-center items-center rounded-lg`}>
      {menuOpen ?
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 7l10 10M7 17L17 7"/></svg>      
        :
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="-5 -7 24 24"><path fill="currentColor" d="M1 0h5a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2m7 8h5a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2M1 4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2"/></svg>
      }
      </button>
        <ul className="hidden lg:flex gap-8 items-center">
            {links.map((link)=>(
                <li key={link.id} className="navLink">
                    <a href={link.href}>{link.title}</a>
                </li>
            ))}
        </ul>
                <button className="hidden lg:block bg-primary text-white rounded-full px-4 py-2">
                Get in Touch
                </button>
        {menuOpen && <ul className={`absolute w-[80vw] pl-8 top-14 md:top-16 h-[100vh] bg-white text-black z-50 transition-all lg:hidden ${menuOpen ? 'left-0' :'-left-[1000px]'}`}>
            {links.map((link)=>(
                <li key={link.id} className="py-3" onClick={()=>setMenuOpen(false)}>
                    <a href={link.href}>{link.title}</a>
                </li>
            ))}
            <li>
                <button className="bg-primary text-white rounded-full px-4 py-2">Get in touch</button>
            </li>
        </ul>}
    </div>
  )
}

export default Navbar