import getImages from "../lib/getImages";
import Link from "next/link";
import Image from "next/image";

export default function Portfolio() {
	const campaigns = getImages();

	return (
		<section className="w-full h-full | flex flex-col justify-center items-center">
			<div className="px-4 | max-w-7xl w-full h-3/4 | grid grid-cols-3 grid-rows-3 | gap-2">
				{/* Gallery tiles */}
				{Object.values(campaigns).map((campaign, index) => (
					<Link key={index} className="relative group | w-full h-full | overflow-hidden" href={`/portfolio/${index}`}>
						<Image
							className="object-cover transition-transform duration-1000 group-hover:scale-105"
							src={campaign[0].src}
							alt={campaign[0].alt}
							loading="eager"
							fill={true}
							sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1440px) 33vw, (max-width: 1920px) 25vw, (max-width: 2560px) 20vw"
						/>
						<p className="absolute -bottom-full transition-[bottom] group-hover:bottom-0 left-0 right-0 | bg-accent bg-opacity-80 rounded | p-2 m-2 text-text text-xl font-bold">
							{campaign[0].alt}
						</p>
					</Link>
				))}
			</div>
		</section>
	);
}
