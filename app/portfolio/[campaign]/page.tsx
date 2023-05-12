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
		<section className="w-full h-full | flex flex-row flex-nowrap">
			{/* Iterate campaignAssets */}
			<div className="w-full h-full | flex flex-col justify-start items-end">
				{campaignAssets.map((asset: ImageCollection) => (
					<div key={asset.id} className="h-screen | flex flex-col justify-center">
						<Image
							className="object-contain"
							src={asset.src}
							alt={asset.alt}
							sizes="(max-width: 768px) 50vw, 100vw"
							placeholder={isAnimated(asset) ? "empty" : "blur"}
							blurDataURL={asset.src.blurDataURL}
						/>
					</div>
				))}
			</div>
			<div className="relative w-full | flex flex-col justify-center items-center">
				<div className="fixed | w-1/4 h-1/2 | p-8 bg-white bg-opacity-60 rounded">
					<p>Title: IBM social campaign</p>
					<p>Writer: JBM</p>
					<p>Art Director: Some other guy</p>
					<p>Creative Director: Don Draper</p>
					<br />
					<p>
						Description: This campaign was this and this and ran here for a while. It did great and looks
						great and you can tell that by looking at it. This campaign was this and this and ran here for a
						while. it did great and looks great and you can tell that by looking at it.
					</p>
				</div>
			</div>
		</section>
	);
}
