// Header.js
import { Dispatch, SetStateAction } from "react";
import { headingFont } from "../utils/fonts";

import { motion } from "framer-motion";
import Image from "next/image";
import chevronDown from "../../public/svg/chevron-down.svg";
import chevronUp from "../../public/svg/chevron-up.svg";

interface HeaderProps {
	sections: any;
	currentRef: string;
	handleNavClick: Dispatch<SetStateAction<string>>;
}

export default function Header({ sections: sections, currentRef: currentRef, handleNavClick }: HeaderProps) {
	return (
		<header className="fixed z-10 p-8">
			{/* Navigation Bar */}
			<h1 className={`${headingFont.className} text-2xl font-bold`}>Jonathan Moore</h1>
			<nav className="mt-8">
				<ul className="text-text | flex flex-col justify-between items-start">
					<li
						className={`p-1 hover:font-semibold cursor-pointer ${currentRef === sections.hero ? "border-text" : "border-transparent"} border rounded-sm`}
						onClick={() => handleNavClick(sections.hero)}
					>
						Home
					</li>
					<li
						className={`p-1 hover:font-semibold cursor-pointer ${currentRef === sections.work ? "border-text" : "border-transparent"} border rounded-sm`}
						onClick={() => handleNavClick(sections.work)}
					>
						Work
					</li>
					<li
						className={`p-1 hover:font-semibold cursor-pointer ${currentRef === sections.about ? "border-text" : "border-transparent"} border rounded-sm`}
						onClick={() => handleNavClick(sections.about)}
					>
						About
					</li>
					<li
						className={`p-1 hover:font-semibold cursor-pointer ${currentRef === sections.contact ? "border-text" : "border-transparent"} border rounded-sm`}
						onClick={() => handleNavClick(sections.contact)}
					>
						Contact
					</li>
				</ul>
			</nav>

			{/* Next page indicator */}

			<div className="fixed inset-0 pointer-events-none | flex flex-col justify-end items-center">
				<motion.div initial={{ y: -30 }} animate={{ y: -20 }} transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}>
					<button className="pointer-events-auto" onClick={() => (currentRef === sections.hero ? handleNavClick(sections.work) : handleNavClick(sections.hero))}>
						{currentRef === sections.hero ? <Image src={currentRef === sections.hero ? chevronDown : chevronUp} alt="down arrow" /> : <p>Back to Top?</p>}
					</button>
				</motion.div>
			</div>
		</header>
	);
}
