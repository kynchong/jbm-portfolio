import img from "../../public/profile/BW_BR_Smile.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

interface CalloutProps {
	x: string;
	y: string;
	msg: string;
}

function Callout({ x, y, msg }: CalloutProps) {
	return (
		<motion.div
			className={`absolute w-1 h-1 | border-8 border-red-500 | bg-black bg-opacity-70 | overflow-hidden flex flex-col justify-center items-center`}
			initial={{ x: x, y: y }}
			whileHover={{ width: "max-content", height: "min-content", rotate: 0 }}>
			<p className="w-max h-max text-white p-4">{msg}</p>
		</motion.div>
	);
}

export default function About() {
	return (
		<section className="w-full h-full | flex flex-col justify-center items-center | overflow-hidden">
			<div className="relative w-full max-w-7xl h-1/2 | flex fles-row justify-center items-center">
				<div className="w-full p-8 h-full | leading-loose text-justify | text-lg first-letter:text-7xl first-letter:font-bold first-letter:mr-3  first-letter:float-left | flex flex-col justify-center">
					Jonathan Moore doesn't churn butter. He roundhouse kicks the cows and the butter comes straight out. When the Boogeyman goes to sleep every night, he checks his closet for Jonathan
					Moore. Jonathan Moore was an only child...eventually. Jonathan Moore is the only man to ever defeat a brick wall in a game of tennis. Jonathan Moore invented Kentucky Fried
					Chicken's famous secret recipe, with eleven herbs and spices. But nobody ever mentions the twelfth ingredient: Fear.
				</div>
				<div className="w-full h-full">
					<div className="relative w-full h-full overflow-hidden">
						<Image className="object-contain" fill={true} src={img} alt="Jonathan's headshot" placeholder="blur" blurDataURL={img.blurDataURL} />
					</div>
				</div>

				{/* <Callout x="0" y="0" msg="This is a test of the emergency broadcast system." />
				<Callout x="100px" y="200px" msg="Another message." /> */}
			</div>
		</section>
	);
}

// center about text
