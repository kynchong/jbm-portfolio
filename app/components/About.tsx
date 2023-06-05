import img from "../../public/profile/BW_BR_Smile_half.jpeg";
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
			whileHover={{ width: "max-content", height: "min-content", rotate: 0 }}
		>
			<p className="w-max h-max text-white p-4">{msg}</p>
		</motion.div>
	);
}

export default function About() {
	return (
		<section className="w-full h-full | flex flex-col justify-center items-center | overflow-hidden">
			<div className="relative w-full max-w-xl | flex fles-row justify-center items-center">
				<div className="w-full p-8 grow shrink-0 basis-full h-full | leading-loose text-justify | first-letter:text-7xl first-letter:font-bold first-letter:mr-3  first-letter:float-left">
					Jonathan Moore doesn't churn butter. He roundhouse kicks the cows and the butter comes straight out. When the Boogeyman goes to sleep every night, he checks his closet for Jonathan
					Moore. Jonathan Moore was an only child...eventually. Jonathan Moore is the only man to ever defeat a brick wall in a game of tennis. Jonathan Moore invented Kentucky Fried
					Chicken's famous secret recipe, with eleven herbs and spices. But nobody ever mentions the twelfth ingredient: Fear. Jonathan Moore has two speeds. Walk, and Kill. Jonathan Moore
					doesn't read books. He stares them down until he gets the information he wants. Jonathan Moore does not sleep. He waits. Police label anyone attacking Jonathan Moore as a Code
					45-11... a suicide. Someone once videotaped Jonathan Moore getting pissed off. It was called Walker: Texas Chain Saw Massacre. Jonathan Moore does not get frostbite. Jonathan Moore
					bites frost. Jonathan Moore can write a letter by using sign language. Jonathan Moore is currently suing NBC, claiming Law and Order are trademarked names for his left and right
					legs.
				</div>
				<div className="w-full h-full grow-0 shrink-0 basis-1/2">
					<div className="relative w-full h-full overflow-hidden">
						<Image className="object-contain object-left" fill={true} src={img} alt="Jonathan's Profile Picture" />
					</div>
				</div>

				{/* <Callout x="0" y="0" msg="This is a test of the emergency broadcast system." />
				<Callout x="100px" y="200px" msg="Another message." /> */}
			</div>
		</section>
	);
}
