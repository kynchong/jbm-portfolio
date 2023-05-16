"use client";

import Link from "next/link"; // Routing

export default function Navbar() {
	return (
		<div className="p-2 md:p-4 lg:p-6 xl:p-8 | flex flex-col justify-center items-center">
			{/* Site Title & Subtitle */}

			<div className="pb-0 md:pb-2 lg:pb-4 xl:pb-6 | font-black text-center text-5xl lg:text-7xl xl:text-8xl">
				<p>DO THE WRITE THING</p>
			</div>

			{/* Links */}
			<ul className="flex flex-row justify-center items-center | text-base">
				<li>
					<Link className="px-4" href="/">
						HOME
					</Link>
				</li>
				<li>
					<div className="py-3 border-l border-gray-500"></div>
				</li>
				<li>
					<Link className="px-4" href="/about">
						ABOUT
					</Link>
				</li>
				<li>
					<div className="py-3 border-r border-gray-500"></div>
				</li>
				<li>
					<Link className="px-4" href="/contact">
						CONTACT
					</Link>
				</li>
			</ul>
		</div>
	);
}
