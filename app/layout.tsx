import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Image from "next/image";
import bgImage from "../public/background.jpeg";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

const font = Open_Sans({ subsets: ["latin"] });

// Metadata
export const metadata: Metadata = {
	title: "Do the write thing",
	description: "Creative portfolio of JBM",
};

// Root Layout
export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={`${font.className}`}>
			<body className="relative w-screen supports[height:100cqh]:h-[100cqh] supports-[height:100svh]:h-[100svh] | flex justify-center items-center">
				{/* Background Image  */}
				<Image
					className="absolute inset-0 pointer-events-none -z-50"
					src={bgImage}
					alt="Background image"
					fill={true}
					sizes="(max-width: 768px) 50vw, 100vw"
				/>

				{/* Content */}
				<div className="w-full h-full | grid grid-rows-[auto_1fr_auto] [grid-template-areas:'navbar'_'content'_'footer']">
					{/* Navigation Bar */}
					<nav className="[grid-area:navbar]">
						<Navbar />
					</nav>

					{/* Main Content */}
					<main className="[grid-area:content] overflow-y-scroll">{children}</main>

					{/* Footer */}
					<footer className="[grid-area:footer]">
						<Footer />
					</footer>
				</div>
			</body>
		</html>
	);
}
