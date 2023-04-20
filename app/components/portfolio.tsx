"use client"

import Image from 'next/image'
import { useState } from 'react'

export default function Portfolio(props: any) {

  const SRC_IMAGES = props.items

  const [galleryImages, setGalleryImages] = useState(SRC_IMAGES)


  return <section className="w-full h-full overflow-hidden | flex flex-col items-end">
    <div className="w-2/3 h-full [transform:translateY(-20%)_rotateX(50deg)_rotateZ(20deg)] | flex flex-row flex-wrap">

      {/* Display featured images */}
      {galleryImages.map((image: any) => (
        <div key={image}
          className="relative transition [box-shadow:0px_0px_0px_rgba(0,0,0,0)]
              w-full h-1/5 object-contain
              md:w-full md:h-full md:object-cover
              lg:w-1/3 lg:h-1/3 lg:object-cover
              hover:[transform:translateX(-40px)_translateY(-40px)] hover:[box-shadow:40px_40px_40px_-15px_rgba(0,0,0,0.5);]">
          <Image className="object-cover" src={`/gallery-items/${image}`} alt={image} fill={true} sizes="(max-width:500px) 100vw, (max-width:800px) 50vw, (max-width:1200px) 33vw" />
        </div>
      ))}

      {/* Display selected image  */}
      {/* <div className="fixed top-0 right-0">
        <Image src={`/gallery-items/${selectedImage}`} alt={selectedImage.alt} width={400} height={400} />
      </div> */}

    </div>

  </section>

  // // Set up gallery items
  // const images = props.items
  // const NUM_FEATURED_IMAGES = Math.min(images.length, 12);
  // const SWAP_INTERVAL_MS = 5000;

  // // Set up state
  // const [featuredImages, setFeaturedImages] = useState(images.slice(0, NUM_FEATURED_IMAGES));
  // const [selectedImage, setSelectedImage] = useState(featuredImages[0]);

  // // change the css grid's "Order" property in an element's class list
  // function setOrder(element: any, order: number) {
  //     element.classList.add(`order-${order}`);
  // }

  // // Swap featured images every few seconds
  // useEffect(() => {

  //     // Set up swap interval
  //     const swapIntervalId = setInterval(() => {

  //         const randomIndex = Math.floor(Math.random() * featuredImages.length);
  //         const newFeaturedImages = [...featuredImages];
  //         newFeaturedImages[randomIndex] = images[Math.floor(Math.random() * images.length)];
  //         setFeaturedImages(newFeaturedImages);

  //     }, SWAP_INTERVAL_MS);

  //     return () => clearInterval(swapIntervalId);
  // }, [featuredImages]);

  // // Display gallery
  // return (
  //     <section className="w-full h-full overflow-hidden | flex flex-col items-end">
  //         <div className="w-2/3 h-full [transform:translateY(-20%)_rotateX(50deg)_rotateZ(20deg)] | flex flex-row flex-wrap">

  //             {/* Display featured images */}
  //             {featuredImages.map((image: any) => (
  //                 <div key={image} className="w-full h-full md:w-1/2 md:h-1/2 lg:w-1/3 lg:h-1/3 relative | transition-transform [transform:perspective(500px)] hover:[transform:translateX(-20px)_translateY(-20px)]">
  //                     <Image className="object-cover" src={`/gallery-items/${image}`} alt={image} fill={true} sizes="(max-width:500px) 100vw, (max-width:800px) 50vw, (max-width:1200px) 33vw" onClick={() => setSelectedImage(image)} />
  //                 </div>
  //             ))}

  //             {/* Display selected image  */}
  //             {/* <div className="fixed top-0 right-0">
  //             <Image src={`/gallery-items/${selectedImage}`} alt={selectedImage.alt} width={400} height={400} />
  //             </div> */}

  //         </div>

  //     </section>
  // );
}