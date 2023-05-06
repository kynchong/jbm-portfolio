import "./globals.css";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

// Metadata
export const metadata = {
	title: "Do the write thing",
	description: "Creative portfolio of JBM",
};

// Root Layout
export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className="w-screen supports[height:100cqh]:h-[100cqh] supports-[height:100svh]:h-[100svh] | flex justify-center items-center">
				<div className="max-w-7xl w-full h-full | grid grid-rows-[auto_1fr_auto] [grid-template-areas:'navbar'_'content'_'footer']">
					{/* Navigation Bar */}
					<nav className="[grid-area:navbar]">
						<Navbar />
					</nav>

					{/* Main Content */}
					<main className="[grid-area:content]">{children}</main>

					{/* Footer */}
					<footer className="[grid-area:footer]">
						<Footer />
					</footer>
				</div>
			</body>
		</html>
	);
}
