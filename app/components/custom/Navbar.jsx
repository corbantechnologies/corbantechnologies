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
    <div className={`flex fixed w-full text-white ${active ? 'bg-black/45 backdrop-blur-sm ':''} px-4 md:px-8 bg-dark z-50 justify-between items-center py-4`}>
        <div>
        <h1 className="text-2xl tracking-wider -mb-2 md:text-4xl text-center"><b className="text-primary">C</b>orban</h1>
        <span className="ml-1">Technologies</span>
        </div>
        <button onClick={()=>setMenuOpen(prev=>!prev)} className="md:hidden border border-white border-opacity-30 size-8 inline-flex justify-center items-center rounded-lg">
      {menuOpen ?
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 7l10 10M7 17L17 7"/></svg>      
        :
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-5 -7 24 24"><path fill="currentColor" d="M1 0h5a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2m7 8h5a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2M1 4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2"/></svg>
      }
      </button>
        <ul className="hidden md:flex gap-8 items-center">
            {links.map((link)=>(
                <li key={link.id} className="navLink">
                    <a href={link.href}>{link.title}</a>
                </li>
            ))}
        </ul>
                <button className="hidden md:block bg-primary text-white rounded-full px-4 py-2">
                Get in Touch
                </button>
        {menuOpen && <ul className={`absolute w-[80vw] pl-6 top-[80px] h-[100vh] bg-dark z-50 transition-all md:hidden ${menuOpen ? 'left-0' :'-left-[1000px]'}`}>
            {links.map((link)=>(
                <li key={link.id} className="py-3" onClick={()=>setMenuOpen(false)}>
                    <a href={link.href}>{link.title}</a>
                </li>
            ))}
            <li>
                <button className="border rounded-lg px-4 py-2">Get in touch</button>
            </li>
        </ul>}
    </div>
  )
}

export default Navbar