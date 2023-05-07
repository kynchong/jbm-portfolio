"use client";

import Image from "next/image";
import { imagesCollection } from "../components/images";
import { motion, Variants, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

/* Global parameters ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————  */
const maxCardsDisplayed = 12;
const cardSwapInterval = 5000;

/* Framer Motion animation variants ————————————————————————————————————————————————————————————————————————————————————————————————————————— */
const carouselVariant: Variants = {
	hidden: {},
	visible: { transition: { when: "beforeChildren", staggerChildren: 0.2 } },
};

const carouselCardVariant: Variants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
};

const cardVariant: Variants = {
	rest: { opacity: 0, transition: { duration: 2 } },
	entry: { opacity: 1, transition: { duration: 2 } },
	hover: {},
};

const cardImageVariant: Variants = {
	rest: { scale: 1 },
	hover: { scale: 1.05 },
};

const cardOverlayVariant: Variants = {
	rest: { opacity: 0 },
	hover: { opacity: 1 },
};

/* Card component ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————  */
const cards = imagesCollection.map((image, index) => (
	// Image and Overlay Container
	<AnimatePresence mode="sync" key={index}>
		<motion.div
			key={index}
			className="absolute top-0 left-0 w-full h-full"
			initial="rest"
			animate="entry"
			exit="rest"
			whileHover="hover"
			variants={cardVariant}
		>
			{/* Image */}
			<motion.div variants={cardImageVariant} className="relative w-full h-full">
				<Image
					className="object-cover"
					fill={true}
					sizes="(max-width: 768px) 50vw, (max-width: 1024px) 30vw, 25vw"
					src={image.src}
					alt={`${image.alt}`}
				/>
			</motion.div>

			{/* Overlay */}
			<motion.div
				className="absolute top-0 left-0 w-full h-full | bg-opacity-70 bg-black text-white | flex justify-center items-center font-black text-3xl"
				variants={cardOverlayVariant}
			>
				{image.alt}
			</motion.div>
		</motion.div>
	</AnimatePresence>
));

/* Random unique indices ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————  */
const getRandomUniqueIndex = (cardsIndices: number[]) => {
	let index = Math.floor(Math.random() * cards.length);
	while (cardsIndices.includes(index)) {
		index = Math.floor(Math.random() * cards.length);
	}
	return index;
};

const initializeFeaturedCards = () => {
	let newArray: number[] = [];
	for (let i = 0; i < maxCardsDisplayed; i++) {
		newArray.push(getRandomUniqueIndex(newArray));
	}
	return newArray;
};

/* Main Export ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————— */
export default function Gallery() {
	const [featuredCards, setFeaturedCards] = useState<number[]>([]);

	// initialize featured cards
	useEffect(() => {
		setFeaturedCards(initializeFeaturedCards());
	}, []);

	// randomize featured cards on an interval
	useEffect(() => {
		const interval = setInterval(() => {
			// get random indices
			const randomIndex = Math.floor(Math.random() * featuredCards.length);
			const replacementIndex = getRandomUniqueIndex(featuredCards);

			// replace random index with replacement index
			setFeaturedCards((prevIndices) => {
				const newIndices = [...prevIndices];
				newIndices[randomIndex] = replacementIndex;
				return newIndices;
			});
		}, cardSwapInterval);
		return () => clearInterval(interval);
	}, [featuredCards]);

	/* Return ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————  */
	return (
		<motion.div
			className="w-full h-full | flex flex-row flex-wrap | overflow-hidden"
			variants={carouselVariant}
			initial="hidden"
			animate="visible"
			exit="hidden"
		>
			{/* Create array of cards */}
			{Array.from({ length: maxCardsDisplayed }).map((_, cardIndex) => (
				<motion.div
					key={cardIndex}
					variants={carouselCardVariant}
					className="relative portrait:w-1/3 portrait:h-1/4 | landscape:w-1/4 landscape:h-1/3 overflow-hidden cursor-pointer | bg-black border border-white"
				>
					{/* Iterate featuredCards and display cards  */}
					{cards[featuredCards[cardIndex]]}
				</motion.div>
			))}
		</motion.div>
	);
}
