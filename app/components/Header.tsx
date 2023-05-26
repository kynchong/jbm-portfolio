// Header.js
import { Dispatch, MutableRefObject, SetStateAction } from "react";

interface HeaderProps {
	sections: any;
	currentRef: string;
	handleNavClick: Dispatch<SetStateAction<string>>;
}

export default function Header({ sections: sections, currentRef: currentRef, handleNavClick }: HeaderProps) {
	return (
		<header className="fixed top-0 left-0 z-50">
			<h1 className="p-3 mix-blend-difference">DONALD DRAPER</h1>
			<nav className="p-2">
				<ul className="text-text origin-bottom-left rotate-90 | flex flex-row flex-nowrap justify-evenly items-center gap-8">
					<li className={`hover:text-text cursor-pointer ${currentRef === sections.hero && "font-black"}`} onClick={() => handleNavClick(sections.hero)}>
						HOME
					</li>
					<li className={`hover:text-text cursor-pointer ${currentRef === sections.portfolio && "font-black"}`} onClick={() => handleNavClick(sections.portfolio)}>
						PORTFOLIO
					</li>
					<li className={`hover:text-text cursor-pointer ${currentRef === sections.about && "font-black"}`} onClick={() => handleNavClick(sections.about)}>
						ABOUT
					</li>
					<li className={`hover:text-text cursor-pointer ${currentRef === sections.contact && "font-black"}`} onClick={() => handleNavClick(sections.contact)}>
						CONTACT
					</li>
				</ul>
			</nav>
		</header>
	);
}
