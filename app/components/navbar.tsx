"use client";

import Link from "next/link"; // Routing
import { usePathname } from "next/navigation"; // Routing
import { motion, Variants } from "framer-motion"; // Animation
import { Dancing_Script } from "next/font/google"; // Fonts

const caveat = Dancing_Script({ subsets: ["latin"] });

const parentVariant: Variants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { when: "beforeChildren", staggerChildren: 0.2 } },
};

const childVariant: Variants = {
	hidden: { opacity: 0, y: "100%" },
	visible: { opacity: 1, y: 0 },
};

export default function Navbar() {
	// determine the current route displayed in the navbar
	const activeRoute = usePathname();

	return (
		<div className="flex flex-col justify-center items-center">
			{/* Site Title & Subtitle */}
			<div className="">
				<div className={`p-4 md:p-6 xl:p-8 | ${caveat.className} font-black text-center text-5xl xl:text-8xl`}>
					<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
						Do the write thing
					</motion.p>
				</div>
			</div>

			{/* Links */}
			<ul className="pb-2 md:pb-4 xl:pb-6 | flex flex-row justify-center items-center | text-base">
				<li>
					<Link className="p-4" href="/">
						Home
					</Link>
				</li>
				<li>|</li>
				<li>
					<Link className="p-4" href="/about">
						About
					</Link>
				</li>
				<li>|</li>
				<li>
					<Link className="p-4" href="/contact">
						Contact
					</Link>
				</li>
			</ul>
		</div>
	);
}
