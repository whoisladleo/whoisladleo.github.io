'use client';

import { NavLink } from "@/data/do";
import { useState } from "react";
import { 
    Bars3Icon, 
    AtSymbolIcon 
} from "@heroicons/react/16/solid";
import Link from "next/link";

interface NavMenuProps {
    links: NavLink[];
}

export default function NavMenu({ links }: NavMenuProps) {
    const [activeLink, setActiveLink] = useState<string | null>(links[0].url);
    const [isOpen, setIsOpen] = useState(false);

    const onClick = (link: NavLink) => {
        setActiveLink(link.url);
        setIsOpen(false);
        window.location.href = link.url;
    };

    const sendMail = () => {
        console.log('sending mail');
        window.location.href = "mailto:rwelamila.jr@gmail.com";
    };


    if(typeof window !== 'undefined') {
        window.onscroll = () => {
            const sections = document.querySelectorAll('.min-h-screen');
            if (!sections) return;
            sections.forEach((section) => {
                const sectionTop = (section as HTMLElement).offsetTop - 60;
                if(pageYOffset >= sectionTop) {
                    setActiveLink('#'+section.getAttribute('id'));
                }
            });
        };
    }

    
    return (
        <div className="relative overflow-hidden w-full">  
            <div className="hidden md:flex flex-row pt-10 pl-10 pr-10 fixed top-0 w-full navbar">
                <div className="flex flex-row items-center w-1/2 gap-6">
                    {links.map((link) => (
                        <div key={link.url} className={`basis-1/${links.length} text-center justify-center pl-4 pr-4 pt-2 pb-2 cursor-pointer ${activeLink === link.url ? 'active-link' : ''}`} onClick={() => onClick(link)}>{link.name}</div>
                    ))}
                </div> 
                <div className="flex justify-end w-1/2">
                    <div className="flex items-center justify-end gap-2 ">
                        <AtSymbolIcon className="size-6"/>
                        <a href="#" onClick={sendMail}>rwelamila.jr[at]gmail.com</a>
                    </div>
                </div>
            </div>  
            <div className="md:hidden flex w-full items-center justify-end pt-5 fixed top-0">
                <Bars3Icon className="size-10 cursor-pointer fixed top-10 right-10 z-10" onClick={() => setIsOpen(!isOpen)}/>
                <div className={`w-full h-dvh top-0 pt-20 fixed justify-center items-center text-center bg-background ${isOpen ? 'block animate-slide-in' : 'hidden'}`}>
                    <ul className="mt-10">
                        {links.map((link) => (
                            <li key={link.url} className={`basis-1/${links.length} text-center justify-center pl-4 pr-4 pt-2 pb-2 cursor-pointer ${activeLink === link.url ? 'active-link' : ''}`} onClick={() => onClick(link)}>{link.name} </li>
                        ))}
                    </ul>
                        <div className="flex items-center justify-center gap-2 mt-4">
                            <AtSymbolIcon className="size-6"/>
                            <Link href="#" onClick={sendMail}> rwelamila.jr[at]gmail.com</Link>
                        </div>

                </div>
            </div>
        </div>
    );
}