"use client"

import { images } from './components/images'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'

const galleryVariants: Variants = {
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
  hidden: { opacity: 0 },
}

const itemVariants: Variants = {
  visible: { y: 0, opacity: 1 },
  hidden: { y: 100, opacity: 0 },
}

// Render gallery
export default function Home() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={galleryVariants}
      className="flex flex-row flex-wrap">
      {images.map((image, index) => {
        return (
          <motion.div
            variants={itemVariants}
            key={index} className="group relative h-max basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 overflow-hidden">
            <Image className="object-cover transition-transform group-hover:scale-110" src={image.path} alt={`${index}`} />
            <div className="absolute top-0 left-0 h-full w-full | flex justify-center items-center | transition bg-black bg-opacity-80 | opacity-0 group-hover:opacity-100">
              <p className="text-white text-4xl">{image.title}</p>
            </div>
          </motion.div>
        )
      })}
    </motion.section>
  )
}