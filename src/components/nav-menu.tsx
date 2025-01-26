'use client';

import { Link } from "@/data/do";
import { useState } from "react";
import { PhoneArrowUpRightIcon } from "@heroicons/react/16/solid";

interface NavMenuProps {
    links: Link[];
}

export default function NavMenu({ links }: NavMenuProps) {
    const [activeLink, setActiveLink] = useState<string | null>(links[0].url);
    const onClick = (link: Link) => {
        setActiveLink(link.url);
        // window.location.href = link.url;
    };
    return (
        <div className="flex flex-row pt-10 pl-10 pr-10">
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

    );
}