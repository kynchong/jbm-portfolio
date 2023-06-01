import "./globals.css";
import type { Metadata } from "next";
import { bodyFont } from "./utils/fonts";

// Metadata
export const metadata: Metadata = {
	title: "Do the write thing",
	description: "Creative portfolio of JBM",
};

// Root Layout
export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${bodyFont.className} font-light bg-background text-text`}>{children}</body>
		</html>
	);
}
