"use client";

import Link from "next/link"; // Routing
import { usePathname } from "next/navigation"; // Routing
import { Dancing_Script } from "next/font/google"; // Fonts

const caveat = Dancing_Script({ subsets: ["latin"] });

export default function Navbar() {
	// determine the current route displayed in the navbar
	const activeRoute = usePathname();

	return (
		<div className="flex flex-col justify-center items-center">
			{/* Site Title & Subtitle */}
			<div className="">
				<div
					className={`p-4 md:p-6 xl:p-8 | ${caveat.className} font-black text-center text-5xl lg:text-7xl xl:text-8xl`}
				>
					<p>Do the write thing</p>
				</div>
			</div>

			{/* Links */}
			<ul className="pb-2 md:pb-4 xl:pb-6 | flex flex-row justify-center items-center | text-base">
				<li>
					<Link className={`p-4 ${activeRoute === "/" && "underline"}`} href="/">
						HOME
					</Link>
				</li>
				<li>|</li>
				<li>
					<Link className={`p-4 ${activeRoute === "/about" && "underline"}`} href="/about">
						ABOUT
					</Link>
				</li>
				<li>|</li>
				<li>
					<Link className={`p-4 ${activeRoute === "/contact" && "underline"}`} href="/contact">
						CONTACT
					</Link>
				</li>
			</ul>
		</div>
	);
}
