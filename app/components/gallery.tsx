"use client";

import Image from "next/image";
import { ImageCollection, imagesCollection } from "../components/images";
import { motion, Variants, MotionProps, AnimatePresence } from "framer-motion";
import React from "react";

/* Global parameters ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————  */
// Controls the number of images to be displayed in the gallery
let displayedGalleryTiles = 12;
const galleryCardCycleIntervalInMilliseconds = 5000;

// Defining Framer Motion types
type MotionDivProps = MotionProps & {
  children?: React.ReactNode;
};

// Defining Framer Motion arrays
type MotionDivArray = Array<React.ReactElement<MotionDivProps>>;

/* Framer Motion animation variants ————————————————————————————————————————————————————————————————————————————————————————————————————————— */
const galleryVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      delayChildren: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const imgVariants: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
};

const overlayVariants: Variants = {
  rest: { opacity: 0 },
  hover: { opacity: 1 },
};

/* Converts the image collection into motion divs ————————————————————————————————————————————————————————————————————————————————————————————  */
const cards: MotionDivArray = imagesCollection.map((image: ImageCollection) => (
  <AnimatePresence mode="wait" key={image.id}>
    <motion.div
      className="portrait:w-1/3 portrait:h-1/4 | landscape:w-1/4 landscape:h-1/3 overflow-hidden"
      variants={cardVariants}
      key={image.id}
    >
      <motion.div
        className="relative w-full h-full"
        initial="rest"
        whileHover="hover"
      >
        <motion.div variants={imgVariants} className="relative w-full h-full">
          <Image
            className="object-cover"
            fill={true}
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 30vw, 25vw"
            src={image.src}
            alt={`${image.alt}`}
          />
        </motion.div>
        <motion.div
          className="absolute top-0 left-0 w-full h-full | bg-opacity-90 bg-black text-white | flex justify-center items-center font-black text-[clamp(0.25rem,3vw,2rem)]"
          variants={overlayVariants}
        >
          {image.alt}
        </motion.div>
      </motion.div>
    </motion.div>
  </AnimatePresence>
));

/* Initialize Featured Cards —————————————————————————————————————————————————————————————————————————————————————————————————————————————————— */
const initializeFeaturedCards = (maxTiles: number) => {
  // make a set of random, distinct indices
  const indices = new Set<number>();
  while (indices.size < maxTiles) {
    indices.add(Math.floor(Math.random() * cards.length));
  }

  // use those indices to return an array of the imagesData
  const returnData: MotionDivArray = [];
  indices.forEach((index) => {
    returnData.push(cards[index]);
  });

  return returnData;
};

/* Cycle Featured Cards ———————————————————————————————————————————————————————————————————————————————————————————————————————————————————  */
const cycleFeaturedItems = (
  featuredCards: MotionDivArray,
  setFeaturedCards?: any
) => {
  let swapInCardIndex = Math.floor(Math.random() * cards.length);

  // if the replacement index is in the featuredCards, cycle again
  while (featuredCards.includes(cards[swapInCardIndex])) {
    swapInCardIndex = Math.floor(Math.random() * cards.length);
  }

  const swapOutCardIndex = Math.floor(Math.random() * featuredCards.length);

  // swap featured cards
  const featuredCardsCopy = [...featuredCards];

  // swap in
  featuredCardsCopy[swapOutCardIndex] = cards[swapInCardIndex];

  // set featured cards
  setFeaturedCards(featuredCardsCopy);
};

/* Main Export ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————— */
export default function Gallery() {
  // The featuredImages are the number
  const [featuredCards, setFeaturedCards] = React.useState<MotionDivArray>([]);
  const [cardCount, setCardCount] = React.useState(displayedGalleryTiles);

  // initialize featured cards
  React.useEffect(() => {
    setFeaturedCards(initializeFeaturedCards(cardCount));
  }, [cardCount]);

  // cycle featured cards
  const intervalRef = React.useRef<null | NodeJS.Timeout>(null);
  React.useEffect(() => {
    intervalRef.current = setInterval(() => {
      cycleFeaturedItems(featuredCards, setFeaturedCards);
    }, galleryCardCycleIntervalInMilliseconds);

    return () => {
      clearInterval(intervalRef.current as NodeJS.Timeout);
    };
  }, [featuredCards]);

  // This is for window resize to recalculate the number of gallery cards that should be displayed. We could just keep the gallery card count the same but might look stretched in cases of extreme window configurations (ie. very long or very tall.)
  // useEffect(() => {
  //   const handleResize = () => {
  //     console.log(window.innerWidth / window.innerHeight);
  //     // if (window.innerWidth < 768) {
  //     //   setCardCount(9);
  //     // } else if (window.innerWidth < 1024) {
  //     //   setCardCount(10);
  //     // } else if (window.innerWidth < 1440) {
  //     //   setCardCount(12);
  //     // } else if (window.innerWidth < 1920) {
  //     //   setCardCount(15);
  //     // } else {
  //     //   setCardCount(16);
  //     // }
  //   };
  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  // component return
  return (
    <motion.div
      className="w-full h-full | flex flex-row flex-wrap"
      variants={galleryVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {featuredCards}
    </motion.div>
  );
}
