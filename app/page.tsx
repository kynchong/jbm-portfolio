"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Hero from "./components/Hero";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
	// enumeration
	const sections = {
		hero: "hero",
		work: "work",
		about: "about",
		contact: "contact",
	};

	// references to of the page
	const refs = {
		hero: useRef<HTMLDivElement | null>(null),
		work: useRef<HTMLDivElement | null>(null),
		about: useRef<HTMLDivElement | null>(null),
		contact: useRef<HTMLDivElement | null>(null),
	};

	const views = {
		hero: useInView(refs.hero, { amount: 0.5 }),
		work: useInView(refs.work, { amount: 0.5 }),
		about: useInView(refs.about, { amount: 0.5 }),
		contact: useInView(refs.contact, { amount: 0.5 }),
	};

	const [currentRef, setCurrentRef] = useState<string>(sections.hero);
	const [targetRef, setTargetRef] = useState<string>(sections.hero);

	// triggers changes when user scrolls
	useEffect(() => {
		if (views.hero) {
			setCurrentRef(sections.hero);
		} else if (views.work) {
			setCurrentRef(sections.work);
		} else if (views.about) {
			setCurrentRef(sections.about);
		} else if (views.contact) {
			setCurrentRef(sections.contact);
		}
	}, [views.hero, views.work, views.about, views.contact]);

	// triggers changes when user clicks
	useEffect(() => {
		if (targetRef === sections.hero && !views.hero) {
			refs.hero.current?.scrollIntoView({ behavior: "smooth" });
		} else if (targetRef === sections.work && !views.work) {
			refs.work.current?.scrollIntoView({ behavior: "smooth" });
		} else if (targetRef === sections.about && !views.about) {
			refs.about.current?.scrollIntoView({ behavior: "smooth" });
		} else if (targetRef === sections.contact && !views.contact) {
			refs.contact.current?.scrollIntoView({ behavior: "smooth" });
		}
	}, [targetRef]);

	return (
		<main className="w-screen h-screen overflow-y-scroll snap-mandatory snap-y scroll-smooth">
			{/* Header */}
			<Header sections={sections} currentRef={currentRef} handleNavClick={setTargetRef} />

			{/* Content */}
			<div ref={refs.hero} className="w-screen h-screen relative snap-always snap-start">
				<Hero />
			</div>
			<div ref={refs.work} className="w-screen h-screen relative snap-always snap-start">
				<Work />
			</div>
			<div ref={refs.about} className="w-screen h-screen relative snap-always snap-start">
				<About />
			</div>
			<div ref={refs.contact} className="w-screen h-screen relative snap-always snap-start">
				<Contact />
			</div>

			{/* Footer */}
			<Footer />
		</main>
	);
}
