'use client';

import { Link } from "@/data/do";
import { useState } from "react";
import { PhoneArrowUpRightIcon, Bars4Icon } from "@heroicons/react/16/solid";

interface NavMenuProps {
    links: Link[];
}

export default function NavMenu({ links }: NavMenuProps) {
    const [activeLink, setActiveLink] = useState<string | null>(links[0].url);
    const onClick = (link: Link) => {
        setActiveLink(link.url);
        window.location.href = link.url;
    };
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
                        <PhoneArrowUpRightIcon className="size-6"/>
                        <p>For business call <a href="tel:+255744550667">+255-744-550-667</a></p>
                    </div>
                </div>
            </div>
            {/* <div className="flex. items-center justify-end pt-5 fixed top-0 bg-slate-500">
                <Bars4Icon className="size-6 cursor-pointer fixed top-10 z-50 right-10"/>
                <div className="w-full h-dvh top-0 z-40 mt-12 justify-center items-center text-center">
                    <ul className="">
                        {links.map((link) => (
                            <li key={link.url} className={`basis-1/${links.length} text-center justify-center pl-4 pr-4 pt-2 pb-2 cursor-pointer ${activeLink === link.url ? 'active-link' : ''}`} onClick={() => onClick(link)}>{link.name}</li>
                        ))}
                    </ul>
                </div>
            </div> */}
        </div>

    );
}