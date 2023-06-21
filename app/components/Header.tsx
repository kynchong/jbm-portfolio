// Header.js
import { Dispatch, SetStateAction } from "react";

import { motion } from "framer-motion";
import Image from "next/image";
import chevronDown from "../../public/svg/chevron-down.svg";
import chevronUp from "../../public/svg/chevron-up.svg";

interface HeaderProps {
	sections: any;
	currentRef: string;
	handleNavClick: Dispatch<SetStateAction<string>>;
}

const buildLink = (currentRef: string, section: any, handleNavClick: Dispatch<SetStateAction<string>>) => {
	return (
		<li key={section} onClick={() => handleNavClick(section)}>
			<motion.div className="px-1 rounded-sm cursor-pointer" layout initial={false} animate={{ border: currentRef === section ? "1px solid rgba(0,0,0,1)" : "1px solid rgba(0,0,0,0)" }}>
				{section.charAt(0).toUpperCase() + section.slice(1)}
			</motion.div>
		</li>
	);
};

export default function Header({ sections: sections, currentRef: currentRef, handleNavClick }: HeaderProps) {
	return (
		<header className="fixed z-10 p-8">
			{/* Navigation Bar */}
			<h1 className="text-2xl font-bold">Jonathan Moore</h1>
			<nav className="mt-8">
				<ul className="text-text | flex flex-col justify-between items-start gap-2">{Object.values(sections).map((section: any) => buildLink(currentRef, section, handleNavClick))}</ul>
			</nav>

			{/* Next page indicator */}

			<div className="fixed inset-0 pointer-events-none | flex flex-col justify-end items-center border">
				<button
					className={`p-2 pointer-events-auto ${currentRef === sections.hero ? "animate-bounce" : "animate-none"}`}
					onClick={() => (currentRef === sections.hero ? handleNavClick(sections.work) : handleNavClick(sections.hero))}>
					{currentRef === sections.hero ? <Image src={currentRef === sections.hero ? chevronDown : chevronUp} alt="down arrow" /> : <p>Back to Top?</p>}
				</button>
			</div>
		</header>
	);
}

// down arrow navigation until last page
