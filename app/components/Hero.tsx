import { headingFont } from "../utils/fonts";

const tagline = [
	{ tag: "DO", color: "hover:text-blue-500" },
	{ tag: "THE", color: "hover:text-orange-500" },
	{ tag: "WRITE", color: "hover:text-purple-500" },
	{ tag: "THING", color: "hover:text-red-500" },
];

type taglineProps = {
	tag: string;
	color: string;
};

const getTagline = ({ tag, color }: taglineProps) => {
	return (
		<div className="overflow-hidden">
			<p className={`${color} w-min`}>{tag}</p>
		</div>
	);
};

export default function Hero() {
	return (
		<section className="w-full h-full | flex flex-col justify-center items-center | overflow-hidden">
			<div className={`${headingFont.className} relative text-[20vmin] leading-none cursor-default`}>{tagline.map((tagline) => getTagline(tagline))}</div>
			<div className="absolute bottom-10 left-1/2 text-4xl">⬇︎</div>
		</section>
	);
}
