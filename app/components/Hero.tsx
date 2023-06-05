import { headingFont } from "../utils/fonts";

const tagline = [
	{ tag: "Do", color: "hover:text-[#56bce8]" }, // Leonardo
	{ tag: "The", color: "hover:text-[#eaab3c]" }, // Michaelangelo
	{ tag: "WRITE", color: "hover:text-[#a176ae]" }, // Donatello
	{ tag: "Thing.", color: "hover:text-[#d75934]" }, // Raphael
];

type taglineProps = {
	tag: string;
	color: string;
};

const getTagline = ({ tag, color }: taglineProps) => {
	return (
		<p key={tag} className={`${color} w-min`}>
			{tag}
		</p>
	);
};

export default function Hero() {
	return (
		<section className="p-8 w-full h-full | flex flex-col justify-center items-end | overflow-hidden">
			<div className={`${headingFont.className} relative text-[20vmin] leading-none cursor-default | flex flex-col items-end`}>{tagline.map((tagline) => getTagline(tagline))}</div>
		</section>
	);
}
