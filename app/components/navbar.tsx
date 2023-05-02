"use client";

import Link from "next/link"; // Routing
import { usePathname } from "next/navigation"; // Routing
import { motion } from "framer-motion"; // Animation
import { Caveat } from "next/font/google"; // Fonts

const caveat = Caveat({ subsets: ["latin"] });

const sentenceVariant = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    y: 100,
    transition: {
      when: "afterChildren",
    },
  },
};

const wordVariant = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  hidden: { opacity: 0, y: 100 },
};

const subtitleVariant = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 2.75,
      duration: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Navbar() {
  // determine the current route displayed in the navbar
  const activeRoute = usePathname();

  return (
    <div className="p-4 | flex flex-col justify-center items-center">
      {/* Site Title & Subtitle */}
      <div className="">
        <div
          className={`${caveat.className} font-black text-center text-[clamp(1rem,3vmax,4rem)] | leading-[clamp(1rem,3vmax,4rem)] | tracking-[-0.05em]`}
        >
          <motion.p
            initial="hidden"
            animate="visible"
            variants={sentenceVariant}
          >
            <motion.span variants={wordVariant}>Do</motion.span>
            <span> </span>
            <motion.span variants={wordVariant}>the</motion.span>
            <span> </span>
            <motion.span variants={wordVariant}>write</motion.span>
            <span> </span>
            <motion.span variants={wordVariant}>thing</motion.span>
          </motion.p>
        </div>
        <div className="font-thin text-center text-[clamp(0.5rem,1vmax,1.5rem)] | leading-[clamp(0.5rem,1vmax,1.5rem)] | tracking-[-0.05em]">
          <motion.p
            initial="hidden"
            animate="visible"
            variants={subtitleVariant}
          >
            Creative portfolio of JBM
          </motion.p>
        </div>
      </div>

      {/* Links */}
      <ul className="pt-4 | font-thin flex flex-row gap-4">
        <li
          className={`border-b ${
            activeRoute === "/" ? "border-black" : "border-transparent"
          }`}
        >
          <Link href="/">Home</Link>
        </li>
        <li>|</li>
        <li
          className={`border-b ${
            activeRoute === "/about" ? "border-black" : "border-transparent"
          }`}
        >
          <Link href="/about">About</Link>
        </li>
        <li>|</li>
        <li
          className={`border-b ${
            activeRoute === "/contact" ? "border-black" : "border-transparent"
          }`}
        >
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
