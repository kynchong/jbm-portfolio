"use client";

import { useState, useEffect } from "react";

import { AnimatePresence, motion, Variants } from "framer-motion";

// Parent Variant
const parentVariants: Variants = {
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

const childVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const childrenCount = [1, 2, 3, 4, 5, 6, 7];

export default function Contact() {
  const [order, setOrder] = useState(0);

  return (
    <motion.div
      variants={parentVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {childrenCount.map((child, index) => (
        <AnimatePresence key={index}>
          <motion.div variants={childVariants}>{child}</motion.div>
        </AnimatePresence>
      ))}
    </motion.div>
  );
}
