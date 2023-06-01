import { Secular_One, Inter } from "next/font/google";

export const bodyFont = Inter({
	subsets: ["latin"],
});

export const headingFont = Secular_One({ weight: "400", preload: false });
