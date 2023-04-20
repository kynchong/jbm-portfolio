"use client"

import Image from "next/image"
import { useState, useEffect } from 'react'

export default function Gallery(props: any) {

    // Set up gallery items
    const images = props.items
    const NUM_FEATURED_IMAGES = Math.min(images.length, 9);
    const SWAP_INTERVAL_MS = 5000;

    // Set up state
    const [featuredImages, setFeaturedImages] = useState(
        images.slice(0, NUM_FEATURED_IMAGES)
    );
    const [selectedImage, setSelectedImage] = useState(featuredImages[0]);

    // Swap featured images every few seconds
    useEffect(() => {

        // Set up swap interval
        const swapIntervalId = setInterval(() => {

            const randomIndex = Math.floor(Math.random() * featuredImages.length); // Random index
            const newFeaturedImages = [...featuredImages]; // Copy array
            newFeaturedImages[randomIndex] = images[Math.floor(Math.random() * images.length)]; // Swap image
            setFeaturedImages(newFeaturedImages); // Update state

        }, SWAP_INTERVAL_MS);

        return () => clearInterval(swapIntervalId);
    }, [featuredImages, images]);

    // Display gallery
    return (
        <section className="h-full flex flex-row flex-wrap">

            {/* Display featured images */}
            {featuredImages.map((image: any) => (
                <div key={image.index} className="w-full h-full md:w-1/2 md:h-1/2 lg:w-1/3 lg:h-1/3 relative overflow-hidden">
                    <Image className="object-cover transition hover:scale-110" src={`/gallery-items/${image}`} alt={image} fill={true} onClick={() => setSelectedImage(image)} />
                </div>
            ))}

            {/* Display selected image  */}
            {/* <div className="fixed top-0 right-0">
                <Image src={`/gallery-items/${selectedImage}`} alt={selectedImage.alt} width={400} height={400} />
            </div> */}
        </section>
    );
}