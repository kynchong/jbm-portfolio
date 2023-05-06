"use client";

import Image from "next/image";
import { ImageCollection, imagesCollection } from "../components/images";
import { motion, Variants, MotionProps, AnimatePresence } from "framer-motion";
import React, { useRef } from "react";

/* Global parameters ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————  */
// Controls the number of images to be displayed in the gallery
let displayedGalleryTiles = 12;
const galleryCardCycleIntervalInMilliseconds = 5000;

/* Framer Motion animation variants ————————————————————————————————————————————————————————————————————————————————————————————————————————— */
const galleryVariants: Variants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { when: "beforeChildren", staggerChildren: 0.05 } },
};

const galleryCardVariants: Variants = {
	hidden: { opacity: 0.01, zIndex: 0, y: "-100%" },
	visible: { opacity: 1, zIndex: -20, y: 0, transition: { duration: 0.2 } },
};

const cardVariants: Variants = {
	rest: {},
	hover: {},
};

const imgVariants: Variants = {
	rest: { scale: 1 },
	hover: { scale: 1.05 },
};

const overlayVariants: Variants = {
	rest: { opacity: 0 },
	hover: { opacity: 1 },
};

/* Main Export ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————— */
export default function Gallery() {
	// component return
	return (
		// Gallery Container
		<motion.div
			className="w-full h-full | flex flex-row flex-wrap | overflow-hidden | relative"
			variants={galleryVariants}
			initial="hidden"
			animate="visible"
			exit="hidden"
		>
			{imagesCollection.map((image: ImageCollection, index: number) => (
				<AnimatePresence key={image.id}>
					{/* Individual Gallery Card */}
					<motion.div
						className={`portrait:w-1/3 portrait:h-1/4 | landscape:w-1/4 landscape:h-1/3 overflow-hidden cursor-pointer`}
						key={image.id}
					>
						{/* Image and Overlay Container */}
						<motion.div
							className="relative w-full h-full"
							initial="rest"
							whileHover="hover"
							variants={cardVariants}
						>
							{/* Image */}
							<motion.div variants={imgVariants} className="relative w-full h-full">
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
								className="absolute top-0 left-0 w-full h-full | bg-opacity-90 bg-black text-white | flex justify-center items-center font-black text-[clamp(0.25rem,3vw,2rem)]"
								variants={overlayVariants}
							>
								{image.alt}
							</motion.div>
						</motion.div>
					</motion.div>
				</AnimatePresence>
			))}
		</motion.div>
	);
}
