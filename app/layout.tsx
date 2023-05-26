import "./globals.css";
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";

// Nextjs Google Font Declaration for non-variable font Secular One
const quicksand = Quicksand({ subsets: ["latin"] });

// Metadata
export const metadata: Metadata = {
	title: "Do the write thing",
	description: "Creative portfolio of JBM",
};

// Root Layout
export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${quicksand.className} font-light bg-background text-text`}>{children}</body>
		</html>
	);
}
