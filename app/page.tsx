import getImages from "../app/lib/getImages";
import Image from "next/image";
import Link from "next/link";

// Render gallery
export default function Home() {
	const campaigns = getImages();

	return (
		<section className="px-0 md:px-4 lg:px-8 xl:px-10 | w-full h-full | flex flex-row flex-wrap justify-center items-center">
			{/* Gallery tiles */}
			{Object.values(campaigns).map((campaign, index) => (
				<Link
					key={index}
					className="relative group | portrait:w-1/3 portrait:h-1/4 landscape:w-1/4 landscape:h-1/3 | overflow-hidden"
					href={`/portfolio/${index}`}
				>
					<Image
						className="object-cover transition-transform duration-1000 group-hover:scale-105"
						src={campaign[0].src}
						alt={campaign[0].alt}
						loading="eager"
						fill={true}
						sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1440px) 33vw, (max-width: 1920px) 25vw, (max-width: 2560px) 20vw"
					/>
					<p className="absolute -bottom-full transition-[bottom] group-hover:bottom-0 left-0 right-0 | bg-black bg-opacity-80 rounded | p-2 m-2 text-white text-4xl font-bold">
						{campaign[0].alt}
					</p>
				</Link>
			))}
		</section>
	);
}
