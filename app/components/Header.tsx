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
			<nav className="p-8">
				<ul className="text-text | flex flex-col justify-between items-start gap-8">
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
