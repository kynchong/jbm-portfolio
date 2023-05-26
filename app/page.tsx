"use client";

import { useInView } from "framer-motion";
import { MouseEvent, MutableRefObject, useEffect, useRef, useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
	// enumeration
	const sections = {
		hero: "hero",
		portfolio: "portfolio",
		about: "about",
		contact: "contact",
	};

	// references to of the page
	const heroRef = useRef<HTMLDivElement | null>(null);
	const portfolioRef = useRef<HTMLDivElement | null>(null);
	const aboutRef = useRef<HTMLDivElement | null>(null);
	const contactRef = useRef<HTMLDivElement | null>(null);

	const [currentRef, setCurrentRef] = useState<string>(sections.hero);

	// useInView hook to determine which section is currently in view
	const heroInView = useInView(heroRef, { amount: 0.5 });
	const portfolioInView = useInView(portfolioRef, { amount: 0.5 });
	const aboutInView = useInView(aboutRef, { amount: 0.5 });
	const contactInView = useInView(contactRef, { amount: 0.5 });

	// triggers changes when user scrolls
	useEffect(() => {
		if (heroInView) {
			setCurrentRef(sections.hero);
		} else if (portfolioInView) {
			setCurrentRef(sections.portfolio);
		} else if (aboutInView) {
			setCurrentRef(sections.about);
		} else if (contactInView) {
			setCurrentRef(sections.contact);
		}
	}, [heroInView, portfolioInView, aboutInView, contactInView]);

	// triggers changes when user clicks
	useEffect(() => {
		if (currentRef === sections.hero && !heroInView) {
			heroRef.current?.scrollIntoView();
		} else if (currentRef === sections.portfolio && !portfolioInView) {
			portfolioRef.current?.scrollIntoView();
		} else if (currentRef === sections.about && !aboutInView) {
			aboutRef.current?.scrollIntoView();
		} else if (currentRef === sections.contact && !contactInView) {
			contactRef.current?.scrollIntoView();
		}
	}, [currentRef]);

	return (
		<main className="w-screen h-screen overflow-y-scroll snap-mandatory snap-y scroll-smooth">
			{/* Header */}
			<Header sections={sections} currentRef={currentRef} handleNavClick={setCurrentRef} />

			{/* Content */}
			<div ref={heroRef} className="w-screen h-screen relative snap-always snap-start">
				<Hero />
			</div>
			<div ref={portfolioRef} className="w-screen h-screen relative snap-always snap-start">
				<Portfolio />
			</div>
			<div ref={aboutRef} className="w-screen h-screen relative snap-always snap-start">
				<About />
			</div>
			<div ref={contactRef} className="w-screen h-screen relative snap-always snap-start">
				<Contact />
			</div>

			{/* Footer */}
			<Footer />
		</main>
	);
}
