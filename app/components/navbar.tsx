"use client"

import Link from "next/link"; // Routing
import { usePathname } from 'next/navigation' // Routing
import { motion } from 'framer-motion' // Animation
import { Dancing_Script } from 'next/font/google' // Fonts

const dancing_script = Dancing_Script({ subsets: ['latin'] })

const sentenceVariant = {
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.2,
            duration: 0.5,
            when: "beforeChildren",
            staggerChildren: 0.5
        },
    },
    hidden: {
        opacity: 0,
        y: 10,
        transition: {
            when: "afterChildren",
        },
    },
}

const wordVariant = {
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    },
    hidden: { opacity: 0, y: 10 }
}

const subtitleVariant = {
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 2.75,
            duration: 0.5
        }
    },
    hidden: {
        opacity: 0,
        y: -10,
        transition: {
            duration: 0.5
        }
    }
}



export default function Navbar() {
    const activeRoute = usePathname();

    return (
        <div className="navbar p-4 md:p-8 lg:p-10 | flex flex-col justify-center items-center ">

            {/* Site Title & Subtitle */}
            <div className="title">
                <div className={`${dancing_script.className} font-normal text-center text-4xl md:text-6xl lg:text-8xl`}>
                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={sentenceVariant}>
                        <motion.span variants={wordVariant}>Do</motion.span>
                        <span> </span>
                        <motion.span variants={wordVariant}>the</motion.span>
                        <span> </span>
                        <motion.span variants={wordVariant}>write</motion.span>
                        <span> </span>
                        <motion.span variants={wordVariant}>thing</motion.span>
                    </motion.p>
                </div>
                <div className="font-thin text-center text-xs md:text-base lg:text-xl">
                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={subtitleVariant}>
                        Creative portfolio of JBM
                    </motion.p>
                </div>
            </div>

            {/* Links */}
            <ul className="links pt-4 md:pt-6 lg:pt-8 font-thin flex flex-row gap-4">
                <li className={`border-b ${activeRoute === '/' ? 'border-black' : 'border-transparent'}`}><Link href="/">Home</Link></li>
                <li>|</li>
                <li className={`border-b ${activeRoute === '/about' ? 'border-black' : 'border-transparent'}`}><Link href="/about">About</Link></li>
                <li>|</li>
                <li className={`border-b ${activeRoute === '/contact' ? 'border-black' : 'border-transparent'}`}><Link href="/contact">Contact</Link></li>
            </ul>
        </div>
    );
}
