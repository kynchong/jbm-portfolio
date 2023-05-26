"use client";

import getImages, { ImageCollection } from "../../lib/getImages";
import Image from "next/image";

type PageProps = {
	params?: any;
	searchParams?: any;
};

// receives parameters
export default function Campaign({ params, searchParams }: PageProps) {
	const campaignId = params.campaign;
	const campaignAssets = getImages(campaignId) as ImageCollection[];
	const animatedExtensions = [".gif", ".apng", ".webp"];
	const isAnimated = (item: ImageCollection) => {
		return animatedExtensions.some((ext) => item.src.src.toLowerCase().includes(ext));
	};

	return (
		<section className="w-full h-screen | grid grid-cols-5 | overflow-hidden">
			<button onClick={() => window.history.back()} className="fixed top-10 left-10">
				⬅︎ Back
			</button>
			{/* Left Panel */}
			<div className="col-span-3 h-full snap-y snap-mandatory | overflow-y-scroll">
				{campaignAssets.map((asset: ImageCollection) => (
					<div key={asset.id} className="w-full h-full snap-center | flex flex-col justify-center items-center">
						<Image
							className="w-full h-full p-8 object-contain"
							src={asset.src}
							alt={asset.alt}
							sizes="(max-width: 768px) 50vw, 100vw"
							placeholder={isAnimated(asset) ? "empty" : "blur"}
							blurDataURL={asset.src.blurDataURL}
						/>
					</div>
				))}
			</div>

			{/* Right Panel */}
			<div className="col-span-2 | m-24 | flex flex-col justify-center items-center">
				<div className="p-8">
					<p>Title: IBM social campaign</p>
					<p>Writer: JBM</p>
					<p>Art Director: Some other guy</p>
					<p>Creative Director: Don Draper</p>
					<br />
					<p>
						Description: This campaign was this and this and ran here for a while. It did great and looks great and you can tell that by looking at it. This campaign was this and this and
						ran here for a while. it did great and looks great and you can tell that by looking at it.
					</p>
				</div>
			</div>
		</section>
	);
}
